import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {GameStartViewComponent} from "./game-start-view/game-start-view.component";
import {BoardComponent} from "./board/board.component";
import {GameOpenedComponent} from "./game-opened/game-opened.component";

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'game-start', component: GameStartViewComponent },
  { path: 'login', component: LoginComponent },
  { path: 'game-opened', component: GameOpenedComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
