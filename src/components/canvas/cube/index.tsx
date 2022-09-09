import { BoxProps, useBox } from "@react-three/cannon";
import { Text3D } from "@react-three/drei";
import type { PropsWithChildren } from "react";

interface CubeProps extends BoxProps, PropsWithChildren {
  text?: string;
}

const Cube = ({ children, text, ...props }: CubeProps) => {
  const [ref, api] = useBox<any>(() => ({
    mass: 1,
    ...props,
  }));

  return (
    <group
      ref={ref}
      onClick={() => {
        const x = 0.5 + (Math.random() - 0.5) * 2;
        const y = 0.5 + Math.random() * 3;
        const z = -Math.random();
        api.applyImpulse([x, y, z], [0, 0, 0]);
      }}
    >
      <mesh castShadow>
        <boxGeometry />
        {children}
      </mesh>
      {text ? (
        <Text3D
          font="/fonts/bold.json"
          position={[-0.25, -0.25, 0.25]}
          size={0.5}
          curveSegments={32}
          bevelEnabled
          bevelSize={0.04}
          bevelThickness={0.1}
          bevelSegments={8}
        >
          {text}
          <meshStandardMaterial color="hotpink" />
        </Text3D>
      ) : null}
    </group>
  );
};

export default Cube;
