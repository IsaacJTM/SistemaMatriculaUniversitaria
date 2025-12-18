import { Component, OnInit } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { AlumnoService } from '../../services/alumno.service';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrl: './alumnos.component.css'
})
export class AlumnosComponent implements OnInit{
  title = "Gestión de Alumnos";
  cursos$! : Observable<string[]>

  constructor(private serviceAlumno : AlumnoService){}

  ngOnInit(): void {
    //Forma Senior, sin usar el subcribe. 
    this.cursos$ = this.serviceAlumno.getCursos().pipe(
      map(cursos => cursos.filter(c => c !== 'Angular')),
      catchError(err => {
        console.log(err);
        return of([]);
      })
    );
  }
}
