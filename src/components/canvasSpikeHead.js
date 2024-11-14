"use client"
import React, { Suspense } from "react"
import { OrbitControls, ScrollControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"

import { Model } from "./spikeAnimImoprt"
import { AllSpikeAnim } from "./allSpikeAnim"

export default function SpikeImportCanvas(){

    return <>
        <div className="h-screen w-[90%] mx-auto p-4 sm:p-6 md:p-8 lg:p-10 xl:p-10">
        <Canvas
            camera={{ fov: 75, position: [-10, 45, 20]}}
            fallback={<div>Sorry no WebGL supported!</div>}   
        >
            
            {/* <color attach="background" args={['#f5efe6']} /> */}

        <OrbitControls makeDefault />

        <directionalLight position={ [ 1, 2, 5 ] } intensity={ 2 } />
        <directionalLight position={ [ 1, 2, -5 ] } intensity={ 2 } />


        <ambientLight intensity={ 2 } />

        <Suspense>
        {/* <ScrollControls damping={1} maxSpeed={0.5} pages={2} >  
            <mesh scale={20} position={[0,-1.7,0]}>
                    <Model />
            </mesh>
        </ScrollControls> */}
            <mesh scale={20} >
                <AllSpikeAnim />
                
            </mesh>
        </Suspense>

        </Canvas>
    </div>
</>


}