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

  ngOnInit() {
    // Load tasks from localStorage on component initialization
    this.loadTasks();
  }

  loadTasks() {
    const saved = localStorage.getItem('tasks');
    this.tasks = saved ? JSON.parse(saved) : [];
  }


  addTask() {
    if (this.newTaskTitle.trim()) {
      this.tasks.push({
        id: this.tasks.length + 1,
        title: this.newTaskTitle,
        completed: false
      });
      this.newTaskTitle = '';
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
  }

  toggleTaskCompletion(task: Task) {
    task.completed = !task.completed;
    this.saveTasks();
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  // delete all tasks
  clearAllTasks() {
    this.tasks = [];
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}