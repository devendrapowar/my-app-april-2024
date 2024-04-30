import { Routes } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { CreateStudentComponent } from './create-student/create-student.component';

export const routes: Routes = [
    {
        title: 'Student List',
        path: 'student-list',
        component: StudentListComponent
    },{
        title: 'Student Details',
        path: 'student-details/:stdId',
        component: StudentDetailsComponent
    },{
        title: 'Create Student',
        path: 'create-student',
        component: CreateStudentComponent
    },{
        title: 'Edit Student',
        path: 'edit-student/:stdId',
        component: CreateStudentComponent
    },{
        path: '**',
        redirectTo: 'student-list'
    }
];
