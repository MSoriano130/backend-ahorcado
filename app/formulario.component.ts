//Componente principal
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Output } from '@angular/core';
import { Input } from '@angular/core';
import {Injectable} from "@angular/core";
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from "rxjs/Rx";

@Component({
	selector: 'formulario',		//Se usa como tag html
	template: `
 	
  {{ahorcado.nivel}}
  {{ahorcado.palabra}}
  {{ahorcado.pista}}

	
	<div class="container"> 
    <div class="panel panel-default">
    <div class="panel-heading">
      Formulario
    </div>
  </div>

  <div class="panel-body">
      <form  (ngSubmit)="onSubmit()">
        <div class="form-group">

          <label for="nivel">Nivel:</label>
          <input type="number" class="form-control" required [(ngModel)]="ahorcado.nivel"  name="nivel" id="nivel">

        </div>
        <div class="form-group">
          <label for="palabra">Palabra:</label>
          <input type="text" class="form-control" required [(ngModel)]="ahorcado.palabra" name="palabra" id="palabra">
        </div>

        <div class="form-group">
          <label for="pista">Pista:</label>
          <input type="text" class="form-control" required [(ngModel)]="ahorcado.pista" name="pista"  id="pista">
        </div>

        <button type="submit" class="btn btn-default" (click)="crearahorcado(ahorcado)">Enviar</button>

      </form>
  </div>
</div>
	
	
	`,
	styles: [`
        .container {
            color: black;
			font: bold 30% monospace;
        }

		

    
    `]
})

@Injectable()

export class AppFormulario {

	public ahorcado;
 



crearahorcado(ahorcado) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(this.ahorcado);
    return this.http.post('http://admin.ucam1.juanjofp.com/', body, headers).map((res: Response) => res.json());
  }

  

  constructor(private http: Http){
    // Definimos el objeto usuario, vació inicialmente (necesario)
    this.ahorcado = {
        "nivel": "",
        "palabra": "",
        "pista": ""
    };
  }

  onSubmit(){
    // Mostramos el objeto usuario
    console.log(this.ahorcado);
    
  }
 

  


}
  