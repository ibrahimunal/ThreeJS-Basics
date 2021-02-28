import * as THREE from 'three';
import { DoubleSide } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';


let scene,planet,texture,cube;
let camera;
let renderer;
let controls;
let cubeList = [];
let ADD = 0.1;
let level = 0.4;

function init(){
     scene = new THREE.Scene();
     camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    texture = new THREE.TextureLoader().load("../src/assets/view.webp");
   camera.position.z = 20;
     renderer = new THREE.WebGLRenderer();
    renderer.setClearColor( 0xeb8634, 1 ); 
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
     controls = new OrbitControls(camera,renderer.domElement);  
     let geometry = new THREE.BoxGeometry(2, 2, 2);
    let material = new THREE.MeshBasicMaterial({map:texture});
     cube = new THREE.Mesh(geometry,material);
    camera.position.z = 4


}


function createSphere(){
    let geometry = new THREE.SphereGeometry(5, 100, 100);
    let material = new THREE.MeshBasicMaterial({map:texture,side:DoubleSide});
    const viewMesh = new THREE.Mesh(geometry,material);
    // texture.wrapS = THREE.RepeatWrapping;
    // texture.wrapT = THREE.RepeatWrapping;
    // texture.repeat.set(2,2);
    scene.add(viewMesh);
}

const animate = function () {

    requestAnimationFrame( animate );
    renderer.render( scene, camera );
    scene.rotation.y += 0.01;
    
};


init();
createSphere();
animate();