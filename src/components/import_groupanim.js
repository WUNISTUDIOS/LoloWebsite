"use client"
import React, { Suspense } from "react"
import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"



import { GroupAnimImport } from "./groupimportanim"

export default function GroupImport(){

    return <>
    <Canvas>

    <OrbitControls makeDefault />

    <directionalLight position={ [ 1, 2, 5 ] } intensity={ 2 } />
    <directionalLight position={ [ 1, 2, -5 ] } intensity={ 2 } />

    <ambientLight intensity={ 2 } />

    <Suspense>      
    <mesh scale={20} position={[0,-3,0]}>
        <GroupAnimImport />
    </mesh>
    </Suspense>

    </Canvas>
</>


}