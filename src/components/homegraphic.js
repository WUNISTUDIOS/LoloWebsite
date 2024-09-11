"use client"
import { Suspense, useRef } from "react"
import { Canvas } from "@react-three/fiber"
import { MeshReflectorMaterial, OrbitControls, PivotControls, Html, TransformControls, Float } from "@react-three/drei"
// import { Text } from "@react-three/drei"
import { MeshStandardMaterial } from "three"

export default function Homegraphic(){
    const created = ({gl})=>{
        gl.setClearColor('#ff0000',1)
    }
    return(
        <Canvas>
            <OrbitControls/>
            <directionalLight position={[1,2,4]} intensity={4.5}/>
            <ambientLight intensity={1.5}/>

            <Suspense>
                <mesh>
                    <boxGeometry />
                    <meshStandardMaterial />
                </mesh>
            </Suspense>

        </Canvas>
    )
}