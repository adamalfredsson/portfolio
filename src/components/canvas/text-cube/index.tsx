import type { BoxProps } from "@react-three/cannon";
import Cube from "../cube";

const TextCube = ({ text, ...props }: BoxProps & { text?: string }) => {
  return (
    <Cube text={text} {...props}>
      <meshStandardMaterial color="orange" />
    </Cube>
  );
};

export default TextCube;
