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
  tut:any
  emp: any;
  indx:any


  constructor(private tableservice: TableService,
    private reactiveformmodule: ReactiveFormsModule, private formbuilder: FormBuilder) { }



  ngOnInit(): void {


    this.Form = new FormGroup({
      tutorial_id: new FormControl(''),
      tutorial_name: new FormControl(''),
      tutorial_desc: new FormControl(''),
    });
    
    this.getalltut()

  }


  //WE ARE SENDING THIS DATA'S ID TO SERVICES SO IT CAN BE ACCESSED BY ANOTHER COMPONENT
sendIndex(ind:any)
{
   this.indx= this.tutorials[ind].tutorial_id
   console.log("From table "+this.indx)
   localStorage.setItem('editID',this.indx)
   
}

  getalltut() {
    this.tableservice.getTutorials().subscribe((respond: any) => {
      this.tutorials = respond;
      this.tut= this.tutorials.tutorial_id;
    }
    )

  }


  // getOne() {
  //   this.tableservice.getOneTutorial(this.Form.value).subscribe((respond: any) => {
  //     this.tutorials = respond;

  //   }
  //   )
  // }

//WE ARE CREATING A TUTORIAL ON THE TABLE AND SENDING THIS DATA THROUGH TABLE.SERVICES
  create() {
    console.log(this.Form.value);
    this.tableservice.createTutorial(this.Form.value).subscribe((respond: any) => {
      this.submitted = true;
      console.log(respond)
    })
    this.getalltut()
  }

//WE ARE DELETING DATA FROM THE FRONTEND BY SENDING THIS REQUEST TO TABLE.SERVICES
  Delete(tutorials: any) {
    console.log(tutorials);

    this.tableservice.deleteTutorial(tutorials).subscribe(
      (deleted: any) => {
        console.log(deleted);
      }
      
    );
    this.getalltut()

  // getProductinfo(index: any) {
  //   localStorage.setItem("tut", JSON.stringify(this.tutorials[index]))
  // }
}
}
