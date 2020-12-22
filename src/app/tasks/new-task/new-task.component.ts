import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { TaskService } from '../../task.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {
  taskForm = new FormGroup({
    title: new FormControl(''),
    date: new FormControl(this.getCurrentDate()),
    content: new FormControl('')
  })

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {


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

  onNewTask(): void {

  }

  createTask(): void {
    let task = {};

  }
}
