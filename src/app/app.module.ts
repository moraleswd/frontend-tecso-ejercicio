import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes, RouterModule} from '@angular/router'
import { IconsModule } from './icons/icons.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { MovementComponent } from './components/movement/movement.component';
import { CurrentAccountComponent } from './components/current-account/current-account.component';
import { HeaderComponent } from './components/header/header.component';
import { CurrentAccountModule } from './components/current-account/current-account.module';
import { MovementModule } from './components/movement/movement.module';

const routes: Routes = [
  {path: '', redirectTo: '/accounts', pathMatch:'full'},
  {path: 'accounts', component: CurrentAccountComponent},
  {path: 'movements/:id', component: MovementComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IconsModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    NgbModule,
    CurrentAccountModule,
    MovementModule
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
