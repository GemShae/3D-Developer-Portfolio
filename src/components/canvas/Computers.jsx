import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';

const Computers = () => {
  const computer = useGLTF('./desktop_pc/scene.gltf'); //Import the computer object

  return (
    //3D Mesh
    <mesh>
      //Adding lights to the mesh
      <hemisphereLight intensity={0.15} groundColor='black' />
      <pointLight intensity={1} /> 
      <spotLight  
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      //Primitive object
      <primitive 
        object={computer.scene} 
        scale={1.75} //How large the object is
        position={[0, -10.25, -1.5]} //x,y,z coordinates
        rotation={[-0.01, -0.2, -0.1]} 
      />  
    </mesh>
  )
}

const ComputersCanvas = () => {
  return (
    <Canvas frameloop='demand' shadows camera={{ position: [20, 3, 5], fav: 25 }} gl={{ preserveDrawingBuffer: true }} >
      <Suspense fallback={<CanvasLoader  /> } >
        <OrbitControls enableZoom={false} 
          maxPolarAngle={Math.PI  / 2} /* Allows you to only rotate it around a specific angle */
          minPolarAngle={Math.PI  / 2} 
        />
        <Computers />
      </Suspense>

      <Preload all />  
    </Canvas>
  )
}

export default Computers