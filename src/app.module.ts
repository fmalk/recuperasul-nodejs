import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { AppController } from './app.controller';
import { StatusController } from './status.controller';
import { DatabaseModule, featureEntities } from './database.module';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      load: [],
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
      exclude: ['/status','/backend/(.*)'],
    }),
    DatabaseModule,
    HttpModule,
    featureEntities
  ],
  controllers: [StatusController, AppController],
  providers: [],
})
export class AppModule {}
