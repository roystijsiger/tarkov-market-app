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

  async findAll(userId : Number): Promise<Favorite[]> {
    return this.favoriteModel.find({userId : userId}).exec();
  }
  
  async findByFavoriteByItemId(itemId: string, userId: Number) : Promise<Favorite>{
    return this.favoriteModel.findOne({item: itemId, userId: userId});
  }
  
  async deleteFavoriteByUser(userId: Number,itemId : string) : Promise<Number>{

     var x = await this.favoriteModel.deleteMany({userId : userId, item : itemId}).exec();;
      return x.deletedCount;
  }
}