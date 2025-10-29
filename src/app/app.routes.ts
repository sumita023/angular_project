import { Routes } from '@angular/router';
import { AddEmployee } from './components/add-employee/add-employee';
import { EmployeeList } from './components/employee-list/employee-list';
import { DataBinding } from './components/data-binding/data-binding';
import { StructureDirective } from './directive/structure-directive/structure-directive';
import { Ifelse } from './ControlFlow/ifelse/ifelse';

export const routes: Routes = [
    {
        path: 'add-emp',
        component:AddEmployee
    },
    {
        path: 'emp-list',
        component:EmployeeList
    },
    {
        path: 'data-binding',
        component:DataBinding
    },
    {
        path: 'structure-Directive',
        component:StructureDirective
    },
    {
        path: 'if-else',
        component:Ifelse
    }
];
