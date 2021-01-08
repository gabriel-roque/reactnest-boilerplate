import * as dotenv from 'dotenv';
dotenv.config();

import { ConnectionOptions } from 'typeorm';
import * as fs from 'fs';

let config: ConnectionOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  schema: process.env.DB_SCHEMA,
  synchronize: false,
  logging: Boolean(process.env.DB_LOG),
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  migrations: [__dirname + '/database/migrations/**/*{.ts,.js}'],
  cli: {
    migrationsDir: 'src/database/migrations',
    entitiesDir: 'src/entity',
  },
};

if (process.env.NODE_ENV === 'production') {
  config = {
    ...config,
    ssl: {
      ca: fs.readFileSync(process.env.SSL_PATH),
    },
  };
}

export = config;
