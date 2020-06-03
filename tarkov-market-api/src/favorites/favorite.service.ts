import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Favorite } from './favorite.interface';
import {CreateFavoriteDto } from './favorite.dto';

@Injectable()
export class FavoritesService {
  private readonly favorites: Favorite[] = [];

  constructor(
    @Inject('FAVORITE_MODEL')
    private favoriteModel : Model<Favorite>,
  ){}

  async create(createFavoriteDto : CreateFavoriteDto) {
    const createdFavorite = new this.favoriteModel(createFavoriteDto);
    return createdFavorite.save();
  }

  async findAll(): Promise<Favorite[]> {
    return this.favoriteModel.find().exec();
  }
}