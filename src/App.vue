<template>
<div>
  
</div>
</template>

<script>
import * as THREE from 'three';

// 方式 1: 导入整个 three.js核心库
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
export default {
  setup() {
    console.log(123);
    const loader = new GLTFLoader();
    const scene = new THREE.Scene();

    loader.load( '/static/Duck.gltf', function (  ) {}, undefined, function ( error ) {

      console.error( error );

    } );
// const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
  }
}
</script>
