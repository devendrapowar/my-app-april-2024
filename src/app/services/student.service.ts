import { Injectable } from '@angular/core';
import { StudentModel } from '../model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private url: string = 'http://localhost:5000/api';
  private students: StudentModel[] = STUDENTS;

  constructor(private httpClint: HttpClient) { }

  getStudentList(): Observable<any> {
    // return this.students;
    return this.httpClint.get(this.url + '/students')
  }

  getStudentData(id: string): Observable<any>  {
    return this.httpClint.get(this.url + '/students/' + id);
  }

  deleteStudent(id: string): Observable<any>  {
    return this.httpClint.delete(this.url + '/students/' + id);
  }

  createStudent(student: StudentModel): Observable<any> {
    return this.httpClint.post(this.url + '/students', student);
    // if(!student.id) {
    //   student.id = 'id' + this.students.length + 1;
    // }
    // this.students.unshift(student)
  }

  editStudent(student: StudentModel) {
    const index = this.students.findIndex((std: StudentModel)=> {
      return std.id == student.id
    })
    if(index > -1) {
      this.students[index] = student;
    }
  }
}
