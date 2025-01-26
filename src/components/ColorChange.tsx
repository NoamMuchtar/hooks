import { FunctionComponent, useRef } from "react";

interface ColorChangeProps {}

const ColorChange: FunctionComponent<ColorChangeProps> = () => {
  let divRef = useRef<HTMLDivElement>(null);
  let handleColor = () => {
    (divRef.current as HTMLDivElement).style.backgroundColor = "red";
    (divRef.current as HTMLDivElement).style.color = "white";
  };

  return (
    <>
      <div ref={divRef} onClick={handleColor}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, ullam
        impedit incidunt amet ab reiciendis, dignissimos inventore rerum libero
        delectus veritatis explicabo magnam deserunt provident atque velit iusto
        architecto dolorem?
      </div>
    </>
  );
};

export default ColorChange;
