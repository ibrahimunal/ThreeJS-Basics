import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import * as cubeClass from './cubeCreator';

            const color = new THREE.Color( 0xff0000 );
            const scene = new THREE.Scene();
			const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
			const renderer = new THREE.WebGLRenderer();
            renderer.setClearColor( 0xeb8634, 1 ); 
			renderer.setSize( window.innerWidth, window.innerHeight );
			document.body.appendChild( renderer.domElement );
            const controls = new OrbitControls(camera,renderer.domElement);     
               
            
            cubeClass.createCube(scene);
			camera.position.z = 5;

			const animate = function () {
                
				requestAnimationFrame( animate );
				renderer.render( scene, camera );
                
			};

			animate();