import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills implements OnInit{
  misHabilidades: any[] = [];

  constructor(private dataService: DataService, private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.dataService.getDatos().subscribe(data => {
      this.misHabilidades = data.habilidades;
      this.cd.detectChanges();
    })
  }
}
