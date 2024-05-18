import { DataSource } from 'typeorm';
import { join } from 'path';

export const connectionSource = new DataSource({
  type: 'postgres',
  host: process.env.DBURL,
  port: parseInt(process.env.DBPORT, 5432),
  username: process.env.DBUSER,
  password: process.env.DBPASSWORD,
  database: process.env.DBBASE,
  logging: true,
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  migrations: [join(__dirname, '/../../', 'database/migrations/**/*{.ts,.js}')],
  synchronize: false,
  migrationsTableName: 'migrations',
  migrationsRun: false,
});
