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
    const date = new Date();
    datePicker.setAttribute(
      "value",
      date.getFullYear().toString() + "-" +
      date.getMonth().toString() + "-" +
      date.getDate());
    console.log(datePicker);
    //.value = new Date().toLocaleDateString();
  }

}
