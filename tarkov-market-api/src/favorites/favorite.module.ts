import { Module } from '@nestjs/common';
import { FavoritesController} from './favorite.controller';
import { FavoritesService } from './favorite.service';

@Module({
  controllers: [FavoritesController],
  providers: [FavoritesService],
})

export class FavoritesModule {}