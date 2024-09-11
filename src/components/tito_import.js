"use client"
import React, { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"



import Tito from "./tito"

export default function TitoImport(){

    const created = ({gl})=>{
        gl.setClearColor('#ff0000', 1)
    }
    return(
        <Canvas >
            <OrbitControls />
            <directionalLight position={ [1,2,4]} intensity={ 4.5 }/>            
            <ambientLight intensity={ 1.5}/>
      
            <Suspense>
                <mesh scale={10} position={[0,0,0]}>
                    <Tito />
                </mesh>
            </Suspense>

        </Canvas>
    )
}