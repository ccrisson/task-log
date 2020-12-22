import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  newTask;

  constructor() { }

  createTask(task): void {
    // call api with task
    console.log(`send ${JSON.stringify(task)} to backend`);
  }
}
