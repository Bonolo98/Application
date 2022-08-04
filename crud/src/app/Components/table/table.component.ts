import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, FormBuilder, ReactiveFormsModule, } from '@angular/forms';
import { TableService } from 'src/app/Services/table.service';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  Form!: FormGroup;

  tutorials: any;
  items: string = "";
  submitted: any

  // form = new FormGroup({
  //   itemname: new FormControl(''),
  //   description: new FormControl(''),
  //   duedate: new FormControl(''),

  // });



  constructor(private tableservice: TableService,
    private reactiveformmodule : ReactiveFormsModule, private formbuilder : FormBuilder) { }

 

  ngOnInit(): void {


    

    
  
    this.Form = new FormGroup({
      tutorial_name: new FormControl(''),
      tutorial_desc: new FormControl(''),
    });

    this.tableservice.getTutorials().subscribe((respond: any) => {
      this.tutorials = respond;

    }
    )
  }

  create() {
    let tuto = {
      add: this.Form.value.Add,
      desc: this.Form.value.Desc
    }
    console.log(tuto)
    this.tableservice.createTutorial(tuto).subscribe((respond:any) =>{ this.submitted = true;
    console.log(respond)})
  }




  getProductinfo(index: any) {
    localStorage.setItem("tut", JSON.stringify(this.tutorials[index]))
  }

}
