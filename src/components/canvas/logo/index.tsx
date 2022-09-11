import type { GroupProps } from "@react-three/fiber";
import { useState } from "react";
import { useTimeout } from "../../../hooks/use-timeout";
import TextCube from "../text-cube";

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
