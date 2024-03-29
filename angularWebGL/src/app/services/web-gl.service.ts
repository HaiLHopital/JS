import { Injectable } from '@angular/core';
import fragmentShaderSrc from '../../assets/test-fragment-shader.glsl';
import vertexShaderSrc from '../../assets/test-vertex-shader.glsl';
import * as matrix from 'gl-matrix';

@Injectable({
  providedIn: 'root',
})
export class WebGLService {
  private _renderingContext: RenderingContext;
  private get gl(): WebGLRenderingContext {
    return <WebGLRenderingContext>this._renderingContext;
  }

  private get clientCanvas(): Element {
    return this.gl.canvas as Element;
  }
  private fieldOfView = (45 * Math.PI) / 180; // in radians
  private aspect = 1;
  private zNear = 0.1;
  private zFar = 100.0;
  private projectionMatrix = matrix.mat4.create();
  private modelViewMatrix = matrix.mat4.create();
  private buffers: any;
  private programInfo: any;

  constructor() {}

  getModelViewMatrix(): matrix.mat4 {
    return this.modelViewMatrix;
}
  initializeWebGLContext(canvas: HTMLCanvasElement): WebGLRenderingContext {
    this._renderingContext =
      canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!this.gl) {
      alert('Unable to initialize WebGL. Your browser may not support it.');
      return null as WebGLRenderingContext;
    }
    this.setWebGLCanvasDimenviosns(canvas);
    this.initialiseWebGLCanvas();

    let shaderProgram = this.initializeShaders();

    this.programInfo = {
      program: shaderProgram,
      attribLocations: {
        vertexPosition: this.gl.getAttribLocation(
          shaderProgram,
          'aVertexPosition'
        ),
        vertexColor: this.gl.getAttribLocation(shaderProgram, 'aVertexColor'),
      },
      uniformLocations: {
        projectionMatrix: this.gl.getUniformLocation(
          shaderProgram,
          'uProjectionMatrix'
        ),
        modelViewMatrix: this.gl.getUniformLocation(
          shaderProgram,
          'uModelViewMatrix'
        ),
      },
    };
    this.buffers = this.initialiseBuffers();
    debugger;
    this.prepareScene();
    debugger;
    return this.gl;
  }

  updateWebGLCanvas() {
    this.initialiseWebGLCanvas();

    // Our field of view is 45 degrees, with a width/height ratio of 640:480.
    // We only want to see objects  between 0.1 units and 100 units away from the camera.
    // The perspective projection matrix is a special matrix that is used to simulate the
    // distortion of perspective in a camera.
    this.aspect =
      this.clientCanvas.clientWidth / this.clientCanvas.clientHeight;
    this.projectionMatrix = matrix.mat4.create();
    matrix.mat4.perspective(
      this.projectionMatrix,
      this.fieldOfView,
      this.aspect,
      this.zNear,
      this.zFar
    );

    // Set the drawing position to the "identity" point, which is the center of the scene.
    this.setModelViewAsIdentity();
  }


  public prepareScene() {
    console.log(this.gl)
    this.updateWebGLCanvas();
    // move the camera position a bit backwards to a position where
    // we can observe the content that will be drawn from a distance
    matrix.mat4.translate(
      this.modelViewMatrix, // destination matrix
      this.modelViewMatrix, // matrix to translatef
      [1.0, 1.0, -5.0] // amount to translate
    );
    matrix.mat4.rotate(
      this.modelViewMatrix, 
      this.modelViewMatrix, 
      1, 
      [1,1,1]
    );
    // tell WebGL how to pull out the positions from the position
    // buffer into the vertexPosition attribute
    this.bindVertexPosition(this.programInfo, this.buffers);
    // tell WebGL how to pull out the colors from the color buffer
    // into the vertexColor attribute.
    this.bindVertexColor(this.programInfo, this.buffers);
    // tell WebGL to use our program when drawing
    this.gl.useProgram(this.programInfo.program);
    // set the shader uniforms
    this.gl.uniformMatrix4fv(
      this.programInfo.uniformLocations.projectionMatrix,
      false,
      this.projectionMatrix
    );
    this.gl.uniformMatrix4fv(
      this.programInfo.uniformLocations.modelViewMatrix,
      false,
      this.modelViewMatrix
    );
  }

  setWebGLCanvasDimenviosns(canvas: HTMLCanvasElement) {
    this.gl.canvas.width = canvas.clientWidth;
    this.gl.canvas.height = canvas.clientHeight;
  }

  initialiseWebGLCanvas() {
    this.gl.clearColor(0, 0, 0, 1);
    debugger;
    this.gl.enable(this.gl.DEPTH_TEST);

    this.gl.depthFunc(this.gl.LEQUAL);

    this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
  }

  private determineShaderType(shaderMimeType: string): number {
    if (shaderMimeType) {
      if (shaderMimeType === 'x-shader/x-vertex') {
        return this.gl.VERTEX_SHADER;
      } else if (shaderMimeType === 'x-shader/x-fragment') {
        return this.gl.FRAGMENT_SHADER;
      } else {
        console.log('Error: could not determine the shader type');
      }
    }
    return -1;
  }

  private loadShader(shaderSource: string, shaderType: string): WebGLShader {
    const shaderTypeAsNumber = this.determineShaderType(shaderType);
    if (shaderTypeAsNumber < 0) {
      return null;
    }
    // Create the gl shader
    const glShader = this.gl.createShader(shaderTypeAsNumber);
    // Load the source into the shader
    this.gl.shaderSource(glShader, shaderSource);
    // Compile the shaders
    this.gl.compileShader(glShader);
    // Check the compile status
    const compiledShader = this.gl.getShaderParameter(
      glShader,
      this.gl.COMPILE_STATUS
    );
    return this.checkCompiledShader(compiledShader) ? glShader : null;
  }

  private checkCompiledShader(compiledShader: any): boolean {
    if (!compiledShader) {
      // shader failed to compile, get the last error
      const lastError = this.gl.getShaderInfoLog(compiledShader);
      console.log("couldn't compile the shader due to: " + lastError);
      this.gl.deleteShader(compiledShader);
      return false;
    }
    return true;
  }

  initializeShaders(): WebGLProgram {
    // 1. Create the shader program
    let shaderProgram = this.gl.createProgram();
    // 2. compile the shaders
    const compiledShaders = [];
    let fragmentShader = this.loadShader(
      fragmentShaderSrc,
      'x-shader/x-fragment'
    );
    let vertexShader = this.loadShader(vertexShaderSrc, 'x-shader/x-vertex');
    compiledShaders.push(fragmentShader);
    compiledShaders.push(vertexShader);
    // 3. attach the shaders to the shader program using our WebGLContext
    if (compiledShaders && compiledShaders.length > 0) {
      for (let i = 0; i < compiledShaders.length; i++) {
        const compiledShader = compiledShaders[i];
        if (compiledShader) {
          this.gl.attachShader(shaderProgram, compiledShader);
        }
      }
    }
    // 4. link the shader program to our gl context
    this.gl.linkProgram(shaderProgram);
    // 5. check if everything went ok
    if (!this.gl.getProgramParameter(shaderProgram, this.gl.LINK_STATUS)) {
      console.log(
        'Unable to initialize the shader program: ' +
          this.gl.getProgramInfoLog(shaderProgram)
      );
    }
    // 6. return shader
    return shaderProgram;
  }

  private initialiseBuffers(): any {
    // Create a buffer for the square's positions.
    const positionBuffer = this.gl.createBuffer();

    // bind the buffer to WebGL and tell it to accept an ARRAY of data
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, positionBuffer);

    // create an array of positions for the square.
    const positions = new Float32Array([
      // Front face
      -1.0, -1.0, 1.0, 1.0, -1.0, 1.0, -1.0, 1.0, 1.0,

      1.0, 1.0, 1.0, -1.0, 1.0, 1.0, 1.0, -1.0, 1.0,

      // Back face
      -1.0, -1.0, -1.0, -1.0, 1.0, -1.0, 1.0, 1.0, -1.0,

      1.0, 1.0, -1.0, 1.0, -1.0, -1.0, -1.0, -1.0, -1.0,

      // Top face
      -1.0, 1.0, -1.0, -1.0, 1.0, 1.0, 1.0, 1.0, 1.0,

      1.0, 1.0, 1.0, 1.0, 1.0, -1.0, -1.0, 1.0, -1.0,

      // Bottom face
      -1.0, -1.0, -1.0, 1.0, -1.0, -1.0, 1.0, -1.0, 1.0,

      1.0, -1.0, 1.0, -1.0, -1.0, 1.0, -1.0, -1.0, -1.0,

      // Right face
      1.0, -1.0, -1.0, 1.0, 1.0, -1.0, 1.0, 1.0, 1.0,

      1.0, 1.0, 1.0, 1.0, -1.0, 1.0, 1.0, -1.0, -1.0,

      // Left face
      -1.0, -1.0, -1.0, -1.0, -1.0, 1.0, -1.0, 1.0, 1.0,

      -1.0, 1.0, 1.0, -1.0, 1.0, -1.0, -1.0, -1.0, -1.0,
    ]);

    // set the list of positions into WebGL to build the
    // shape by passing it into bufferData.
    // We tell WebGL that the data supplied is an ARRAY and
    // to handle the data as a statically drawn shape.
    this.gl.bufferData(this.gl.ARRAY_BUFFER, positions, this.gl.STATIC_DRAW);

    // Set up the colors for the vertices
    // Set up the colors for the vertices
    const faceColors = [
      [1.0, 1.0, 1.0, 1.0], // Front face: white
      [1.0, 0.0, 0.0, 1.0], // Back face: red
      [0.0, 1.0, 0.0, 1.0], // Top face: green
      [0.0, 0.0, 1.0, 1.0], // Bottom face: blue
      [1.0, 1.0, 0.0, 1.0], // Right face: yellow
      [1.0, 0.0, 1.0, 1.0], // Left face: purple
    ];

    // Convert the array of colors into a table for all the vertices.
    let colors = [];
    for (let j = 0; j < faceColors.length; ++j) {
      const c = faceColors[j];

      // Repeat each color six times for the three vertices of each triangle
      // since we're rendering two triangles for each cube face
      colors = colors.concat(c, c, c, c, c, c);
    }
    const colorBuffer = this.gl.createBuffer();
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, colorBuffer);
    this.gl.bufferData(
      this.gl.ARRAY_BUFFER,
      new Float32Array(colors),
      this.gl.STATIC_DRAW
    );

    return {
      position: positionBuffer,
      color: colorBuffer,
    };
  }

  bindVertexPosition(programInfo: any, buffers: any) {
    const bufferSize = 3;
    const type = this.gl.FLOAT;
    const normalize = false;
    const stride = 0;
    const offset = 0;
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, buffers.position);
    this.gl.vertexAttribPointer(
      programInfo.attribLocations.vertexPosition,
      bufferSize,
      type,
      normalize,
      stride,
      offset
    );
    this.gl.enableVertexAttribArray(programInfo.attribLocations.vertexPosition);
  }

  bindVertexColor(programInfo: any, buffers: any) {
    const bufferSize = 4;
    const type = this.gl.FLOAT;
    const normalize = false;
    const stride = 0;
    const offset = 0;
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, buffers.color);
    this.gl.vertexAttribPointer(
      programInfo.attribLocations.vertexColor,
      bufferSize,
      type,
      normalize,
      stride,
      offset
    );
    this.gl.enableVertexAttribArray(programInfo.attribLocations.vertexColor);
  }

  private setModelViewAsIdentity() {
    this.modelViewMatrix = matrix.mat4.create();
  }
}
