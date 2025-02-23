import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  projects!: any;
  projectForm!: FormGroup;

  constructor(private apiService: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.apiService.getProjects().subscribe(response => {
      this.projects = response;
    },
      error => {
        console.error(error);
      });

    this.projectForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.projectForm.valid) {
      this.apiService.postProject(this.projectForm.value).subscribe(response => {
        console.log('Project saved successfully', response);
      },
        error => {
          console.error('Error saving project', error);
        });
      this.projectForm.reset();
      this.refreshProjects();
    }
  }

  trackByProjectId(index: number, project: any): number {
    return project.id;
  }

  refreshProjects(): void {
    this.apiService.getProjects().subscribe(response => {
      this.projects = response;
    },
      error => {
        console.error(error);
      });
  }
}
