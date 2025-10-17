import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css'
})
export class DataBinding {
courseName:string ="Angular Js";
inputType:string ="checkbox";
stateName: string="Kolkata";
constructor(){
}

ChnageCourseName(){
  this.courseName ="React Js"
}
//signal
firstName=signal("Sumita");
}
