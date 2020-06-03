import { Controller, Get, Post, Body } from '@nestjs/common';
import { FavoritesService } from './favorite.service';
import { Favorite } from './favorite.interface';
import { CreateFavoriteDto} from './favorite.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('favorites')
@ApiTags("Favorites")
export class FavoritesController {
    constructor(private favoritesService : FavoritesService){}

  @Get()
  async findAll(): Promise<Favorite[]>{
    return this.favoritesService.findAll();
  }

  @Post()
  async create(@Body() createFavoriteDto: CreateFavoriteDto) {
    this.favoritesService.create(createFavoriteDto);
  }

}