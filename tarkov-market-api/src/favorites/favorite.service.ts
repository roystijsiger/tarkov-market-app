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
    console.log(`favorite`, createdFavorite);
    return createdFavorite.save();
  }

  async findAll(userId : string): Promise<Favorite[]> {
    return this.favoriteModel.find({userId : userId}).exec();
  }
  
  async findByFavoriteByItemId(userId: string, itemId: string ) : Promise<Favorite>{
    return this.favoriteModel.findOne({userId: userId, item: itemId});
  }

  async deleteFavoriteByUser(userId: string,itemId : string) : Promise<Number>{
    console.log(`userId`, userId);
    console.log(`itemId`, itemId)
     var x = await this.favoriteModel.deleteMany({userId : userId, item : itemId}).exec();;
     
      return x.deletedCount;
  }
}