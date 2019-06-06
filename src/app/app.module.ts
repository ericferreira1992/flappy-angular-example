import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FlappyComponent } from './components/flappy/flappy.component';
import { ProgressoComponent } from './components/progresso/progresso.component';
import { ObstaculosComponent } from './components/obstaculos/obstaculos.component';
import { BirdComponent } from './components/bird/bird.component';
import { ConjuntoCanosComponent } from './components/obstaculos/conjunto-canos/conjunto-canos.component';
import { CanoComponent } from './components/obstaculos/cano/cano.component';

@NgModule({
  declarations: [
    AppComponent,
    FlappyComponent,
    ProgressoComponent,
    ObstaculosComponent,
    BirdComponent,
    ConjuntoCanosComponent,
    CanoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
