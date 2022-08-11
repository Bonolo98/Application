import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule ,FormGroup, FormControl, FormsModule, } from '@angular/forms';
import { Router } from '@angular/router';
import { TableService } from 'src/app/Services/table.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  Form!: FormGroup;

  tutorials: any;
  items: string = "";
  submitted: any
  tut:any
  emp: any;

  constructor(private tableservice : TableService,  private reactiveformmodule: ReactiveFormsModule, private formbuilder: FormBuilder, private router : Router) { }

  ngOnInit(): void {

    
    this.Form = new FormGroup({
      tutorial_id: new FormControl(''),
      tutorial_name: new FormControl(''),
      tutorial_desc: new FormControl(''),
    });

    
  }


  getalltut() {
    this.tableservice.getTutorials().subscribe((respond: any) => {
      this.tutorials = respond;
      this.tut= this.tutorials.tutorial_id;
    }
    )

  }



  Update(tutorials: any) {
    console.log(tutorials);
    this.tableservice.updateTutorial(tutorials).subscribe((respond: any) => {
      this.submitted = true;
      console.log(respond)
    })

    this.getalltut()
  }



}
