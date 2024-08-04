import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.scss'
})
export class LabsComponent {
  title = 'Bienvenido a la lista de tareas';

  tasks = signal([
    'Instalar Angular Cli',
    'Crear nuevo proyecto',
    'Comunicar con github'
  ])

}
