import { CurrencyPipe, DatePipe, LowerCasePipe, NgClass, NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { StudentModel } from '../model';
import { FormsModule } from '@angular/forms';
import { StudentService } from '../services/student.service';
import { ConvertAgePipe } from '../pipes/convert-age.pipe';
import { ReverseStringPipe } from '../pipes/reverse-string.pipe';
import { Router } from '@angular/router';


@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [NgFor, NgIf, NgClass, FormsModule, UpperCasePipe, LowerCasePipe, CurrencyPipe, DatePipe, ConvertAgePipe, ReverseStringPipe],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.scss'
})
export class StudentListComponent implements OnInit{
  public students: StudentModel[] = [];
  public filteredStudent!: StudentModel[];
  public showList: boolean = true;
  public searchByName: string = '';
  public isAssending!: boolean;
  public currentDate: Date = new Date();
  constructor(private studentService: StudentService, private router: Router) {
    console.log(this.students);
  }

  ngOnInit(): void {
    this.students = this.studentService.getStudentList();
    console.log(this.students);
    this.searchStudent()
  }

  
  toggleTable() {
    this.showList = !this.showList
  }

  deleteStudent(index: number) {
    this.students.splice(index, 1);
    this.searchStudent();
  }

  searchStudent() {
    this.filteredStudent = this.students.filter((std: StudentModel)=>{
      return std.name.toLowerCase().includes(this.searchByName.toLowerCase());
    })
  }

  sortByAge() {
    this.isAssending = !this.isAssending;
    if(this.isAssending) {
      this.filteredStudent = this.filteredStudent.sort((a, b)=> a.age - b.age);
    } else {  
      this.filteredStudent = this.filteredStudent.sort((a, b)=> b.age - a.age);
    }
  }

  goTo(id: string) {
    console.log('id', id)
    this.router.navigate(['student-details', id]);
  }

  createStudent() {
    console.log('create student');
    this.router.navigate(['create-student']);
  }

}
