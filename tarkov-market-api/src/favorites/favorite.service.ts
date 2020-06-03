import { Injectable } from '@nestjs/common';
import { Favorite } from './favorite.interface';

@Injectable()
export class FavoritesService {
  private readonly favorites: Favorite[] = [];

  create(favorite: Favorite) {
    this.favorites.push(favorite);
  }

  findAll(): Favorite[] {
    return this.favorites;
  }
}