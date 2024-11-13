import { Box, useGLTF } from '@react-three/drei';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import { useEffect, useRef } from 'react';
import { GLTFLoader } from 'three-stdlib';

// const DisplayGLTF = () => {
  
//   const headMesh = nodes.head as THREE.Mesh | undefined;
  
//   if (!headMesh || !headMesh.geometry) {
//     console.log('Head mesh or geometry is missing.');
//     return null;
//   }
  
//   return (
//     <mesh geometry={headMesh.geometry} material={materials?.head || new THREE.MeshStandardMaterial({ color: 'orange' })}>
//     </mesh>
//   );
// };

const Model = () => {
  const ai = useLoader(GLTFLoader, '/faceTestWithMorphTargets.glb');

  return <primitive object={ai.scene} scale={0.2} rotation={[0.5, Math.PI / 2 + 10, 0]}/>;
}
export const Testr3f = () => {
  const meshRef = useRef();

  return (
    <div style={{ height: '100vh' }}>
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Model/>    
      </Canvas>
    </div>
  );
};
