import { BrowserModule } from '@angular/platform-browser';
import { NgModule, DoBootstrap, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { DemoComponent } from './demo-component/demo-component.component';
import { createCustomElement } from '@angular/elements';
import { MySelectComponent } from './my-select/my-select.component';
import { MyOptionComponent } from './my-option/my-option.component';


@NgModule({
   declarations: [
      AppComponent,
      MyNavComponent,
      DemoComponent,
      MySelectComponent,
      MyOptionComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      FormsModule,
      MatSelectModule,
      LayoutModule,
      MatToolbarModule,
      MatButtonModule,
      MatSidenavModule,
      MatIconModule,
      MatListModule
   ],
   providers: [],
   bootstrap: [],
   schemas: [
      CUSTOM_ELEMENTS_SCHEMA
   ],
   entryComponents: [
      DemoComponent,
      MySelectComponent,
      MyOptionComponent
   ]
})
export class AppModule implements DoBootstrap {

  constructor(private injector: Injector) {

  }

  ngDoBootstrap(): void {
    const demoElm = createCustomElement(DemoComponent, {injector: this.injector });
    customElements.define('wc-demo', demoElm);

    const selectElm = createCustomElement(MySelectComponent, {injector: this.injector });
    customElements.define('my-select', selectElm);

    const optionElm = createCustomElement(MyOptionComponent, {injector: this.injector });
    customElements.define('my-option', optionElm);
    
  } 

}
