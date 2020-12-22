import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const datePicker =  document.getElementById('date-picker');
    datePicker.setAttribute("value", this.getCurrentDate());
    console.log(datePicker);
    //.value = new Date().toLocaleDateString();
  }

  getCurrentDate(): string {
    const date = new Date();
    let dateString = date.getFullYear().toString() + "-";
    let month = (date.getMonth() + 1).toString();
    month = month.length > 1 ? month : "0" + month;
    dateString += month + "-";
    dateString += date.getDate().toString();
    return dateString;
  }
}
