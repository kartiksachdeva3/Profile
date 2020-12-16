import { useRef, useState, useEffect } from "react";

export default function useHover() {
  const [value, setValue] = useState(false);

  const ref = useRef(null);

  const handleMouseOver = () => setValue(true);

  useEffect(() => {
    const node = ref.current;
    if (node) {
      node.addEventListener("mouseover", handleMouseOver);

      return () => {
        node.removeEventListener("mouseover", handleMouseOver);
      };
    }
  }, []);

  return [ref, value];
}
