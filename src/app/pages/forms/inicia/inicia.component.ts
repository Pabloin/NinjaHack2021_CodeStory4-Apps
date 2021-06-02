import { Component, OnInit } from '@angular/core';

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


  constructor() { }

  ngOnInit() {
    if (this.idioma === 'en') {
        this.txt_sube = "Upload";
        this.txt_busca = "Search";
        this.txt_analiza = "Analyze";
    }
  }


}
