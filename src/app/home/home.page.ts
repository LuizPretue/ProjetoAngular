import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage {
  resultado: number = 0;
  value0: number = 0;
  value1: number = 1;
  value2: number = 2;
  value3: number = 3;
  value4: number = 4;
  value5: number = 5;
  value6: number = 6;
  value7: number = 7;
  value8: number = 8;
  value9: number = 9;

  soma() {
    this.resultado = Number(this.value1) + Number(this.value2);
  }

  subtrair() {
    this.resultado = Number(this.value1) - Number(this.value2);
  }

  mult() {
    this.resultado = Number(this.value1) * Number(this.value2);
  }

  dividir() {
    if (Number(this.value2) != 0) {
      this.resultado = Number(this.value1) / Number(this.value2);
    }
    else{
      alert('Não é possivel efetuar divisão por 0');
    }
  }

  calcular() {
    this.resultado;
  }
}

