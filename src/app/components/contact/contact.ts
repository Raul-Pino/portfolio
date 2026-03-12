import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  enviado = false;

    enviarFormulario(formulario: any) {
      console.log('Formulario enviado:', formulario.value);
      
      this.enviado = true;

      setTimeout(() => {
        formulario.reset();
        this.enviado = false;
      }, 3000);
    }
}
