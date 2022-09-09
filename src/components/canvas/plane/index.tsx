import { usePlane } from "@react-three/cannon";

const Plane = (props: any) => {
  const [ref] = usePlane<any>(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    ...props,
  }));
  return (
    <mesh receiveShadow ref={ref}>
      <planeGeometry args={[1000, 20]} />
      <meshStandardMaterial color="#aaa" />
    </mesh>
  );
};

export default Plane;
