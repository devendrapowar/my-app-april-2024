import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { StudentModel } from '../model';
import { FormsModule } from '@angular/forms';

const STUDENTS: StudentModel[] = [
  {
    img: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
    id: 's1',
    name: 'Suraj',
    age: 32,
    email: 'test@test.com',
    number: '12457654'
  },
  {
    img: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
    id: 's2',
    name: 'Rahul',
    age: 12,
    email: 'test@test.com',
    number: '12457654',
  },
  {
    img: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
    id: 's3',
    name: 'Pritesh',
    age: 23,
    email: 'test@test.com',
    number: '12457654',
  },
  {
    img: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
    id: 's4',
    name: 'Ajinkya',
    age: 38,
    email: 'test@test.com',
    number: '12457654',
  },
  {
    img: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
    id: 's5',
    name: 'Nikhil',
    age: 18,
    email: 'test@test.com',
    number: '12457654',
  },
];

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [NgFor, NgIf, NgClass, FormsModule],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.scss'
})
export class StudentListComponent implements OnInit{
  public students: StudentModel[] = STUDENTS;
  public filteredStudent!: StudentModel[];
  public showList: boolean = true;
  public searchByName: string = '';
  public isAssending!: boolean;

  constructor() {
    console.log(this.students);
  }

  ngOnInit(): void {
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

}
