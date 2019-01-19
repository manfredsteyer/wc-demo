import { BrowserModule } from '@angular/platform-browser';
import { NgModule, DoBootstrap, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { DemoComponent } from './demo-component/demo-component.component';
import { createCustomElement } from '@angular/elements';
import { MyOptionComponent } from './my-option/my-option.component';
import { MySelectComponent } from './my-select/my-select.component';

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
      //BrowserAnimationsModule,
      NoopAnimationsModule,
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
   bootstrap: [AppComponent],
   schemas: [
      CUSTOM_ELEMENTS_SCHEMA
   ],
   entryComponents: [
      // AppComponent,
      DemoComponent,
      MySelectComponent,
      MyOptionComponent
   ]
})
export class AppModule implements DoBootstrap {

  constructor(private injector: Injector) {
   const demoElm = createCustomElement(DemoComponent, {injector: this.injector });
   customElements.define('wc-demo', demoElm);

   const selectElm = createCustomElement(MySelectComponent, {injector: this.injector });
   customElements.define('my-select', selectElm);

   const optionElm = createCustomElement(MyOptionComponent, {injector: this.injector });
   customElements.define('my-option', optionElm);

  }

  ngDoBootstrap(): void {
   
  }

}
