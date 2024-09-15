"use client"

import { useMotionValue, useSpring } from 'framer-motion'
import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { MathUtils } from 'three'

export function GroupAnimImport(props) {

  const group = useRef()

  const { nodes, materials, animations } = useGLTF('/groupmodelsanim1.glb')
  const { actions } = useAnimations(animations, group)


  const motionVal = useMotionValue(0)
  const spring = useSpring(motionVal, { stiffness: 20})


  useFrame(({}) => {

      group.current?.rotateY(MathUtils.degToRad(0.2))

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
      <group name="Scene">
        <mesh
          name="SpikeHead"
          castShadow
          receiveShadow
          geometry={nodes.SpikeHead.geometry}
          material={materials.Material_0}
          position={[-0.004, 0, 0]}
        />
        <group name="Deborah" position={[0, -0.322, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <group name="geom" position={[0, 0, 0.037]}>
            <mesh
              name="mesh"
              castShadow
              receiveShadow
              geometry={nodes.mesh.geometry}
              material={materials.material}
            />
          </group>
          <group name="materials" />
        </group>
        <group name="StarHead" position={[-0.006, 0.673, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <group name="starheadgeom" position={[0, 0, 0.001]}>
            <mesh
              name="mesh001"
              castShadow
              receiveShadow
              geometry={nodes.mesh001.geometry}
              material={materials['material.002']}
              position={[0, 0, -0.016]}
            />
          </group>
          <group name="starheadmaterials" />
        </group>
        <group name="Tito" position={[0, 0.319, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <group name="titogeom">
            <mesh
              name="mesh002"
              castShadow
              receiveShadow
              geometry={nodes.mesh002.geometry}
              material={materials['material.005']}
            />
          </group>
          <group name="titomaterials" />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/groupmodelsanim1.glb')
