import type { Triplet } from "@react-three/cannon";
import { Text3D } from "@react-three/drei";
import type { GroupProps } from "@react-three/fiber";
import { forwardRef, PropsWithChildren } from "react";
import type { Group } from "three";

export interface CubeProps extends GroupProps {
  text?: string;
  position?: Triplet;
}

const Cube = forwardRef<Group, PropsWithChildren<CubeProps>>(
  ({ children, text, ...props }, ref) => {
    return (
      <group ref={ref} {...props}>
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
  }
);

export default Cube;
