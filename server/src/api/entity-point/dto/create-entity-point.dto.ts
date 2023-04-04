export class CreateEntityPointDto {
    readonly authorId: number;
    readonly parentId: number | null;
    readonly title: string;
    readonly text: string;
    readonly pointsIds: number[];
}