import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ApiService } from '../services/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

enum TaskPriority {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
  URGENT = 'URGENT'
}

enum TaskStatus {
  TODO = 'TODO',
  IN_PROGRESS = 'IN_PROGRESS',
  REVIEW = 'REVIEW',
  DONE = 'DONE'
}

@Component({
  selector: 'task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input()
  projects!: any;

  @Output()
  refreshTasks = new EventEmitter<void>();

  taskForm!: FormGroup;
  taskPriorities = Object.values(TaskPriority);
  taskStatuses = Object.values(TaskStatus);

  constructor(private apiService: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.taskForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      priority: ['', Validators.required],
      status: [''],
      dueDate: [''],
      projectId: [null, Validators.required]
    });
  }

  onSubmit() {
    if (this.taskForm.valid) {
      if (this.taskForm.value.dueDate) {
        this.taskForm.value.dueDate = new Date(this.taskForm.value.dueDate).toISOString();
      }
      this.apiService.postTask(this.taskForm.value).subscribe(response => {
        console.log("Task saved!", response);
        this.taskForm.reset();
        this.refreshTasks.emit();
      }, error => {
        console.error('Error saving task!', error);
      })
    } else {
      console.error('Invalid Form!');
    }
  }
}
