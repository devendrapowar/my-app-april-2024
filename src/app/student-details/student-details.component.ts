import { Component, Input } from '@angular/core';
import { StudentService } from '../services/student.service';
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
  public student: StudentModel | undefined;
  @Input()
  set stdId(value: string) {
    this.initStudentDetails(value);
  }

  constructor(private studentService: StudentService, private router: Router) { }

  initStudentDetails(id: string) {
    this.studentService.getStudentData(id).subscribe((res) => {
      this.student = res;
      if (!this.student) {
        this.goTo();
      }
    });
  }

  goTo() {
    this.router.navigate(['student-list']);
  }

}
