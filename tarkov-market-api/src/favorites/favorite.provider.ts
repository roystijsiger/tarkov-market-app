import { Connection } from 'mongoose';
import { FavoriteSchema } from './favorite.schema'

export const favoriteProviders = [
  {
    provide: 'FAVORITE_MODEL',
    useFactory: (connection: Connection) => connection.model('Favorite', FavoriteSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];