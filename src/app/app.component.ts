import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { throwIfEmpty } from 'rxjs';

interface Task {
  id: number;
  title: string;
  completed: boolean;
}


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  tasks: Task[] = []
  newTaskTitle: string = "";

  addTask(){
    // check if there is a new task
    if (this.newTaskTitle.trim()){
      this.tasks.push({
        id: this.tasks.length,
        title: this.newTaskTitle,
        completed: false
      });

      // Clear the input
      this.newTaskTitle = '';
    }
  }

  toggleTaskCompletion(task: Task){
    task.completed = !task.completed;
  }

  deleteTask(id:number){
    this.tasks = this.tasks.filter(task => task.id !== id)
  }
}
