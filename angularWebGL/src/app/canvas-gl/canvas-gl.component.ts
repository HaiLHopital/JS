import { Component, OnInit } from '@angular/core';
import { WebGLService } from '../services/web-gl.service';

@Component({
  selector: 'app-canvas-gl',
  templateUrl: './canvas-gl.component.html',
  styleUrls: ['./canvas-gl.component.scss']
})
export class CanvasGLComponent implements OnInit {

  constructor(private webglService: WebGLService) { }

  ngOnInit(): void {
  }

}
