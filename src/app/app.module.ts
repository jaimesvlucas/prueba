import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
