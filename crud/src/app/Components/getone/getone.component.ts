import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TableService } from 'src/app/Services/table.service';
import { tutorial } from 'src/models/tutorial.model';

@Component({
  selector: 'app-getone',
  templateUrl: './getone.component.html',
  styleUrls: ['./getone.component.scss']
})
export class GetoneComponent implements OnInit {


  message = '';


  @Input()viewMode = false

  @Input() currentTutorial: tutorial= {
    tutorial_name:'',
    tutorial_desc:'',
    
    // published: false  

  };



  constructor(private tableservice : TableService,    private router : Router, private route : ActivatedRoute) { }

  ngOnInit(): void {


    // if (!this.viewMode){
    //   this.message=''; 
   this.getTutorial(this.route.snapshot.params["tutorial_id"]);

    // }
  }

  getTutorial(currentTutorial: string): void{
    this.tableservice.getOneTutorial(103)
     .subscribe({
        next: (data:any) =>{
          this.currentTutorial=data[0];
          console.log(data)
        },
        error: (e)=> console.log(e)
     });
  }

}
