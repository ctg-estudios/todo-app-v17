import { Component ,signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from "../models/task.model";
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  tasks = signal<Task[]>([
    {id: 1, title: 'Levantarme a las 4:40 am', completed: false },
    {id: 2, title: 'Tomar un vaso con agua', completed: false },
    {id: 3, title: 'Hacer cafe', completed: false },
    {id: 4, title: 'Prender el equipo de trabajo', completed: false },
  ])

  changeEventHandler(ev: Event){
    const input = ev.target as HTMLInputElement;
    const newValue = input.value;
    this.tasks.update((tasks)=> [ ... tasks, this.addNewTask(newValue)])
  }

  addNewTask(title: String):Task{
    return { id: Date.now(), title, completed: false}
  }

  deleteTask(index: Number){
    this.tasks.update((tasks)=> tasks.filter((task , pos) => pos !== index))
  }

  updateComplete(index:Number){
    this.tasks.update((tasks) => {
        return tasks.map((task , pos) => {
          if (pos === index) {
            return {
              ...task,
              completed : !task.completed
            }
          }
          return task
        })
      })
  }

}
