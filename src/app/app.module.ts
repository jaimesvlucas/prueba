import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { AboutComponent } from './componentes/about/about.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NavegacionComponent } from './componentes/navegacion/navegacion.component';
import { LoteriaComponent } from './componentes/loteria/loteria.component';
import { GenerarLoteriaComponent } from './componentes/generar-loteria/generar-loteria.component';
import { CalculadoraComponent } from './componentes/calculadora/calculadora.component';
import { MultiplicarComponent } from './componentes/multiplicar/multiplicar.component';
import { TuberiasComponent } from './componentes/tuberias/tuberias.component';
import { DniPipe } from './pipes/dni.pipe';
import { NumerosPipe } from './pipes/numeros.pipe';
import { EstructurasComponent } from './componentes/estructuras/estructuras.component';
import { FormularioClaseComponent } from './componentes/formulario-clase/formulario-clase.component';
import { CrudLocalComponent } from './componentes/crud-local/crud-local.component';
import { HowartsComponent } from './componentes/howarts/howarts.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { CrudComponent } from './componentes/crud/crud.component';
import { LoginComponent } from './componentes/auth/login/login.component';
import { RegisterComponent } from './componentes/auth/register/register.component';
import { PerfilComponent } from './componentes/auth/perfil/perfil.component';
import { EnviarTokenInterceptor } from './auth/enviar-token.interceptor';
import { ListaPerfilesComponent } from './componentes/lista-perfiles/lista-perfiles.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavegacionComponent,
    LoteriaComponent,
    GenerarLoteriaComponent,
    CalculadoraComponent,
    MultiplicarComponent,
    TuberiasComponent,
    DniPipe,
    NumerosPipe,
    EstructurasComponent,
    FormularioClaseComponent,
    CrudLocalComponent,
    HowartsComponent,
    RegistroComponent,
    CrudComponent,
    LoginComponent,
    RegisterComponent,
    PerfilComponent,
    ListaPerfilesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [{provide:LOCALE_ID, useValue:"es"},{provide: HTTP_INTERCEPTORS, useClass:EnviarTokenInterceptor, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
