import React from "react";
import * as THREE from "three";

const WIDTH = 600;
const HEIGHT = 400;

function ThreesQuickstart() {
    const onCanvasRefAttach = React.useCallback((containerEl: HTMLCanvasElement) => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera( 75, WIDTH / HEIGHT, 0.1, 1000 );
        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial( { color: 0x00ffff } );
        const cube = new THREE.Mesh( geometry, material );
        const renderer = new THREE.WebGLRenderer({ canvas: containerEl });

        renderer.setSize( WIDTH, HEIGHT );
        scene.add( cube );
        camera.position.z = 5;

        const animate = function () {
            requestAnimationFrame( animate );

            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;

            renderer.render( scene, camera );
        };

        animate();
    }, []);

    return (
        <div>
            <h2>Threes Quickstart</h2>
            <canvas ref={onCanvasRefAttach} />
        </div>
    );
}

export default ThreesQuickstart;