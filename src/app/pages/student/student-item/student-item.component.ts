import { Component, Input, OnInit } from '@angular/core';
import { StudentModel } from '../model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-item',
  standalone: true,
  imports: [],
  templateUrl: './student-item.component.html',
  styleUrl: './student-item.component.scss'
})
export class StudentItemComponent implements OnInit {
  @Input() student!: StudentModel;
 
  constructor(private router : Router){}

  ngOnInit(): void {
  
  }

  goTo(id:string){
    this.router.navigate(['student-details',id]);
  }

  editStudent(event:any,id :string){
    event.stopPropagation();
    console.log(id);
    

  }
}
