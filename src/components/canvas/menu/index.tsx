import { useParticle } from "@react-three/cannon";
import { Text3D } from "@react-three/drei";
import type { GroupProps } from "@react-three/fiber";
import { PropsWithChildren, useState } from "react";

const MenuItem = ({ text, onClick, height, ...props }: any) => {
  const [hovered, setHovered] = useState(false);
  const [ref] = useParticle<any>(() => ({
    mass: 1,
    ...props,
  }));
  return (
    <Text3D
      ref={ref}
      font="/fonts/bold.json"
      size={0.5}
      height={height ?? 0.001}
      castShadow
      curveSegments={32}
      bevelEnabled
      bevelSize={0.04}
      bevelThickness={0.1}
      bevelSegments={8}
      onClick={onClick}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
    >
      {text}
      <meshStandardMaterial color={hovered ? "orange" : "hotpink"} />
    </Text3D>
  );
};

const Menu = ({ children, ...props }: PropsWithChildren<GroupProps>) => {
  return <group {...props}>{children}</group>;
};

Menu.Item = MenuItem;

export default Menu;
