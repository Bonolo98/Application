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
  tut_id:any
  emp: any;

  // form = new FormGroup({
  //   itemname: new FormControl(''),
  //   description: new FormControl(''),
  //   duedate: new FormControl(''),

  // });



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



  getalltut() {
    this.tableservice.getTutorials().subscribe((respond: any) => {
      this.tutorials = respond;
      this.tut_id = this.tutorials.tutorial_id;
    }
    )

  }


  // getOne() {
  //   this.tableservice.getOneTutorial(this.Form.value).subscribe((respond: any) => {
  //     this.tutorials = respond;

  //   }
  //   )
  // }


  create() {
    console.log(this.Form.value);
    this.tableservice.createTutorial(this.Form.value).subscribe((respond: any) => {
      this.submitted = true;
      console.log(respond)
    })
    this.getalltut()
  }




  Update(ind: any) {
    console.log(this.Form.value);
    this.tableservice.updateTutorial(this.Form.value).subscribe((respond: any) => {
      this.submitted = true;
      console.log(respond)
    })
  }

  // Delete(index: any) {
  //   index = this.Form.value.tutorial_id[index];
  //   console.log(index , "number 1")
  //   this.tableservice.deleteTutorial(this.Form.value).subscribe((respond: any) => {
  //     this.submitted = true;
  //     console.log(respond , "number 2")
  //   })
  //   this.getProductinfo(index)
  // }


  //   Delete(tutorial_id: any){
  //   this.tableservice.deleteTutorial(tutorial_id)
  //   .subscribe((respond: any) =>{
  //     this.getalltut();

  //     localStorage.removeItem("tut");
  //   })
  // }


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
