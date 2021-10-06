import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WebGLService {
  private _renderingContext: RenderingContext;
  private get gl(): WebGLRenderingContext {
    return <WebGLRenderingContext>this._renderingContext;
  }

  constructor() {}

  initializeWebGLContext(canvas: HTMLCanvasElement): void {
    console.log(canvas.getAttribute('style'))
    this._renderingContext =
      canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!this.gl) {
      alert('Unable to initialize WebGL. Your browser may not support it.');
      return;
    }
    this.setWebGLCanvasDimenviosns(canvas);
    this.iniliseWebGLCanvas();
  }

  setWebGLCanvasDimenviosns(canvas: HTMLCanvasElement) {
    this.gl.canvas.width = canvas.clientWidth;
    this.gl.canvas.height = canvas.clientHeight;
  }

  iniliseWebGLCanvas() {
    this.gl.clearColor(0,0,0,1)

    this.gl.enable(this.gl.DEPTH_TEST);

    this.gl.depthFunc(this.gl.LEQUAL);

    this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);


  }
}
