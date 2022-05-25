import { NgModule }                 from '@angular/core';
import { BrowserModule }            from '@angular/platform-browser';
import { BrowserAnimationsModule }  from '@angular/platform-browser/animations';
import { AppRoutingModule }         from './app-routing.module';
import { AppComponent }             from './app.component';
import { LoginComponent }           from './views/login/login.component';

import { MatToolbarModule }         from '@angular/material/toolbar';
import { MatButtonModule }          from '@angular/material/button';
import { MatSnackBarModule }        from '@angular/material/snack-bar';
import { MatFormFieldModule }       from '@angular/material/form-field';
import { MatInputModule }           from '@angular/material/input';
import { MatCardModule }            from '@angular/material/card';
import { MatListModule }            from '@angular/material/list';
import { HttpClientModule }         from '@angular/common/http';
import { FormsModule }              from '@angular/forms';
import { MatNativeDateModule }      from '@angular/material/core';
import { MatSidenavModule }         from '@angular/material/sidenav';
import { HeaderComponent }          from './components/template/header/header.component';
import { FooterComponent }          from './components/template/footer/footer.component';
import { NavComponent }             from './components/template/nav/nav.component';
import { HomeComponent }            from './views/home/home.component';
import { MatTreeModule }            from '@angular/material/tree';
import { OverlayModule }            from '@angular/cdk/overlay';
import { MatIconModule }            from '@angular/material/icon';
import { TreinamentosComponent }    from './views/treinamentos/treinamentos.component';
import { TreinamentosDetalhesComponent } from './views/treinamentos-detalhes/treinamentos-detalhes.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    TreinamentosComponent,
    TreinamentosDetalhesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatNativeDateModule,
    MatListModule,
    MatSidenavModule,
    MatTreeModule,
    OverlayModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
