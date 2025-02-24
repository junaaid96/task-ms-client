import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = "http://localhost:8080/api";
  private _projectEditMode = false;
  private _taskEditMode = false;

  constructor(private http: HttpClient) { }

  get projectEditMode(): boolean {
    return this._projectEditMode;
  }

  set projectEditMode(value: boolean) {
    this._projectEditMode = value;
  }

  get taskEditMode(): boolean {
    return this._taskEditMode;
  }

  set taskEditMode(value: boolean) {
    this._taskEditMode = value;
  }

  getProjects(): Observable<any> {
    return this.http.get(`${this.apiUrl}/projects`);
  }

  postProject(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/create-project`, data);
  }

  updateProject(projectId: number, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/projects/${projectId}`, data);
  }

  deleteProject(projectId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/projects/${projectId}`);
  }

  getTasks(): Observable<any> {
    return this.http.get(`${this.apiUrl}/tasks`);
  }

  postTask(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/create-task`, data);
  }

  updateTask(taskId: number, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/tasks/${taskId}`, data);
  }

  deleteTask(taskId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/tasks/${taskId}`);
  }
}
