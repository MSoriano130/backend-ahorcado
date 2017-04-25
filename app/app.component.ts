//Componente principal
import { Component } from '@angular/core';

import { AppFormulario } from './formulario.component'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Component({
	selector: 'my-app',		//Se usa como tag html
	template: `<h1>Back-End<h1>
	<formulario> </formulario>
	
	`   
})

export class AppComponent {}