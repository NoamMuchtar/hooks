import { FunctionComponent, useRef } from "react";
interface ColorChangeSepProps {}

const ColorChangeSep: FunctionComponent<ColorChangeSepProps> = () => {
  let PRef = useRef<HTMLParagraphElement>(null);
  let handleClick = () => {
    (PRef.current as HTMLParagraphElement).style.color = "red";
  };
  return (
    <>
      <p ref={PRef}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
        exercitationem, cumque laboriosam unde pariatur vel? Maiores, doloremque
        enim fuga reiciendis, itaque porro consequuntur non iusto officiis
        maxime, totam ducimus illo.
      </p>
      <button onClick={handleClick}>Change</button>
    </>
  );
};

export default ColorChangeSep;
