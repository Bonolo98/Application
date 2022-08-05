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
      tutorial_id: new FormControl(''),
      tutorial_name: new FormControl(''),
      tutorial_desc: new FormControl(''),
    });

    this.tableservice.getTutorials().subscribe((respond: any) => {
      this.tutorials = respond;

    }
    )
  }


  getOne(){
    this.tableservice.getOneTutorial(this.Form.value).subscribe((respond: any) => {
      this.tutorials = respond;

    }
    )
  }
  

  create() {
    console.log(this.Form.value);
    this.tableservice.createTutorial(this.Form.value).subscribe((respond:any) =>{ this.submitted = true;
    console.log(respond)})
  }


  Update() {
    console.log(this.Form.value);
    this.tableservice.updateTutorial(this.Form.value).subscribe((respond:any) =>{ this.submitted = true;
    console.log(respond)})
  }

  Delete() {
    // console.log(this.Form.value);
    this.tableservice.deleteTutorial(this.Form.value).subscribe((respond:any) =>{ this.submitted = true;
    console.log(respond)})
  }




  getProductinfo(index: any) {
    localStorage.setItem("tut", JSON.stringify(this.tutorials[index]))
  }

}
