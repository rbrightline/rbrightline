import { bootRestApi } from '@rline/boot';
import { AppModule } from './app/app.module';

bootRestApi({
  appModule: AppModule,
  origins: ['*'],
});
