import { Component, OnInit } from '@angular/core';
import { StudentItemComponent } from '../student-item/student-item.component';
import { StudentService } from '../student.service';
import { StudentModel } from '../model';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [StudentItemComponent, NgFor],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.scss'
})
export class StudentListComponent implements OnInit {
  public students: StudentModel[] = [];
  constructor(private studentService: StudentService, private router: Router) { }

  ngOnInit(): void {
    this.studentService.getStudentList().subscribe((res) => {
      this.students = res;
      console.log(this.students);
    });
    console.log(this.students)
  }

  goTo() {
    this.router.navigate(['app','create-student']);
  }

  onDelete(id:string){
    console.log(id);
    this.studentService.deleteStudent(id).subscribe((res)=>{
      this.students = res
    })
    
  }
}
