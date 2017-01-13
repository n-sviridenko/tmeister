import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from 'app/app.module';
import { getTranslationProviders } from './i18n-providers';

import 'app/style/common.scss';

const translationProviders = getTranslationProviders();
const compilerOptions = {
  providers: [...translationProviders],
};

platformBrowserDynamic().bootstrapModule(AppModule, compilerOptions);
