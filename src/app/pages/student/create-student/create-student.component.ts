import { NgClass, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-student',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass,NgIf],
  templateUrl: './create-student.component.html',
  styleUrl: './create-student.component.scss'
})
export class CreateStudentComponent implements OnInit {
  public studentId!: string;
  public studentForm!: FormGroup;

  constructor(private fb: FormBuilder, private studentService: StudentService,private router :Router) { }


  ngOnInit(): void {
    this.studentForm = this.fb.group({
      id: [''],
      img: ['', [Validators.required]],
      name: ['', [Validators.required, Validators.minLength(2), Validators.pattern('^([^0-9]*)$')]],
      age: ['', [Validators.required, Validators.min(16), Validators.max(35)]],
      email: ['', Validators.required, Validators.email],
      number: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]]
    })
  }

  saveStudent() {
    this.studentService.createStudent(this.studentForm.value);
    this.goTo();
  }

  goTo(){
   this.router.navigate(['student-list'])
  }
}
