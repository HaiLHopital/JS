import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanvasGLComponent } from './canvas-gl/canvas-gl.component';

const routes: Routes = [
  {path: '', component: CanvasGLComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
