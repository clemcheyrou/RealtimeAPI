/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 public/faceTestWithMorphTargets.glb -o src/components/Avatar.jsx -r public
*/

import React, { useEffect } from 'react'
import { useFrame, useGraph } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'

export function Avatar(props) {
  const { scene } = useGLTF('/faceTestWithMorphTargets.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)

  useEffect(() => {
    //console.log(nodes.head.morphTargetDictionary);
    nodes.head.morphTargetInfluences[nodes.head.morphTargetDictionary["mouth open"]] = 1;
  }, [])

  useFrame(() => {
    if (nodes.head && nodes.head.morphTargetInfluences) {
      nodes.head.morphTargetInfluences[nodes.head.morphTargetDictionary["mouth open"]] = Math.abs(Math.sin(Date.now() * 0.005));
    }
  });


  return (
    <group {...props} dispose={null}>
      <group position={[0.016, 5.777, 0.5]} rotation={[-1.725, -0.137, 0.914]} scale={-0.408}>
        <primitive object={nodes.joint2} />
        <skinnedMesh name="head" geometry={nodes.head.geometry} material={nodes.head.material} skeleton={nodes.head.skeleton} morphTargetDictionary={nodes.head.morphTargetDictionary} morphTargetInfluences={nodes.head.morphTargetInfluences} />
      </group>
    </group>
  )
}

useGLTF.preload('/faceTestWithMorphTargets.glb')
