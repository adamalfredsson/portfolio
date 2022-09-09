import type { BoxProps } from "@react-three/cannon";
import { useTexture } from "@react-three/drei";
import Cube from "../cube";

interface ImageCubeProps extends BoxProps {
  imageUrl: string;
  color: string;
}

// const githubWhiteLogoUrl = "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png";

const ImageCube = ({ imageUrl, color, ...props }: ImageCubeProps) => {
  const texture = useTexture(imageUrl);

  return (
    <Cube {...props}>
      <meshStandardMaterial color={color} map={texture} />
    </Cube>
  );
};

export default ImageCube;
