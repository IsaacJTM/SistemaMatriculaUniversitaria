/**
 * Crear proyecto en angular: 
 * ng new nombreProyecto
 *      ROUTING --> YES
 *      STYLE --> CSS (Más adelante scss)
 * Levanta proyecto: 
 * ng serve -o
 * Estructura de Proyecto Angular: 
 * src/
    app/
    ├ app.component.ts     👉 lógica
    ├ app.component.html   👉 vista
    ├ app.component.css    👉 estilos
    ├ app.module.ts        👉 módulo raíz
    └ app-routing.module.ts

 * Un componente = HTML + CSS + TS
 */


    /**
     * COMPONENTES:
     */

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html'
    })

    export class AppComponent {
        title = "Angular"
    }

    /**
     * MODULOS : ANGULAR no funciona sin MÓDULOS 
     */

    @NgModule({
        dlecaration: [AppComponent],
        import: [BrowserModule],
        bootstrap: [AppComponent]
    })

    export class AppModule{}

    /**
     * DATA BINDING (clave)
     */

    //Interpolación
    //<h1>{{title}}</h1>

    //Property Binding
    //<img [src] = "imageUrl">


    //Event Binding
    //<button (click)="saludar()">Click</button>
    //ts
    //saludar(){alet(`Esto es una alerta`)}

    //Two-way Binding
    //<input [(ngModel)]="nombre">
    //REQUIERE IMPORTAR: import {FormsModule} from '@angular/forms'

    /**
     * DIRECTIVAS
     */

    //*ngIf
    //*ngFor --> <li *ngFor="let item of items"> {{item}} </li>


    /**
     * PIPES
     * 
     * HTML
     * {{fecha | date}}
     * {{precio | currency: 'PEN'}}
     * {{nombre | uppercase}}
     * 
     * BASH
     * ng generate pipe pipes/mayuscula
     * 
     * TS
     * transform(value:string): string{
     *  return value.toUpperCase()
     * }
     */


    /**
     * SERVICES 
     * 
     * CREAR: ng generate services services/usuario
     * 
     * @Injectable({
     *  previdedIn: 'root'
     * })
     * 
     * export class UsuarioService{
     *   getUsuarios(){
     *      return ['Isaac', 'Juan']
     *  }
     * }
     */


    /**
     * INYECCIÓN DE DEPENDENCIAS 
     * 
     * en el constructor ponermos el servicio
     * constructor(private usuarioService : UsuarioService{}
     * 
     * ngOnInit(){
     *  console.log(usuarioService.getUsuarios())
     * }
     */
	 
	 
	 
	 /*
	 
	 Proyecto: Sistema de Matrícula Universitaria
	 ARQUITECTURA DEL PROYECTO (SENIOR: Desde el inicio)
	 src/app/
		 ├ core/              👉 singleton (auth, interceptors, guards)
		 ├ shared/            👉 componentes y pipes reutilizables
		 ├ features/
		 │   ├ auth/          👉 login
		 │   ├ alumnos/       👉 matrícula
		 │   ├ cursos/
		 │   └ pagos/
		 ├ services/          👉 comunicación API
		 ├ models/            👉 interfaces
		 ├ app-routing.module.ts
	 
	 
	 1. Routing Avanzado
		const routes: Routes = [
		  {
			path: 'alumnos',
			loadChildren: () =>
			  import('./features/alumnos/alumnos.module')
			  .then(m => m.AlumnosModule)
		  }
		];

	 2. Lazy Loading (clave para performance)
		ng generate module features/alumnos --route alumnos --module app.module
			✔ Angular carga el módulo solo cuando se navega
			✔ Senior piensa en performance
	 
	 3. Guards (Auth + Roles)
		ng generate guard core/guards/auth
		canActivate(): boolean {
		  return this.authService.isLogged();
		}
			✔ Proteges rutas
			✔ Separación de responsabilidades
			
	 4. Formularios Reactivos (nivel profesional)
	  ts: 
		this.form = this.fb.group({
		  codigo: ['', Validators.required],
		  nombre: ['', Validators.minLength(3)]
		});
	
	  html: 
	  <form [formGroup]="form">
		  <input formControlName="nombre">
		</form>
		
			✔ Control total
			✔ Validaciones reales
			✔ Escalables

		
	 5. Observables y RxJS
		
		this.http.get<Alumno[]>(url)
		  .pipe(
			map(data => data.filter(a => a.activo)),
			catchError(err => throwError(() => err))
		  );
		📌 Senior Angular = RxJS
		
		
		
	 6. HttpClient (Servicios REST)
	 
		getAlumnos(): Observable<Alumno[]> {	
		  return this.http.get<Alumno[]>(this.apiUrl);
		}
			✔ Tipado
			✔ Observable
			✔ Testeable
		
		ngOnInit(){
		this.alumnosServices.getAlumnos().subcribe(alumnos => {this.alumnos = alumnos});
		}
		❌ No guardes lógica en subscribe
		✔ Usa operadores RxJS (map, filter, etc.)
		
	 7. Interceptores
	 ng generate interceptor core/interceptors/auth
	 
	 intercept(req, next) {
		  const authReq = req.clone({
			setHeaders: { Authorization: 'Bearer TOKEN' }
		  });
		  return next.handle(authReq);
		}
	 
		✔ Tokens
		✔ Logs
		✔ Manejo global de errores
		
	 8. Buenas Prácticas (Senior)

		✔ OnInit para lógica
		✔ No lógica en HTML
		✔ async pipe
		✔ Servicios delgados
		✔ Componentes tontos
		✔ Interfaces para todo
		✔ trackBy en ngFor
		
		
		
		PASO 5 — HttpClient + API REST (ANGULAR REAL)
		🎯 Objetivo

			Consumir una API real

			Tipar respuestas

			Usar Observables correctamente

			Preparar el camino para interceptores
			
		🧠 Idea clave (muy puntual)

			👉 En Angular:

			HttpClient = puerta a APIs

			Siempre devuelve Observables

			Siempre tipado
		
	 */
	 