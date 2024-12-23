"use client"
import React, { Suspense, useRef } from "react"
import { Loader, OrbitControls, ScrollControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { isWebGL2Available } from "@react-three/drei"
import { Model } from "./spikeAnimImoprt"
import { AllSpikeAnim } from "./allSpikeAnim"
import { useEffect, useState } from "react"
export default function SpikeImportCanvas(){
    const [webGL2Available, setWebgk2Available] = useState(false)
    useEffect(() =>{
        setWebgk2Available(isWebGL2Available())
    },[])
    // const meshRef = useRef()

    return <>
        {webGL2Available ? (
        <Canvas
            camera={{ fov: 75, position: [-3, 25, 10]}}
            fallback={<div>Sorry no WebGL supported!</div>}   
        >
            
            {/* <color attach="background" args={['#f5efe6']} /> */}

        <OrbitControls 
            makeDefault 
            autoRotate 
            autoRotateSpeed={.5}
            enableDamping
            dampingFactor={.1}
            // target={meshRef.current ? meshRef.current.position : [0,0,0]}
        />

        <directionalLight position={ [ 1, 2, 5 ] } intensity={ 2 } />
        <directionalLight position={ [ 1, 2, -5 ] } intensity={ 2 } />


        <ambientLight intensity={ 2 } />

        <Suspense>
        {/* <ScrollControls damping={1} maxSpeed={0.5} pages={2} >  
            <mesh scale={20} position={[0,-1.7,0]}>
                    <Model />
            </mesh>
        </ScrollControls> */}
            <mesh scale={20}  >
                <AllSpikeAnim />
                
            </mesh>
        </Suspense>

        </Canvas>
        ) : ( 
            <div className="justify-center align-center">
                <h1>3D functionality not supported</h1>
                <p> get off the Zuck Browser pls</p>
            </div>
        )}
        <Loader />
</>


}