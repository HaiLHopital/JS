import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { WebGLService } from '../services/web-gl.service';

@Component({
  selector: 'app-canvas-gl',
  templateUrl: './canvas-gl.component.html',
  styleUrls: ['./canvas-gl.component.scss'],
})
export class CanvasGLComponent implements OnInit, AfterViewInit {
  @ViewChild('sceneCanvas') private canvas: ElementRef<HTMLCanvasElement>;;

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
    this.webglService.initializeWebGLContext(this.canvas.nativeElement)
  }
}
