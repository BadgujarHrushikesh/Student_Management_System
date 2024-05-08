import { NgClass, NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';
import { StudentModel } from '../model';

@Component({
  selector: 'app-create-student',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass, NgIf],
  templateUrl: './create-student.component.html',
  styleUrl: './create-student.component.scss'
})
export class CreateStudentComponent implements OnInit {
  public studentId!: string;
  public studentForm!: FormGroup;

  @Input()
  set stdId(value: string) {
    this.studentId = value;
  }

  constructor(private fb: FormBuilder, private studentService: StudentService, private router: Router) { }


  ngOnInit(): void {
    this.studentForm = this.fb.group({
      id: [''],
      img: ['', [Validators.required]],
      name: ['', [Validators.required, Validators.minLength(2), Validators.pattern('^([^0-9]*)$')]],
      age: ['', [Validators.required, Validators.min(16), Validators.max(35)]],
      email: ['', [Validators.required, Validators.email]],
      number: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]]
    })
    if (this.studentId) {
      this.initStudent(this.studentId)
    }

  }

  initStudent(id: string) {
    // const student: any = this.studentService.getStudentDetails(this.studentId)
    // this.studentForm.setValue(student)
    this.studentService.getStudentDetails(id).subscribe((res) => {
      this.studentForm.setValue(res)
    })
  }

  // saveStudent() {
  //   if (this.studentId) {
  //     console.log(this.stdId);
  //     this.studentService.editStudent(this.studentId, this.studentForm.value).subscribe((res) => {
  //       this.goTo();
  //       console.log(this.stdId);
  //     })
  //   } else {

  //     this.studentService.createStudent(this.studentForm.value).subscribe((res) => {

  //       this.goTo();
  //     });
  //   }
  // }

  saveStudent() {
    let studentSub;
    if (this.studentId) {
      studentSub = this.studentService.editStudent(this.studentId, this.studentForm.value)
    } else {
      studentSub = this.studentService.createStudent(this.studentForm.value)
    }
    studentSub.subscribe((res) => {
      this.goTo();
    });
  }

  goTo() {
    this.router.navigate(['student-list'])
  }
}
