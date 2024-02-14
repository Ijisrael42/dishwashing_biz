import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/* Angular 8 components */

/* Angular material */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './material.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

/* Angular 8 http service */
import { HttpClientModule } from '@angular/common/http';

/* Angular 8 CRUD services */
import { ApiService } from './shared/api.service';

/* Reactive form services in Angular 8 */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UtensilsListComponent } from './components/utensils/utensils-list/utensils-list.component';
import { AddUtensilComponent } from './components/utensils/add-utensil/add-utensil.component';
import { EditUtensilComponent } from './components/utensils/edit-utensil/edit-utensil.component';
import { WashingsListComponent } from './components/washings/washings-list/washings-list.component';
import { AddWashingComponent } from './components/washings/add-washing/add-washing.component';
import { EditWashingComponent } from './components/washings/edit-washing/edit-washing.component';
import { CustomersListComponent } from './components/customers/customers-list/customers-list.component';
import { AddCustomerComponent } from './components/customers/add-customer/add-customer.component';
import { EditCustomerComponent } from './components/customers/edit-customer/edit-customer.component';


@NgModule({
  declarations: [
    AppComponent,
    UtensilsListComponent,
    AddUtensilComponent,
    EditUtensilComponent,
    WashingsListComponent,
    AddWashingComponent,
    EditWashingComponent,
    CustomersListComponent,
    AddCustomerComponent,
    EditCustomerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppModule { }