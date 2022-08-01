import { Component, OnInit } from '@angular/core';
import { TableService } from 'src/app/Services/table.service';

// import { Product } from '../../domain/product';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {


  tutorials: any;
  items: any;
  // public loading = false;


  constructor(private tableservice: TableService) { }

  ngOnInit(): void {
    // this.tableservice.getProductsSmall().then(data => this.products = data);
    // this.loading = true;
    this.tableservice.getTutorials().subscribe(( respond:any )=>{
       
      this.tutorials = respond;
      // this.loading = false; 
    })
  }

  getProductinfo(index: any){
    // this.loading = true;
      localStorage.setItem("tutorial",JSON.stringify(this.tutorials[index]))
      // this.loading = false;
     }

}
