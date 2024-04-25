import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from '../services/student.service';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-create-student',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass, NgIf],
  templateUrl: './create-student.component.html',
  styleUrl: './create-student.component.scss'
})
export class CreateStudentComponent  implements OnInit {
  public studentForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private studentService: StudentService) {}

  ngOnInit(): void {
    this.studentForm = this.fb.group({
      id: [''],
      img: ['', [Validators.required]],
      name: ['', [Validators.required, Validators.minLength(2), Validators.pattern('^([^0-9]*)$')]],
      age: ['', [Validators.required, Validators.min(18), Validators.max(36)]],
      email: ['', [Validators.required, Validators.email]],
      number: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]]
    })
  }

  saveStudent() {
    this.studentService.createStudent(this.studentForm.value);
    this.goTo();
  }

  goTo() {
    this.router.navigate(['student-list']);
  }
}
