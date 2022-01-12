// Core
import { Directive, Input, NgModule, Pipe, PipeTransform } from '@angular/core';
/* eslint-disable  */
@Directive({
  selector: '[translate]'
})
export class TranslateDirectiveStub {
  @Input() translateParams: any;
}

@Pipe({
  name: 'translate'
})
export class TranslatePipeStub implements PipeTransform {
  transform(value: string): string {
    return value;
  }
}

const declarations = [TranslateDirectiveStub, TranslatePipeStub];

@NgModule({
  declarations: [...declarations],
  exports: [...declarations]
})
export class TranslatePipeStubsModule {}
