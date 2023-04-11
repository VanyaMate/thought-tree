import {Body, Controller, Get, Headers, Param, Post, UseGuards} from "@nestjs/common";
import {JwtAuthGuard} from "../auth/jwt-auth.guard";
import {CreateTreeDto} from "./dto/create-tree.dto";
import {TreeService} from "./tree.service";

@Controller('/api/tree')
export class TreeController {

    constructor(private treeService: TreeService) {}

    @Post('/create')
    @UseGuards(JwtAuthGuard)
    create (@Body() treeDto: CreateTreeDto, @Headers('authorization') authToken: string) {
        return this.treeService.create(treeDto, authToken);
    }

    @Post('/delete')
    @UseGuards(JwtAuthGuard)
    delete (@Body() data: { id: number }, @Headers('authorization') authToken: string) {
        return this.treeService.delete(data.id, authToken);
    }

    @Post('/update/tree_json')
    @UseGuards(JwtAuthGuard)
    updateTreeJson (@Body() data: { id: number, tree_json: string }, @Headers('authorization') authToken: string) {
        return this.treeService.updateTreeJson(data.id, data.tree_json, authToken);
    }

    @Get('/get/:id')
    getById(@Param() data: { id: number }) {
        return this.treeService.getById(data.id);
    }

}