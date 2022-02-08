import { Customer } from './../../../shared/customers/customer';
import { CustomersApi } from './../../../shared/customers/customers.service';
import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {

  CustomerData: any = [];
  dataSource: MatTableDataSource<Customer>;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  displayedColumns: string[] = ['_id', 'name', 'phone_number', 'location', 'gender', 'action'];

  constructor(private customerApi: CustomersApi) { }

  ngOnInit() {
    this.customerApi.getAll().subscribe(data => {
      console.log(data);
      this.CustomerData = data;
      this.dataSource = new MatTableDataSource<Customer>(this.CustomerData);
      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
      }, 0);
    })   
  }

  deleteCustomer(index: number, e){
    if(window.confirm('Are you sure')) {
      const data = this.dataSource.data;
      data.splice((this.paginator.pageIndex * this.paginator.pageSize) + index, 1);
      this.dataSource.data = data;
      this.customerApi.delete(e._id).subscribe();
    }
  }
}
