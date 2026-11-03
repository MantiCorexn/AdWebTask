import 'dotenv/config';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { FacultiesModule } from './faculties/faculties.module.js';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST ?? 'localhost',
      port: Number(process.env.DB_PORT ?? 5432),
      username: process.env.DB_USERNAME ?? 'postgres',
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE ?? 'faculty_management_db',
      autoLoadEntities: true,
      synchronize: true,
    }),

    FacultiesModule,
  ],
})
export class AppModule {}