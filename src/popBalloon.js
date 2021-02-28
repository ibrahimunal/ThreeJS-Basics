import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

let rayCast,mouse;
let scene,planet;
let camera;
let renderer;
let controls;
let balloonList = [];
var intersects = [];
let ADD = 0.1;
let level = 0.4;

function init(){
     scene = new THREE.Scene();
     camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
     mouse = new THREE.Vector2();

   camera.position.z = 20;
     renderer = new THREE.WebGLRenderer();
    renderer.setClearColor( 0xeb8634, 1 ); 
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
    //  controls = new OrbitControls(camera,renderer.domElement);  
     rayCast = new THREE.Raycaster();
     document.addEventListener("click", onMouseClick, false);

     
}


let randomInRange = function(from, to) {
    let x = Math.random() * (to - from);
    return x + from;
};

let onMouseClick = function(e) {
    mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.y = - (e.clientY / window.innerHeight) * 2 + 1;
    mouse.z = 1;
    rayCast.setFromCamera(mouse, camera);
    intersects = rayCast.intersectObjects(scene.children);
    // intersects[0].object.geometry.dispose();
    // intersects[0].object.material.dispose();
    scene.remove(intersects[0].object);
    console.log(intersects);
    
};



let createPlatform = function() {

  
    for(let i=0; i<=50; i++){
        let geometry = new THREE.SphereGeometry(4, 30, 30);
        let material = new THREE.MeshBasicMaterial({color: Math.random()*0x8d5524});
        let balloon = new THREE.Mesh(geometry,material);
        balloon.position.x = randomInRange(-50,50)
        balloon.position.y = randomInRange(-100,100)
        balloonList.push(balloon);
        scene.add(balloon);
        scene.remove(scene.children);
    }
    
 
};





const animate = function () {

    requestAnimationFrame( animate );
    renderer.render( scene, camera );
    camera.position.y -= ADD;
    
};

init();
createPlatform();
animate();

