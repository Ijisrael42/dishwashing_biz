import { Router } from '@angular/router';
import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { UtensilsApi } from '../../../shared/utensils/utensils.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

export interface Subject {
  name: string;
}

@Component({
  selector: 'app-add-utensil',
  templateUrl: './add-utensil.component.html',
  styleUrls: ['./add-utensil.component.css']
})
export class AddUtensilComponent implements OnInit {

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  @ViewChild('chipList', { static: true }) chipList;
  @ViewChild('resetUtensilForm', { static: true }) myNgForm;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  utensilForm: FormGroup;
  subjectArray: Subject[] = [];
  SectioinArray: any = ['A', 'B', 'C', 'D', 'E'];

  constructor( public fb: FormBuilder, private router: Router,  private ngZone: NgZone,
    private utensilApi: UtensilsApi
  ) { }

  ngOnInit() { this.submitBookForm(); }
  submitBookForm() { this.utensilForm = this.fb.group({ name: ['', [Validators.required]], }); }

  /* Get errors */
  public handleError = (controlName: string, errorName: string) => {
    return this.utensilForm.controls[controlName].hasError(errorName);
  }  

  /* Submit book */
  submitUtensilForm() {
    if (this.utensilForm.valid) {
      this.utensilApi.create(this.utensilForm.value).subscribe(res => {
        this.ngZone.run(() => this.router.navigateByUrl('/utensils-list'))
      });
    }
  }
}
