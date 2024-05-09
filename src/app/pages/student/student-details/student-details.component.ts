import { Component, Input } from '@angular/core';
import { StudentService } from '../student.service';
import { StudentModel } from '../model';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-student-details',
  standalone: true,
  imports: [],
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.scss'
})
export class StudentDetailsComponent {
  public student!: StudentModel | undefined;
  @Input()
  set stdId(value: string) {
    this.initStudent(value)
  }

  constructor(private studentService: StudentService, public router: Router) { }

  initStudent(id: string) {
    //   this.student = this.studentService.getStudentDetails(id);
    //   if(!this.student){
    //     this.goTo();
    //   }
    //   // console.log(this.student)

    this.studentService.getStudentDetails(id).subscribe((res) => {
      this.student = res;
      if(!this.student){
        this.goTo()
      }
    })
  }

  goTo() {
    this.router.navigate(['app','student-list']);
  }
}
