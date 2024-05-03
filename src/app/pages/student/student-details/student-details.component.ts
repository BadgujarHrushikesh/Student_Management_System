import { Component, Input } from '@angular/core';
import { StudentService } from '../student.service';
import { StudentModel } from '../model';
import { Router } from '@angular/router';

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
    this.student = this.studentService.getStudentDetails(id);
    if(!this.student){
      this.goTo();
    }
    // console.log(this.student)
  }

  goTo() {
    this.router.navigate(['student-list']);
  }
}
