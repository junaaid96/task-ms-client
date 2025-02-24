import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  projects!: any;
  tasks!: any;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.loadProjects();
    this.loadTasks();
  }

  loadProjects(): void {
    this.apiService.getProjects().subscribe(response => {
      this.projects = response;
    },
      error => {
        console.error(error);
      });
  }

  loadTasks(): void {
    this.apiService.getTasks().subscribe(response => {
      this.tasks = response;
    }, error => {
      console.error(error);
    });
  }

  refreshProjects(): void {
    this.loadProjects();
  }

  refreshTasks(): void {
    this.loadTasks();
  }
}