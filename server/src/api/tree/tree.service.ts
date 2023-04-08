import {CreateTreeDto} from "./dto/create-tree.dto";
import {HttpException, HttpStatus, Inject} from "@nestjs/common";
import {Tree} from "./tree.model";
import {JwtService} from "@nestjs/jwt";
import {User} from "../user/user.model";

export class TreeService {

    constructor(@Inject("TREE_REPOSITORY") private treeRepository: typeof Tree,
                private jwtService: JwtService) {}

    async create (treeDto: CreateTreeDto, authToken: string) {
        try {
            const [_, token] = authToken.split(' ');
            const { id: author_id, login } = this.jwtService.decode(token) as { id: number, login: string };

            const tree = await this.treeRepository.create({
                ...treeDto,
                author_id
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

}