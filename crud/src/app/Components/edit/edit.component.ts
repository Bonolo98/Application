import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule ,FormGroup, FormControl, FormsModule, } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TableService } from 'src/app/Services/table.service';
import { tutorial } from 'src/models/tutorial.model';


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

  message = '';
  // editID :any = localStorage.getItem('editID')


  @Input()viewMode = false

  @Input() currentTutorial: tutorial= {
    tutorial_id:'',
    tutorial_name:'',
    tutorial_desc:'',
    
    // published: false  

  };


  

  constructor(private tableservice : TableService,  private reactiveformmodule: ReactiveFormsModule, private formbuilder: FormBuilder, private router : Router, private route : ActivatedRoute) { }

  ngOnInit(): void {

    
    this.Form = new FormGroup({
      tutorial_id: new FormControl(''),
      tutorial_name: new FormControl(''),
      tutorial_desc: new FormControl(''),
    });
    
    
    // console.log("On edit " +this.editID)
    this.getalltut()
    //this.Update(id);
  }


  getalltut() {
    this.tableservice.getTutorials().subscribe((respond: any) => {
      this.tutorials = respond;
      this.tut= this.tutorials.tutorial_id;
      console.log(respond)
    }
    )

  }




  

  Update() {

    let body= {
      tutorial_name: this.Form.value.tutorial_name,
      tutorial_desc: this.Form.value.tutorial_desc

    }
      
     
    this.tableservice.updateTutorial(body).subscribe((edtBody)=>{
      console.table(edtBody)
    })
  
  }



}
