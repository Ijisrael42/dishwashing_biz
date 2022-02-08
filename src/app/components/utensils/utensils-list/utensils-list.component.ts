import { Utensil } from './../../../shared/utensils/utensil';
import { UtensilsApi } from './../../../shared/utensils/utensils.service';
import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-utensils-list',
  templateUrl: './utensils-list.component.html',
  styleUrls: ['./utensils-list.component.css']
})
export class UtensilsListComponent implements OnInit {

  UtensilData: any = [];
  dataSource: MatTableDataSource<Utensil>;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  displayedColumns: string[] = ['_id', 'name', 'action'];

  constructor(private utensilApi: UtensilsApi) { }

  ngOnInit() {
    this.utensilApi.getAll().subscribe(data => {
      console.log(data);
      this.UtensilData = data;
      this.dataSource = new MatTableDataSource<Utensil>(this.UtensilData);
      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
      }, 0);
    })   
  }

  deleteUtensil(index: number, e){
    if(window.confirm('Are you sure')) {
      const data = this.dataSource.data;
      data.splice((this.paginator.pageIndex * this.paginator.pageSize) + index, 1);
      this.dataSource.data = data;
      this.utensilApi.delete(e._id).subscribe();
    }
  }

}
