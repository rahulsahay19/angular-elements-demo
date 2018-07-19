import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { createCustomElement } from '@angular/elements';
import { SampleComponent } from './sample/sample.component';

@NgModule({
  declarations: [
    SampleComponent
  ],
  imports: [
    BrowserModule
  ],
  entryComponents:[SampleComponent]
  
})
export class AppModule { 
  constructor(private injector: Injector){
    const customElement = createCustomElement(SampleComponent, { injector });
    customElements.define('app-sample', customElement);
  }
  
  ngDoBootstrap() { }
}
