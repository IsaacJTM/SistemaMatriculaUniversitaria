import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  constructor() { }
  //Angular usa Observables porque HTTP, forms y eventos no son instantáneos.
  //HttpClient SIEMPRE devuelve Observables
  getCursos(): Observable<string[]>{
    return of(["Angular", "Java", "Node.js"]);
  }
  // of() crea un Observable (simulación de API)
}
