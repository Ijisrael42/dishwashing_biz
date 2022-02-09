import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { UtensilsApi } from './../../../shared/utensils/utensils.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-edit-utensil',
  templateUrl: './edit-utensil.component.html',
  styleUrls: ['./edit-utensil.component.css']
})
export class EditUtensilComponent implements OnInit {

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  utensilForm: FormGroup;

  constructor( public fb: FormBuilder, private router: Router, private ngZone: NgZone,
    private actRoute: ActivatedRoute, private utensilsApi: UtensilsApi
  ) { 
    var id = this.actRoute.snapshot.paramMap.get('id');
    this.utensilsApi.get(id).subscribe(data => {
      console.log(data.subjects)
      this.utensilForm = this.fb.group({ name: [data.name, [Validators.required]] })      
    })    
  }

  ngOnInit() { this.updateBookForm(); }

  /* Reactive book form */
  updateBookForm() { this.utensilForm = this.fb.group({ name: ['', [Validators.required]] }); }

  public handleError = (controlName: string, errorName: string) => {
    return this.utensilForm.controls[controlName].hasError(errorName);
  }

  /* Update book */
  updateUtensilForm() {
    console.log(this.utensilForm.value)
    var id = this.actRoute.snapshot.paramMap.get('id');
    if (window.confirm('Are you sure you want to update?')) {
      this.utensilsApi.update(id, this.utensilForm.value).subscribe( res => {
        this.ngZone.run(() => this.router.navigateByUrl('/utensils-list'))
      });
    }
  }


}
