import { Component, OnInit } from '@angular/core';
import { AlumnoService } from '../../services/alumno.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrl: './alumno.component.css'
})
export class AlumnoComponent implements OnInit{

  form!: FormGroup;
  //forma Junior
  //cursos: string[] = []
  cursos$!: Observable<string[]>;

  //Inyección de dependencias: 
  constructor(private alumnoService: AlumnoService, private fb: FormBuilder, private authService: AuthService){}

  ngOnInit(){
    this.form = this.fb.group({
      codigo: ['', Validators.required],
      nombre: ['', [Validators.required,Validators.minLength(3)]],
      edad:   [null, [Validators.min(17), Validators.max(99)]],
      email:  ['', Validators.email]
    })
    /*
    //Suscribirse (forma básica)
    this.alumnoService.getCursos().subscribe(cursos => this.cursos = cursos);
    //subscribe = escuchar el flujo
    */

    //Operadores RxJS (clave) - Forma Junior
    /*this.alumnoService.getCursos()
      .pipe(
          map(cursos => cursos.filter(c => c !== 'Angular'))
      )
      .subscribe(cursos => this.cursos = cursos);
    
      ✔ pipe → encadena transformaciones
      ✔ map → transforma data

      1. Recibir una emisión única (arreglo) mediante el map de RxJS
      2. Abrir la caja y usar filter de JS para crear un nuevo arreglo con el filtro
      3. Cerra la caja y dejar que siga su camino al subcribe.
    */

    //Forma Senior 
    this.cursos$ = this.alumnoService.getCursos();
  }

  guardar(){
    console.log(this.form.value);
  }

  login(){
    if(this.form.valid){
       this.authService.login();
    }
  }
}
