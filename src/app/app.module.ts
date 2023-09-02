import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LoginComponent } from './auth/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActividadesComponent } from './actividades/actividades.component';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { MatButtonModule } from '@angular/material/button';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { NotificacionesComponent } from './notificaciones/notificaciones.component';
import { AccidentesComponent } from './accidentes/accidentes.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { EmpresasComponent } from './empresas/empresas.component';
import { PlanificacionComponent } from './planificacion/planificacion.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { VisitasComponent } from './visitas/visitas.component';


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        LoginComponent,
        ActividadesComponent,
        NavigationComponent,
        DashboardComponent,
        NotificacionesComponent,
        AccidentesComponent,
        UsuariosComponent,
        EmpresasComponent,
        PlanificacionComponent,
        UsuarioComponent,
        VisitasComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        MatSidenavModule,
        MatListModule,
        MatIconModule,
        MatToolbarModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        MatButtonModule,
        MatGridListModule,
        MatCardModule,
        MatMenuModule,
        FormsModule,
        MatFormFieldModule,
        MatProgressSpinnerModule
    ]
})
export class AppModule { }
