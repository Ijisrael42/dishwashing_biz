import { Washing } from './../../../shared/washings/washing';
import { WashingsApi } from './../../../shared/washings/washings.service';
import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-washings-list',
  templateUrl: './washings-list.component.html',
  styleUrls: ['./washings-list.component.css']
})
export class WashingsListComponent implements OnInit {

  WashingData: any = [];
  dataSource: MatTableDataSource<Washing>;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  displayedColumns: string[] = ['_id', 'name', 'utensil', 'quantity', 'action'];

  constructor(private washingsApi: WashingsApi) { }

  ngOnInit() {
    this.washingsApi.getAll().subscribe(data => {
      console.log(data);
      this.WashingData = data;
      this.dataSource = new MatTableDataSource<Washing>(this.WashingData);
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
      this.washingsApi.delete(e._id).subscribe();
    }
  }

}
