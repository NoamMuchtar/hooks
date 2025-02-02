import {
  FunctionComponent,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { ThemeContext, ThemeContextType } from "../context/ThemeContext";

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  const themeContext = useContext(ThemeContext) as ThemeContextType;
  const { theme } = themeContext;

  let [name, setName] = useState<string>("");
  let counter = useRef<number>(1);
  console.log(counter);

  useEffect(() => {
    counter.current = counter.current + 1;
  });

  return (
    <div className={`theme-${theme}`}>
      <p className={`text-warning t-${theme}`}>Theme: {theme}</p>
      <p>App renderd {counter.current} times</p>
      <p>{name}</p>
      <input
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
    </div>
  );
};

export default Home;
