import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { DataService } from '../../services/data';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  misProyectos: any[] = [];

  constructor(private dataService: DataService, private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.dataService.getDatos().subscribe(data => {
      this.misProyectos = data.proyectos;
      this.cd.detectChanges();
    })
  }
}
