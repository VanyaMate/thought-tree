export class CreateEntityPointDto {
    readonly author_id: number;
    readonly parent_id: number | null;
    readonly title: string;
    readonly text: string;
}