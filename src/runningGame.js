import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';


let scene,planet;
let camera;
let renderer;
let controls;
let cubeList = [];
let ADD = 0.1;
let level = 0.4;

function init(){
     scene = new THREE.Scene();
     camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

   camera.position.z = 20;
     renderer = new THREE.WebGLRenderer();
    renderer.setClearColor( 0xeb8634, 1 ); 
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
     controls = new OrbitControls(camera,renderer.domElement);  
     
}
init();


let randomInRange = function(from, to) {
    let x = Math.random() * (to - from);
    return x + from;
};

let createPlatform = function() {

  
    for(let i=0; i<=200; i++){
        let geometry = new THREE.BoxGeometry(2, 2, 2);
        let material = new THREE.MeshBasicMaterial({color: 0x8d5524});
        let cube = new THREE.Mesh(geometry,material);
        cube.position.x = randomInRange(-20,20)
        cube.position.z = randomInRange(-100,100)
        cubeList.push(cube);
        scene.add(cube);
    }
    
 
};

document.addEventListener('keydown', displayunicode);


function displayunicode(e) {
    var unicode = e.keyCode ? e.keyCode : e.charCode;
    console.log(unicode);
    if(unicode == 37){
     console.log("LEFT"); 
     camera.position.x -= level;      
    }
    else if(unicode == 39){
     camera.position.x += level;      

        console.log("right");       

    }
  }

const animate = function () {

    requestAnimationFrame( animate );
    renderer.render( scene, camera );
    camera.position.z -= ADD;
    
};
createPlatform();

animate();