import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { NavigationEnd, Router, RouterModule, Routes } from '@angular/router';
import { TableService } from 'src/app/Services/table.service';



@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  Form!: FormGroup;

  tutorials: any;
  items: string = "";
  submitted: any
  tut:any

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


  create() {
    console.log(this.Form.value);
    this.tableservice.createTutorial(this.Form.value).subscribe((respond: any) => {
      this.submitted = true;
     // this.router.navigate(['/table']);
      console.log(respond)
    })
    this.getalltut()
  }




}
