import { Component, Input, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { TaskComponent } from "../task/task.component";

@Component({
  selector: 'project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  @Input()
  projects!: any;

  @Input()
  tasks!: any;

  @Output()
  refreshProjects = new EventEmitter<void>();

  projectForm!: FormGroup;

  projectEditMode!: boolean;
  taskEditMode!: boolean;

  selectedProjectId!: number;
  selectedTaskId!: number;

  constructor(private apiService: ApiService, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.projectForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  onSubmitProject(): void {
    if (this.projectForm.valid) {
      this.apiService.postProject(this.projectForm.value).subscribe(response => {
        console.log('Project saved!', response);
        this.projectForm.reset();
        this.refreshProjects.emit();
      },
        error => {
          console.error('Error saving project!', error);
        });
    } else {
      console.error('Invalid Form!');
    }
  }

  onUpdateProject() {
    this.apiService.updateProject(this.selectedProjectId, this.projectForm.value).subscribe(response => {
      console.log('Project updated!', response);
      this.projectForm.reset();
      this.projectEditMode = false;
      this.refreshProjects.emit();
    },
      error => {
        console.error('Error updating project!', error);
      });
  }

  onUpdateProjectEvent(project: any): void {
    this.apiService.projectEditMode = true;
    this.projectEditMode = this.apiService.projectEditMode;

    this.selectedProjectId = project.id;
    this.projectForm.patchValue({
      name: project.name,
      description: project.description
    });
  }

  onDeleteProjectEvent(projectId: number): void {
    this.apiService.deleteProject(projectId).subscribe(response => {
      console.log('Deleted!');
      this.refreshProjects.emit();
    });
  }

  trackByProjectId(index: number, project: any): number {
    return project.id;
  }

  // Task updatet and delete event
  // onUpdateTaskEvent(task: any) {
  //   this.apiService.taskEditMode = true;
  //   this.taskEditMode = this.apiService.taskEditMode;

  //   this.selectedTaskId = task.id;
  //   this.taskComponent.taskForm.patchValue({
  //     title: task.title,
  //     description: task.description,
  //     priority: task.priority,
  //     status: task.status,
  //     dueDate: task.dueDate ? new Date(task.dueDate).toISOString().substring(0, 10) : '',
  //     projectId: task.projectId
  //   });
  // }
}
