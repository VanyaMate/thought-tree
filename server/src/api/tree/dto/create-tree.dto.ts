export class CreateTreeDto {
    readonly name: string;
    readonly author_id: number;
    readonly tree_json?: string;
}