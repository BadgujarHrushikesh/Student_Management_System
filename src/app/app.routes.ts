import { Routes } from '@angular/router';
import { StudentListComponent } from './pages/student/student-list/student-list.component';
import { StudentDetailsComponent } from './pages/student/student-details/student-details.component';
import { CreateStudentComponent } from './pages/student/create-student/create-student.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { PagesComponent } from './pages/pages.component';

export const routes: Routes = [
    {
        path: 'auth',
        component: AuthComponent,
        children: [{
            path: 'login',
            component: LoginComponent
        },
        // {
        //     path:'registration',
        //     redirectTo:Regestrationcomponent
        // }, 
        {
            path: '**',
            redirectTo: 'login'
        }]
    }, {
        path: 'app',
        component: PagesComponent,
        children: [{
            title: 'Student List',
            path: 'student-list',
            component: StudentListComponent
        }, {
            title: 'Student Details',
            path: 'student-details/:stdId',
            component: StudentDetailsComponent
        }, {
            title: 'Create Student',
            path: 'create-student',
            component: CreateStudentComponent
        }, {
            title: 'Edit Student',
            path: 'edit-student/:stdId',
            component: CreateStudentComponent
        }, {
            path: '**',
            redirectTo: 'student-list'
        }]
    },
    {
        path: '**',
        redirectTo: 'auth'
    }];
