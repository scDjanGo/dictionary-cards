import { useState } from "react";

type ToggleFn = {
  (): void;
  (value: boolean): void;
};

const useToggle = (initialState: boolean = false): [boolean, ToggleFn] => {
  const [state, setState] = useState<boolean>(initialState);

  const toggle: ToggleFn = (value?: boolean) => {
    if (typeof value === "boolean") {
      setState(value);
    } else {
      setState((prev) => !prev);
    }
  };

  return [state, toggle];
};

export { useToggle };
