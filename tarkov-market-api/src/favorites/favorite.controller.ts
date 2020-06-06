import { Controller, Get, Post, Body, UseGuards, Delete, Param} from '@nestjs/common';
import { FavoritesService } from './favorite.service';
import { Favorite } from './favorite.interface';
import { CreateFavoriteDto} from './favorite.dto';
import { ApiBearerAuth, ApiBody, ApiOkResponse, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { Request} from '@nestjs/common';

@Controller('favorites')
@ApiTags("Favorites")
export class FavoritesController {
    constructor(private favoritesService : FavoritesService){}

  @Get()
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  async findAll(@Request() req): Promise<Favorite[]>{
    return this.favoritesService.findAll(req.user.userId);
  }

  @Get(':uid')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  async findByItemId(@Request() req, @Param('uid') itemId : string) : Promise<Favorite>{
    console.log(req.user);
    return this.favoritesService.findByFavoriteByItemId(req.user.userId, itemId );
  }
 
  @Post()
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  async create(@Request() req, @Body() createFavoriteDto: CreateFavoriteDto) {
    createFavoriteDto.userId = req.user.userId;
    this.favoritesService.create(createFavoriteDto);
  }

  @Delete(':uid')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  async delete(@Request() req, @Param('uid') itemId : string) : Promise<Number>{
    console.log(req.user);
    return this.favoritesService.deleteFavoriteByUser( req.user.userId, itemId);
  }
 }