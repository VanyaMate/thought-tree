import {User} from "../../user/user.model";
import {EntityPoint} from "../entity-point.model";

export class CreateEntityPointDto {
    readonly author: User;
    readonly parent: EntityPoint | null;
    readonly title: string;
    readonly text: string;
    readonly points: EntityPoint[];
}