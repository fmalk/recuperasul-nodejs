import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      expandVariables: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DBURL,
      username: process.env.DBUSER,
      password: process.env.DBPASSWORD,
      database: process.env.DBBASE,
      schema: process.env.DBSCHEMA,
      entities: [],
      synchronize: false,
      autoLoadEntities: true,
      keepConnectionAlive: true,
      migrationsTableName: 'migrations',
      migrationsRun: false,
    }),
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class DatabaseModule {}

export const featureEntities = TypeOrmModule.forFeature([]);
