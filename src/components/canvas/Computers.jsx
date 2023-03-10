import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';

const Computers = ({ isMobile }) => {
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
        scale={ isMobile ? 1.25 : 1.75 } //How large the object is
        position={ isMobile ? [0, -9, -2.2] : [0, -9.25, -1.5]} //x,y,z coordinates
        rotation={[-0.01, -0.2, -0.1]} 
      />  
    </mesh>
  )
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  //Check if the browser is mobile and set the state
  //Adding a listener to the window resize event
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)'); //Check if the screen is mobile

    setIsMobile(mediaQuery.matches); //If the screen is mobile set the state to true

    const handleMediaQueryChange = (event) => {setIsMobile(event.matches);} //Callback function to handle media query change

    mediaQuery.addEventListener('change', handleMediaQueryChange); //Add the callback function as a listener to the media query change

    //Have to remove the listener when the component unmounts because we're in the useEffect
    return () => { mediaQuery.removeEventListener('change', handleMediaQueryChange); }
  }, [])

  return (
    <Canvas frameloop='demand' shadows camera={{ position: [20, 3, 5], fav: 25 }} gl={{ preserveDrawingBuffer: true }} >
      <Suspense fallback={<CanvasLoader  /> } >
        <OrbitControls enableZoom={false} 
          maxPolarAngle={Math.PI  / 2} /* Allows you to only rotate it around a specific angle */
          minPolarAngle={Math.PI  / 2} 
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />  
    </Canvas>
  )
}

export default ComputersCanvas