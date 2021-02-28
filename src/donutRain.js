import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';


let scene;
let camera;
let renderer;
let controls;
let donuts = [];
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

let createDonut = function() {
    let geometry = new THREE.TorusGeometry(1, 0.5, 5, 30);
    let material = new THREE.MeshBasicMaterial(
                                    {color: Math.random() * 0xffffff});
    
    let d = new THREE.Mesh( geometry, material );
    
    d.position.x = randomInRange(-15, 15);
    d.position.z = randomInRange(-15, 15);
    d.position.y = 15;
    scene.add(d);
    donuts.push(d);
};

createDonut();



const animate = function () {
    let x = Math.random();
    if(x < 0.1)
        createDonut();
    
    donuts.forEach(d => d.position.y -= ADD);


    requestAnimationFrame( animate );
    renderer.render( scene, camera );
    
};

animate();