import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ifelse',
  imports: [FormsModule],
  templateUrl: './ifelse.html',
  styleUrl: './ifelse.css'
})
export class Ifelse {
isDiv1Visible:boolean=true;
isDiv2Visible:boolean=true;
num1:string='';
num2:string='';
selectedVal:string='Select';
selectionArray:string[]=['Active', 'DeACtive','Pending','Select'];
studentArray:any[]=[
      {id:1, name:"sumita", city: "pune", status:true, totalMarks:90},
    {id:2, name:"roni", city: "kolkata", status:false, totalMarks:50},
    {id:3, name:"namita", city: "chennai", status:true, totalMarks:20}
]
dayNumber:string='';

show(){
  this.isDiv1Visible=true;
}
hide(){
  this.isDiv1Visible=false;
}
toggleDiv(){
  this.isDiv2Visible=!this.isDiv2Visible;
}
}
