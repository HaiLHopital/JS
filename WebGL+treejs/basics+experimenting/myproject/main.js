import './style.css';

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({ canvas: document.querySelector('#cnvs') });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

const light = new THREE.AmbientLight(0x404040);
scene.add(light);

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(-10, -10, -10);
scene.add(pointLight);

const controls = new OrbitControls(camera, renderer.domElement);
let param = 5;
function param_geom(u, v, target) {
  u -= 0.5;
  v -= 0.5;
  u *= 100;
  v *= 100;
  //console.log(param)
  let x = u;
  let y;
  if (u !== 0 || v !== 0)
    y = (-param * Math.sin(Math.sqrt(u * u + v * v))) / Math.sqrt(u * u + v * v);
  else y = -param;
  let z = v;
  target.set(x, y, z);
}

const geometry = new THREE.ParametricGeometry(param_geom, 400, 400);
const material = new THREE.MeshStandardMaterial({ color: 0x49ef4, roughness: 0.1, metalness: 0.5 });
const wave = new THREE.Mesh(geometry, material);
scene.add(wave);
console.log(wave.geometry)

camera.position.x = -3;
camera.position.z = 30;

function animate() {
  requestAnimationFrame(animate);
  param-=0.01
  controls.update();
 // stats.update()
  renderer.render(scene, camera);
}

animate();
