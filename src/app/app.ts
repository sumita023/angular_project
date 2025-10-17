import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddEmployee } from './components/add-employee/add-employee';
import { EmployeeList } from './components/employee-list/employee-list';
import { DataBinding } from './components/data-binding/data-binding';
import { StructureDirective } from './directive/structure-directive/structure-directive';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AddEmployee, EmployeeList, StructureDirective],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular_18_tutorial');
}
