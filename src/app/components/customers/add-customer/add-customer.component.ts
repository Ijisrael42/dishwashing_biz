import { Router } from '@angular/router';
import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { CustomersApi } from '../../../shared/customers/customers.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";


@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  @ViewChild('chipList', { static: true }) chipList;
  @ViewChild('resetStudentForm', { static: true }) myNgForm;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  customerForm: FormGroup;
  SectioinArray: any = ['A', 'B', 'C', 'D', 'E'];

  constructor( public fb: FormBuilder, private router: Router,  private ngZone: NgZone,
    private customersApi: CustomersApi
  ) { }

  ngOnInit() { this.submitBookForm(); }

  submitBookForm() { 
    this.customerForm = this.fb.group({ name: ['', [Validators.required]], gender: ['', [Validators.required]], 
      phone_number: ['', [Validators.required]],  location: ['', [Validators.required]],       
    }); 
  }

  public handleError = (controlName: string, errorName: string) => {
    return this.customerForm.controls[controlName].hasError(errorName);
  }  

  /* Submit book */
  submitCustomerForm() {
    if (this.customerForm.valid) {
      this.customersApi.create(this.customerForm.value).subscribe(res => {
        this.ngZone.run(() => this.router.navigateByUrl('/customers-list'))
      });
    }
  }

}
