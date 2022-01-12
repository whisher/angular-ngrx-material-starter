// Core
import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Testing
import { HttpClientTestingModule } from '@angular/common/http/testing';

// Libs
import {
  TranslateLoader,
  TranslateModule,
  TranslateService
} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}

@NgModule({
  imports: [
    HttpClientTestingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [TranslateService],
  exports: [TranslateModule]
})
export class TranslateLoaderStubsModule {}
