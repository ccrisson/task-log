import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  BASE_URL = 'http://localhost:3000';
  private apiListener = new Subject<JSON>();

  constructor(private http: HttpClient) { }

  getApiListener(): Observable<JSON> {
    return this.apiListener.asObservable();
  }

  createTask(task): void {
    // call api with task
    console.log(`send ${JSON.stringify(task)} to backend`);
    this.http.post(this.BASE_URL + '/newtask', task)
      .subscribe(req => {
        // use listener to show success
        this.apiListener.next(JSON.parse(JSON.stringify(req)));
      })
  }
}
