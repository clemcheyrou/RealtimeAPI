import React, { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

const DisplayGLTF = () => {
  const { nodes } = useGLTF('../faceTestWithMorphTargets.glb');

  useEffect(() => {
    console.log('nodes.head:', nodes.head);
  }, [nodes]);

  const headMesh = nodes.head as THREE.Mesh | undefined;

  if (!headMesh || !headMesh.geometry) {
    return null;
  }

  return (
    <mesh geometry={headMesh.geometry}>
      <meshStandardMaterial color="orange" />
    </mesh>
  );
};

export const Testr3f = () => {
  return (
    <div style={{ height: '100vh' }}>
      <Canvas>
        <ambientLight intensity={0.5} />
        <DisplayGLTF />
      </Canvas>
    </div>
  );
};
