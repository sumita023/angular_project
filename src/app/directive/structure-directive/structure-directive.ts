import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-structure-directive',
  imports: [CommonModule,FormsModule],
  templateUrl: './structure-directive.html',
  styleUrl: './structure-directive.css',
})
export class StructureDirective {
  isDiv1Visible: boolean = true;
  isDiv2Visible: boolean = true;
  num1:string='';
  num2:string='';
  isChecked:boolean=false;
  currentState:string='';
  cityArray:string[]=['Kolkata','Goa', 'Mumbai'];
  studentList:any[]=[
    {id:1, name:"sumita", city: "pune", status:true, totalMarks:90},
    {id:2, name:"roni", city: "kolkata", status:false, totalMarks:50},
    {id:3, name:"namita", city: "chennai", status:true, totalMarks:20}
  ]
  isDiv1bgColor:string='';
  show() {
    this.isDiv1Visible = true;
    
  }
  hide() {
    this.isDiv1Visible = false;
    
  }
  toggleDiv2(){
    this.isDiv2Visible = !this.isDiv2Visible;
  }
  showColor() {
    //this.isDiv1Visible = true;
    this.isDiv1bgColor='bg-danger';
  }
  hideColor() {
    // this.isDiv1Visible = false;
    this.isDiv1bgColor='bg-primary';
  }
}
