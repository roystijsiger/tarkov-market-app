import { ApiProperty } from "@nestjs/swagger";

export class CreateFavoriteDto {
    @ApiProperty({
        description: 'The id of the user',
    })
    userId: Number;

    @ApiProperty({
        description: 'The id of the item'
    })
    item: string;
}