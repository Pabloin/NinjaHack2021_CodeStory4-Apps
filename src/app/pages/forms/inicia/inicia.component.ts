import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'inicia',
  templateUrl: './inicia.component.html',
  styleUrls: ['./inicia.component.scss']
})
export class IniciaComponent implements OnInit {

  idioma: string = "en"

  txt_sube = "Sube";
  txt_busca = "Busca";
  txt_analiza = "Analiza";

  txt_crece = "Crece!";
  txt_cuida = "Cuida... ";


  constructor(private router: Router) {}

  ngOnInit() {
    if (this.idioma === 'en') {
        this.txt_sube = "Upload";
        this.txt_busca = "Search";
        this.txt_analiza = "Analyze";
    }
  }

  func1() {
    console.log('TIP!APP: action func1');
  }

  func2() {
    console.log('TIP!APP: action func2');
  }

  gotoSube(){
    console.log('TIP!APP: action sube');
    this.router.navigate(['/sube']); 
  }
  
  gotoAuth(){
    console.log('TIP!APP: action auth');
    this.router.navigate(['/auth']); 
  }

  gotoRegister(){
    console.log('TIP!APP: action auth');
    this.router.navigate(['/auth/register']); 
  }

}
