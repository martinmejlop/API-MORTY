import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrl: './character.component.css'
})
export class CharacterComponent {
  character: any;

  constructor(private route: ActivatedRoute, private apiService: ApiService,  private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = +params['id']; // Convertir el ID de string a número
      this.getCharacter(id);
    });
  }

  getCharacter(id: number): void {
    this.apiService.getCharacterById(id).subscribe(
      data => {
        this.character = data;
      },
      error => {
        console.error('Error al obtener el personaje:', error);
      }
    );
  }

  goBack(): void {
    this.router.navigate(['/']); 
  }

}
