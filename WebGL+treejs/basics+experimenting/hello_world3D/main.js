import './style.css';
import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({ canvas: document.querySelector('#cnvs') });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshStandardMaterial({ color: 0x49ef4, roughness: 0.1, metalness: 0.5 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

const torusGeometry = new THREE.TorusGeometry(10, 3, 16, 100);
const torusMaterial = new THREE.MeshStandardMaterial({
  color: 0x49ef4,
  roughness: 0.1,
  metalness: 0.5,
});
const torus = new THREE.Mesh(torusGeometry, torusMaterial);
scene.add(torus);

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(10, 10, 10);
scene.add(pointLight);

const light = new THREE.AmbientLight(0x808080);
scene.add(light);

camera.position.x = -3;
camera.position.z = 30;

function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  cube.rotation.z += -0.01;
  renderer.render(scene, camera);
}

animate();
