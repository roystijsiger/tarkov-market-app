import { Module } from '@nestjs/common';
import { FavoritesModule} from './favorites/favorite.module'
import { AuthModule } from './auth/auth.module';
@Module({
  imports: [FavoritesModule, AuthModule] ,
  //controllers: [AppController],
  //providers: [AppService],
})
export class AppModule {}
