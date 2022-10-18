import { join } from 'path';

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { MongooseModule } from '@nestjs/mongoose';

import { PokemonModule } from './pokemon/pokemon.module';
import { CommonModule } from './common/common.module';
import { SeedModule } from './seed/seed.module';
import { appConfiguration } from './config/app.config';
import { joiValidationSchema } from './config/joi.validation';

@Module({
  imports: [
    //! SIEMPRE COLOCAR AL INICIO ESTE IMPORT
    ConfigModule.forRoot({
      load: [appConfiguration],
      validationSchema: joiValidationSchema,
    }),
    CommonModule,
    MongooseModule.forRoot(process.env.MONGODB_CNN),
    PokemonModule,
    SeedModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
  ],
})
export class AppModule {}
