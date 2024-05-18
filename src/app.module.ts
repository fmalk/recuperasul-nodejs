import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { AppController } from './app.controller';
import { StatusController } from './status.controller';
import { join } from 'path';
import { SupabaseService } from './supabase.service';

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
    HttpModule,
  ],
  controllers: [StatusController, AppController],
  providers: [SupabaseService],
})
export class AppModule {}
