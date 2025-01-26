import { FunctionComponent, useEffect, useRef, useState } from "react";

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  let [name, setName] = useState<string>("");
  let counter = useRef<number>(1);
  console.log(counter);

  useEffect(() => {
    counter.current = counter.current + 1;
  });

  return (
    <>
      <p>App renderd {counter.current} times</p>
      <p>{name}</p>
      <input
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
    </>
  );
};

export default Home;
