import {
  CallHandler,
  ExecutionContext,
  Injectable,
  Module,
  NestInterceptor,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SampleModule } from '@rline/resource';
import { Observable } from 'rxjs';
import { APP_INTERCEPTOR } from '@nestjs/core';

@Injectable()
class AllIntercept implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>
  ): Observable<any> | Promise<Observable<any>> {
    console.log(context.switchToHttp().getRequest().query);

    return next.handle();
  }
}

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'better-sqlite3',
      database: 'tmp/db/rbrightline.sqlite',
      synchronize: true,
      dropSchema: true,
      autoLoadEntities: true,
    }),
    SampleModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: AllIntercept,
    },
  ],
})
export class AppModule {}
