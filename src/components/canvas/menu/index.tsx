import type { Triplet } from "@react-three/cannon";
import { Text3D } from "@react-three/drei";
import type { GroupProps } from "@react-three/fiber";
import { PropsWithChildren, useState } from "react";

interface MenuItemProps extends GroupProps {
  text: string;
  position?: Triplet;
  rotation?: Triplet;
  height?: number;
}

const MenuItem = ({ text, height = 0.001, ...props }: MenuItemProps) => {
  const [hovered, setHovered] = useState(false);
  const color = hovered ? "orange" : "hotpink";

  return (
    <group
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      {...props}
    >
      <Text3D
        position={[0, 0, 0]}
        font="/fonts/bold.json"
        size={0.5}
        height={height ?? 0.001}
        castShadow
        curveSegments={32}
        bevelEnabled
        bevelSize={0.04}
        bevelThickness={0.1}
        bevelSegments={8}
      >
        {text}
        <meshStandardMaterial color={color} />
      </Text3D>
    </group>
  );
};

const Menu = ({ children, ...props }: PropsWithChildren<GroupProps>) => {
  return <group {...props}>{children}</group>;
};

Menu.Item = MenuItem;

export default Menu;
