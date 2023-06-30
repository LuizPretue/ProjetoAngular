import { Component } from '@angular/core';
import { IonicModule, NumericValueAccessor } from '@ionic/angular';
import { clear } from 'console';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage {
  
  resultado = '0';
  valoratual = '';
  conta: number = 0;
  resultados: number = 0;

  num(value: string){  
    this.valoratual = this.valoratual + value    
    this.resultado = this.valoratual
  }
  calcular(){
    this.resultado = eval(this.valoratual)
    this.valoratual = this.resultado
  }
  raiz(){
    const raiz = Math.sqrt(this.conta);
    this.resultados = this.conta;
  }
  deletar() {
    this.valoratual = '';
    this.resultado = '0';
  }
  backspace(){
    // Slice retorna uma copia da metade de um array a partir de um subarray criado entre as posiçoes de um array original 
    this.valoratual = this.valoratual.slice(0, -1)
    this.resultado = this.valoratual
   if(this.resultado==''){this.resultado='0'}
  }
  //  calcvalue(solve: any){
  //   // charAt retorna um caracter de uma localização espesifica de uma string
  //   if(solve.charAt(0) == '0'){
  //     solve = solve.slice(1,)
  //   }
  //   this.resultado = eval(solve)
  // }
  pi(){

  }
  
  
}

