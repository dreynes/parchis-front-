import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { GameStartViewComponent } from './game-start-view/game-start-view.component';
import { BoardComponent } from './board/board.component';
import { PieceComponent } from './piece/piece.component';
import { SquareComponent } from './square/square.component';
import { SquareSafeComponent } from './square-safe/square-safe.component';
import { SquareExitComponent } from './square-exit/square-exit.component';
import { BorderComponent } from './border/border.component';
import { HomeSquareComponent } from './home-square/home-square.component';
import { DiceComponent } from './dice/dice.component';
import { GameOpenedComponent } from './game-opened/game-opened.component';
import { GoalComponent } from './goal/goal.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    GameStartViewComponent,
    BoardComponent,
    PieceComponent,
    SquareComponent,
    SquareSafeComponent,
    SquareExitComponent,
    BorderComponent,
    HomeSquareComponent,
    DiceComponent,
    GameOpenedComponent,
    GoalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
