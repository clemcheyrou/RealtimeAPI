
import { Environment, OrbitControls } from "@react-three/drei";
import { Avatar } from "../../components/Avatar";
import { Canvas } from "@react-three/fiber";

export const Testr3f = () => {

  return (
    <div style={{ height: '100vh' }}>
      <Canvas shadows camera={{ position: [20, 15, 17], fov: 65}}>
        <OrbitControls />
        <Avatar scale={1.2} />
        <Environment preset="sunset" />
      </Canvas>
    </div>
  );
};
