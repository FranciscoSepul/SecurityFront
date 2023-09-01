import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';


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



@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        LoginComponent,
        ActividadesComponent,
        NavigationComponent,
        DashboardComponent
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
        MatMenuModule
    ]
})
export class AppModule { }
