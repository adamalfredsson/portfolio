import { useBox } from "@react-three/cannon";
import type { GroupProps } from "@react-three/fiber";
import { useState } from "react";
import type { Group } from "three";
import { useTimeout } from "../../../hooks/use-timeout";
import Cube, { type CubeProps } from "../cube";

interface TextCubeProps extends CubeProps {
  text: string;
}

const TextCube = ({ text, position, ...props }: TextCubeProps) => {
  const [ref, api] = useBox<Group>(() => ({
    mass: 1,
    position,
  }));

  return (
    <Cube
      ref={ref}
      text={text}
      onClick={() => {
        const x = 0.5 + (Math.random() - 0.5) * 2;
        const y = 0.5 + Math.random() * 3;
        const z = -Math.random();
        api.applyImpulse([x, y, z], [0, 0, 0]);
      }}
      {...props}
    >
      <meshStandardMaterial color="orange" />
    </Cube>
  );
};

const Logo = ({ ...props }: GroupProps) => {
  const [ready, setReady] = useState(false);

  useTimeout(() => setReady(true), 1000);

  return (
    <group {...props}>
      <TextCube position={[0, 4, 0]} text="A" />
      <TextCube
        position={[0.45, 7, -0.25]}
        text="M"
        rotation={[0, 0, Math.PI / 2]}
      />
      <TextCube
        position={[-0.6, 9, 0.25]}
        text="A"
        rotation={[0, 0, Math.PI]}
      />
      {ready && (
        <TextCube
          position={[-0.4, 10, 0.25]}
          text="D"
          rotation={[0, 0, -(Math.PI / 2)]}
        />
      )}
    </group>
  );
};

export default Logo;
