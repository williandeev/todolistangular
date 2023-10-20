import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getTodos() {
    return this.http.get<any[]>(this.baseUrl);
  }

  createTodo(taskData: any) {
    return this.http.post<any>(this.baseUrl + 'create', taskData);
  }

  deleteTodo(taskId: number) {
    const url = `${this.baseUrl}delete/${taskId}/`;
    return this.http.delete<any>(url);
  }

  updateTodo(taskData: any) {
    const url = `${this.baseUrl}update/${taskData.id}/`;
    return this.http.put<any>(url, taskData);
  }
}
