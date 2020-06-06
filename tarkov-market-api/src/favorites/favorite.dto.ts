import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsNumber } from "class-validator";

export class CreateFavoriteDto {
    @ApiProperty({
        description: 'The id of the user',
    })
    userId: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        description: 'The id of the item'
    })
    item: string;
}