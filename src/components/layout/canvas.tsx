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
        <Logo />
        <Menu />
      </Physics>
    </RCanvas>
  );
};

export default Canvas;
