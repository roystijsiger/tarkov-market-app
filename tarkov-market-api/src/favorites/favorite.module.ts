import { Module } from '@nestjs/common';
import { FavoritesController} from './favorite.controller';
import { FavoritesService } from './favorite.service';
import { DatabaseModule } from 'src/database/database.module';
import { favoriteProviders } from './favorite.provider';

@Module({
  imports : [DatabaseModule],
  controllers: [FavoritesController],
  providers: [FavoritesService, ...favoriteProviders],
})

export class FavoritesModule {}