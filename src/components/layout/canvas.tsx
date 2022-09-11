import { Physics } from "@react-three/cannon";
import { Canvas as RCanvas } from "@react-three/fiber";
import Logo from "../canvas/logo";
import Menu from "../canvas/menu";
import Plane from "../canvas/plane";

const Canvas = () => {
  return (
    <RCanvas dpr={[1, 2]} shadows camera={{ position: [-5, 5, 16], fov: 25 }}>
      <ambientLight intensity={1} />
      <spotLight angle={0.8} penumbra={0.5} position={[10, 10, 5]} castShadow />

      <Physics>
        <Plane />
        <Logo position={[-1, 0, -4]} />
        <Menu position={[0, 0.05, 1]}>
          <Menu.Item position={[-2, 0, 0]} text="PROJECTS" onClick={() => {}} />
          <Menu.Item
            position={[-1, 0, 4]}
            text="CONTACT"
            rotation={[0, -1, 0]}
            onClick={() => {}}
          />
        </Menu>
      </Physics>
    </RCanvas>
  );
};

export default Canvas;
