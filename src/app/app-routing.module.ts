import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActividadesComponent } from './actividades/actividades.component';
import { EmpresasComponent } from './empresas/empresas.component';
import { NotificacionesComponent } from './notificaciones/notificaciones.component';
import { AccidentesComponent } from './accidentes/accidentes.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { PlanificacionComponent} from './planificacion/planificacion.component';
import { UsuarioComponent} from './usuario/usuario.component';
import { VisitasComponent} from './visitas/visitas.component';


export const routes: Routes = [
  {path:'Actividades', component:ActividadesComponent},
  {path:'Empresas', component:EmpresasComponent},
  {path:'Notificaciones', component:NotificacionesComponent},
  {path:'Accidentes', component:AccidentesComponent},
  {path:'Usuarios', component:UsuariosComponent},
  {path:'Planificacion', component:PlanificacionComponent},
  {path:'Usuario', component:UsuarioComponent},
  {path:'Visitas', component:VisitasComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
