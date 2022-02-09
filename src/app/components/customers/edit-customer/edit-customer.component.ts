import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { CustomersApi } from './../../../shared/customers/customers.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  customerForm: FormGroup;

  constructor( public fb: FormBuilder, private router: Router, private ngZone: NgZone,
    private actRoute: ActivatedRoute, private customersApi: CustomersApi
  ) { 
    var id = this.actRoute.snapshot.paramMap.get('id');
    this.customersApi.get(id).subscribe(data => {
      console.log(data.subjects)
      this.customerForm = this.fb.group({ name: [data.name, [Validators.required]],gender: [data.gender],
        phone_number: [data.phone_number, [Validators.required]],
        location: [data.location, [Validators.required]],        
      })      
    })    
  }

  ngOnInit() {
    this.updateBookForm();
  }

  /* Reactive book form */
  updateBookForm() {
    this.customerForm = this.fb.group({ name: ['', [Validators.required]],gender: ['Male'],
      phone_number: ['', [Validators.required]], location: ['', [Validators.required]],      
    })
  }

  public handleError = (controlName: string, errorName: string) => {
    return this.customerForm.controls[controlName].hasError(errorName);
  }

  /* Update book */
  updateCustomerForm() {
    console.log(this.customerForm.value)
    var id = this.actRoute.snapshot.paramMap.get('id');
    if (window.confirm('Are you sure you want to update?')) {
      this.customersApi.update(id, this.customerForm.value).subscribe( res => {
        this.ngZone.run(() => this.router.navigateByUrl('/customers-list'))
      });
    }
  }
  

}
