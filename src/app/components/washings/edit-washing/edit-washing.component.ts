import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { WashingsApi } from '../../../shared/washings/washings.service';
import { UtensilsApi } from '../../../shared/utensils/utensils.service';
import { CustomersApi } from '../../../shared/customers/customers.service';

@Component({
  selector: 'app-edit-washing',
  templateUrl: './edit-washing.component.html',
  styleUrls: ['./edit-washing.component.css']
})
export class EditWashingComponent implements OnInit {

  visible = true;
  selectableCustomer = true;
  selectableUtensil = true;
  removable = true;
  addOnBlur = true;
  washingForm: FormGroup;
  UtensilData: any = [];
  CustomerData: any = [];

  constructor( public fb: FormBuilder, private router: Router, private ngZone: NgZone,
    private actRoute: ActivatedRoute,
    private washingsApi: WashingsApi, private utensilsApi: UtensilsApi, private customersApi: CustomersApi
  ) { 
    var id = this.actRoute.snapshot.paramMap.get('id');
    this.washingsApi.get(id).subscribe(data => {
      console.log(data.subjects)
      this.washingForm = this.fb.group({ name: [data.name, [Validators.required]],
        customer: [data.customer, [Validators.required]], utensil: [data.utensil, [Validators.required]],
        quantity: [data.quantity, [Validators.required]], });      
    })    
  }

  ngOnInit() { 
    this.updateBookForm();
    this.utensilsApi.getAll().subscribe(data => { this.UtensilData = data; });   
    this.customersApi.getAll().subscribe(data => { this.CustomerData = data; });   
  }

  /* Reactive book form */
  updateBookForm() { this.washingForm = this.fb.group({ name: ['', [Validators.required]],
    customer: ['', [Validators.required]], utensil: ['', [Validators.required]],
    quantity: ['', [Validators.required]], }); }

  public handleError = (controlName: string, errorName: string) => {
    return this.washingForm.controls[controlName].hasError(errorName);
  }

  /* Update book */
  updateWashingForm() {
    console.log(this.washingForm.value)
    var id = this.actRoute.snapshot.paramMap.get('id');
    if (window.confirm('Are you sure you want to update?')) {
      this.washingsApi.update(id, this.washingForm.value).subscribe( res => {
        this.ngZone.run(() => this.router.navigateByUrl('/washings-list'))
      });
    }
  }


}
