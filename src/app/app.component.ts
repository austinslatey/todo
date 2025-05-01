import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Add this

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [CommonModule, FormsModule] // Add FormsModule
})
export class AppComponent {
  tasks: Task[] = [];
  newTaskTitle: string = '';

  addTask() {
    if (this.newTaskTitle.trim()) {
      this.tasks.push({
        id: this.tasks.length + 1,
        title: this.newTaskTitle,
        completed: false
      });
      this.newTaskTitle = '';
    }
  }

  toggleTaskCompletion(task: Task) {
    task.completed = !task.completed;
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  // delete all tasks
  clearAllTasks() {
    this.tasks = [];
  }
}