import { Router } from '@angular/router';
import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { ApiService } from '../../../shared/api.service';
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
  selectable = true;
  removable = true;
  addOnBlur = true;
  @ViewChild('chipList', { static: true }) chipList;
  @ViewChild('resetStudentForm', { static: true }) myNgForm;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  washingForm: FormGroup;
  SectioinArray: any = ['A', 'B', 'C', 'D', 'E'];
  UtensilData: any = [];
  CustomerData: any = [];
  dataSource: MatTableDataSource<Utensil>;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  displayedColumns: string[] = ['_id', 'name', 'utensil', 'action'];

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor( public fb: FormBuilder, private router: Router,  private ngZone: NgZone,
    private washingApi: WashingsApi, private utensilsApi: UtensilsApi, private customersApi: CustomersApi
  ) { }

  ngOnInit() { 

    this.firstFormGroup = this.fb.group({ firstCtrl: ['', Validators.required], });
    this.secondFormGroup = this.fb.group({ secondCtrl: ['', Validators.required], });

    this.submitBookForm(); 
    this.utensilsApi.getAll().subscribe(data => {
      console.log(data);
      this.UtensilData = data;
      this.dataSource = new MatTableDataSource<Utensil>(this.UtensilData);
      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
      }, 0);
    })   

    this.customersApi.getAll().subscribe(data => {
      console.log(data);
      this.CustomerData = data;
      this.dataSource = new MatTableDataSource<Utensil>(this.UtensilData);
      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
      }, 0);
    })   

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
