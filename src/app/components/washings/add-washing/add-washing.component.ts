import { Router } from '@angular/router';
import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { WashingsApi } from '../../../shared/washings/washings.service';
import { UtensilsApi } from '../../../shared/utensils/utensils.service';
import { CustomersApi } from '../../../shared/customers/customers.service';
import { Utensil } from './../../../shared/utensils/utensil';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-add-washing',
  templateUrl: './add-washing.component.html',
  styleUrls: ['./add-washing.component.css']
})
export class AddWashingComponent implements OnInit {

  visible = true;
  selectableCustomer = true;
  selectableUtensil = true;
  removable = true;
  addOnBlur = true;
  washingForm: FormGroup;
  UtensilData: any = [];
  CustomerData: any = [];

  constructor( public fb: FormBuilder, private router: Router,  private ngZone: NgZone,
    private washingApi: WashingsApi, private utensilsApi: UtensilsApi, private customersApi: CustomersApi
  ) { }

  ngOnInit() { 
    this.submitBookForm(); 
    this.utensilsApi.getAll().subscribe(data => { this.UtensilData = data; })   
    this.customersApi.getAll().subscribe(data => { this.CustomerData = data; })     

  }

  submitBookForm() { this.washingForm = this.fb.group({ name: ['', [Validators.required]], 
    utensil: ['', [Validators.required]], customer: ['', [Validators.required]], 
    quantity: ['', [Validators.required]], }); 
  }

  public handleError = (controlName: string, errorName: string) => {
    return this.washingForm.controls[controlName].hasError(errorName);
  }  

  /* Submit book */
  submitWashingForm() {
    if (this.washingForm.valid) {
      this.washingApi.create(this.washingForm.value).subscribe(res => {
        this.ngZone.run(() => this.router.navigateByUrl('/washings-list'))
      });
    }
  }

  
}
