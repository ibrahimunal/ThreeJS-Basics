import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';


let scene,planet;
let camera;
let renderer;
let controls;
let rings = [];
let ADD = 0.1;

function init(){
     scene = new THREE.Scene();
     camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
     renderer = new THREE.WebGLRenderer();
    renderer.setClearColor( 0xeb8634, 1 ); 
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
     controls = new OrbitControls(camera,renderer.domElement);  
     camera.position.z = 5;
}

init();

let randomInRange = function(from, to) {
    let x = Math.random() * (to - from);
    return x + from;
};

let createSaturn = function() {
    let geometry = new THREE.SphereGeometry(4, 30, 30);
    let material = new THREE.MeshBasicMaterial({color: 0x8d5524});
    
    planet = new THREE.Mesh( geometry, material );
    scene.add(planet);
    
    geometry = new THREE.TorusGeometry(5.1, 0.7, 2, 50);
    material = new THREE.MeshBasicMaterial({color: 0xffe39f});
    let ring = new THREE.Mesh(geometry, material);
    rings.push(ring);
   
    
    geometry = new THREE.TorusGeometry(6.9, 0.7, 2, 50);
    material = new THREE.MeshBasicMaterial({color: 0xffad60});
    ring = new THREE.Mesh(geometry, material);
    rings.push(ring);
    
    
    geometry = new THREE.TorusGeometry(8.5, 0.7, 2, 50);
    material = new THREE.MeshBasicMaterial({color: 0xeac086});
    ring = new THREE.Mesh(geometry, material);
    rings.push(ring);
    
     
    rings.forEach(ring => {
        ring.rotation.x = 1.7;
        ring.rotation.y = 0.5;
        scene.add(ring);
    });
    
};

createSaturn();



const animate = function () {

    rings.forEach(ring => {
        ring.rotation.x += 0.01;
        // ring.rotation.y += 0.1;
    });

    requestAnimationFrame( animate );
    renderer.render( scene, camera );
    
};

animate();