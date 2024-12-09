import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';
import { AppController } from './app.controller';
import { JwtModule } from '@nestjs/jwt';
import { CategoryModule } from '@rline/resource';
import { TypeOrmModule } from '@rline/orm';

@Module({
  imports: [
    ConfigModule.forRoot({}),
    TypeOrmModule.forRoot({
      type: 'better-sqlite3',
      database: 'tmp/database/api.sqlite',
      autoLoadEntities: true,
      synchronize: true,
      dropSchema: true,
    }),
    CategoryModule,
    JwtModule.registerAsync({
      global: true,
      imports: [ConfigModule.forFeature(() => ({}))],
      inject: [ConfigService],
      useFactory(service: ConfigService) {
        return {
          secret: service.getOrThrow('JWT_SECRET'),
          signOptions: {
            expiresIn: '1y',
          },
        };
      },
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, 'public'),
    }),
    ScheduleModule.forRoot({}),
    EventEmitterModule.forRoot({ delimiter: '.' }),
  ],
  controllers: [AppController],
})
export class AppModule {}
