import { ApiProperty } from "@nestjs/swagger";

export class CreateFavoriteDto {
    @ApiProperty({
        description: 'The email of the user',
    })
    email: string;

    @ApiProperty({
        description: 'The item uid'
    })
    item: string;
}