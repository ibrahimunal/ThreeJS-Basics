import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

    
let scene, camera, renderer, light1, rayCast, mouse;
let spheres = [];
let ADD = 0.01, theta = 0;
const RADIUS = 5, BASE_X = -20, BASE_Y = -20;
let firstClick = 1;


let onMouseClick = function(e) {
    mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.y = - (e.clientY / window.innerHeight) * 2 + 1;
    mouse.z = 1;
    rayCast.setFromCamera(mouse, camera);

    if(firstClick){
        createSphere(rayCast.ray.at(200));
        firstClick = 0;
        rayCast.setFromCamera(mouse, camera);

    }else{
        createCube(rayCast.ray.at(200));
        firstClick =1;

    }
    
};




let createSphere = function(pos) {
    console.log(pos);
    let material = new THREE.MeshPhongMaterial({color: 0X4a57fa, 
                                shininess: 100, side: THREE.DoubleSide});
    let geometry = new THREE.SphereGeometry(RADIUS, 30, 30);
    let sphere = new THREE.Mesh(geometry, material);
    sphere.position.set(pos.x, pos.y, pos.z);
    scene.add(sphere);
};

let createCube = function(pos) {
    console.log(pos);

    let material = new THREE.MeshPhongMaterial({color: 0X4a57fa, 
                                shininess: 100, side: THREE.DoubleSide});
    let geometry = new THREE.BoxGeometry(20, 20, 20);
    let cube = new THREE.Mesh(geometry, material);
    cube.position.set(pos.x, pos.y, pos.z);
    scene.add(cube);
};



let init = function() {
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);
    
    // create an locate the camera
 
    camera = new THREE.PerspectiveCamera(75, 
                    window.innerWidth / window.innerHeight, 
                    1, 1000);

    
    camera.position.set(0, 0, 40);

    light1 = new THREE.DirectionalLight(0xffffff, 1);
    
    scene.add(light1);
    
    rayCast = new THREE.Raycaster();
    mouse = new THREE.Vector2();
    mouse.x = mouse.y = -1;
    // create the renderer   
    renderer = new THREE.WebGLRenderer();   
    renderer.setSize(window.innerWidth, window.innerHeight);
    
    document.body.appendChild(renderer.domElement);
    document.addEventListener("click", onMouseClick, false);

};


// main animation loop - calls 50-60 times per second.
let mainLoop = function() {
    renderer.render(scene, camera);
    requestAnimationFrame(mainLoop);
};

///////////////////////////////////////////////
init();
mainLoop();


