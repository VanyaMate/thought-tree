import {CreateTreeDto} from "./dto/create-tree.dto";
import {HttpException, HttpStatus, Inject} from "@nestjs/common";
import {Tree} from "./tree.model";
import {JwtService} from "@nestjs/jwt";
import {User} from "../user/user.model";
import {EntityPointService} from "../entity-point/entity-point.service";

export interface ITreeEntity {
    id: number,
    points: ITreeEntity[],
}

export class TreeService {

    constructor(@Inject("TREE_REPOSITORY") private treeRepository: typeof Tree,
                private jwtService: JwtService,
                private entityPointService: EntityPointService) {}

    async create (treeDto: CreateTreeDto, authToken: string) {
        try {
            const [_, token] = authToken.split(' ');
            const { id: author_id, login } = this.jwtService.decode(token) as { id: number, login: string };

            const entity = await this.entityPointService.create({
                title: treeDto.title,
                text: treeDto.description || 'some entity text',
            }, authToken);

            const tree = await this.treeRepository.create({
                ...treeDto,
                author_id,
                tree_json: JSON.stringify({ id: entity.id, points: [] })
            })

            return {...tree.dataValues, author: login};
        }
        catch (e) {
            throw new HttpException('Неверные данные', HttpStatus.BAD_REQUEST);
        }
    }

    async delete (id: number, authToken: string) {
        try {
            const [_, token] = authToken.split(' ');
            const { id: author_id, login } = this.jwtService.decode(token) as { id: number, login: string };

            const tree = await this.treeRepository.findByPk(id, { include: { model: User }});

            if (tree && tree.author.id === author_id) {
                await tree.destroy()
                return true;
            } else {
                throw new HttpException('Нет доступа', HttpStatus.BAD_REQUEST);
            }
        }
        catch (e) {
            throw new HttpException('Неверные данные', HttpStatus.BAD_REQUEST);
        }
    }

    async updateTreeJson(id: number, tree_json: string, authToken: string) {
        try {
            const [_, token] = authToken.split(' ');
            const { id: author_id, login } = this.jwtService.decode(token) as { id: number, login: string };

            const tree = await this.treeRepository.findByPk(id, { include: { model: User }});

            if (tree && tree.author.id === author_id) {
                tree.set('tree_json', tree_json);
                await tree.save();
                return true;
            } else {
                throw new HttpException('Нет доступа', HttpStatus.BAD_REQUEST);
            }
        }
        catch (e) {
            throw new HttpException('Неверные данные', HttpStatus.BAD_REQUEST);
        }
    }

    async getById (id: number) {
        try {
            const tree = await this.treeRepository.findByPk(id, { include: {
                model: User,
                attributes: ['id', 'login']
            }});

            const entityIdsList = [...new Set(this._parseEntityIdsFromTreeJson(tree.tree_json))];
            const entityData = await this.entityPointService.getByIds(entityIdsList);

            return {
                tree,
                entities: entityData,
            };
        }
        catch (e) {
            throw new HttpException('Неверные данные', HttpStatus.BAD_REQUEST);
        }
    }

    private _parseEntityIdsFromTreeJson (tree_json: string): number[] {
        try {
            const tree = JSON.parse(tree_json);
            if (tree.id) {
                return this._getIdsFromEntity(tree);
            } else {
                return [];
            }
        }
        catch (e) {
            return [];
        }
    }

    private _getIdsFromEntity (entity: ITreeEntity) {
        return [entity.id, ...entity.points.map((point) => this._getIdsFromEntity(point))].flat(1);
    }

}