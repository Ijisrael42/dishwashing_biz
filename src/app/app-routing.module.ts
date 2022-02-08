import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCustomerComponent } from './components/customers/add-customer/add-customer.component';
import { CustomersListComponent } from './components/customers/customers-list/customers-list.component';
import { EditCustomerComponent } from './components/customers/edit-customer/edit-customer.component';
import { AddStudentComponent } from './components/students/add-student/add-student.component';
import { EditStudentComponent } from './components/students/edit-student/edit-student.component';
import { StudentsListComponent } from './components/students/students-list/students-list.component';
import { AddUtensilComponent } from './components/utensils/add-utensil/add-utensil.component';
import { EditUtensilComponent } from './components/utensils/edit-utensil/edit-utensil.component';
import { UtensilsListComponent } from './components/utensils/utensils-list/utensils-list.component';
import { AddWashingComponent } from './components/washings/add-washing/add-washing.component';
import { EditWashingComponent } from './components/washings/edit-washing/edit-washing.component';
import { WashingsListComponent } from './components/washings/washings-list/washings-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'add-student' },
  { path: 'add-student', component: AddStudentComponent },
  { path: 'edit-student/:id', component: EditStudentComponent },
  { path: 'students-list', component: StudentsListComponent },
  { path: 'add-utensil', component: AddUtensilComponent },
  { path: 'edit-utensil/:id', component: EditUtensilComponent },
  { path: 'utensils-list', component: UtensilsListComponent },
  { path: 'add-washing', component: AddWashingComponent },
  { path: 'edit-washing/:id', component: EditWashingComponent },
  { path: 'washings-list', component: WashingsListComponent },
  { path: 'add-customer', component: AddCustomerComponent },
  { path: 'edit-customer/:id', component: EditCustomerComponent },
  { path: 'customers-list', component: CustomersListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }