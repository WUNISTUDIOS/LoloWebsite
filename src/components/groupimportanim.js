"use client"

import { useMotionValue, useSpring } from 'framer-motion'
import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { MathUtils } from 'three'

export function GroupAnimImport(props) {

  const group = useRef()
  const titospin = useRef()

  const { nodes, materials, animations } = useGLTF('/groupmodelsanim4.glb')
  const { actions } = useAnimations(animations, group)


  const motionVal = useMotionValue(0)
  const spring = useSpring(motionVal, { stiffness: 20})


  useFrame(({}) => {

      titospin.current?.rotateY(MathUtils.degToRad(0.2))

      Object.keys(actions).forEach((key)=>{
        const action = actions[key]
        if (action) {
          action.play().paused = true
          action.time = spring.get()
        }

      })
  })

  return (
    <group 
    onPointerUp={() => {motionVal.set(0)}} 
    onPointerDown={() => {motionVal.set(2)}} 
    ref={group} 
    {...props} 
    dispose={null}
    >
      <mesh
        ref={titospin}
        castShadow
        receiveShadow
        geometry={nodes.SpikeHead.geometry}
        material={materials.Material_0}
        position={[0.242, 0, 0]}
      />

      <mesh
        ref={titospin}
        castShadow
        receiveShadow
        geometry={nodes.mesh.geometry}
        material={materials.material}
        position={[-0.269, 0.174, -0.002]}
      />

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh001.geometry}
        material={materials['material.002']}
        position={[0.517, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh002.geometry}
        material={materials['material.005']}
      />
    </group>
  )
}

useGLTF.preload('/groupmodelsanim4.glb')





