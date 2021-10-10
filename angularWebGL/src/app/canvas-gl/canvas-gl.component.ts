import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { WebGLService } from '../services/web-gl.service';
import { interval } from 'rxjs';
import * as matrix from 'gl-matrix';


@Component({
  selector: 'app-canvas-gl',
  templateUrl: './canvas-gl.component.html',
  styleUrls: ['./canvas-gl.component.scss'],
})
export class CanvasGLComponent implements OnInit, AfterViewInit {
  @ViewChild('sceneCanvas') private canvas: ElementRef<HTMLCanvasElement>;;
  private _60fpsInterval = 16.666666666666666667;
  private gl: WebGLRenderingContext
  private cubeRotation = 0;
  private deltaTime = 0;
  
  constructor(private webglService: WebGLService) {}

  ngOnInit(): void {
    console.log('oninit');
  }

  ngAfterViewInit(): void {
    console.log('afterinit');
    if (!this.canvas) {
      alert('canvas not supplied! cannot bind WebGL context!');
      return;
    }
    console.log(this.canvas)
    this.gl = this.webglService.initializeWebGLContext(this.canvas.nativeElement);
    this.drawScene();
   /* const drawSceneInterval = interval(this._60fpsInterval);
    drawSceneInterval.subscribe(() => {
      
    });*/
  }
  private drawScene() {
    
    // draw the scene
    const offset = 0;
    const vertexCount = 2*3*6;
    this.gl.drawArrays(
      this.gl.TRIANGLES,
      offset,
      vertexCount
    );
  }
}
