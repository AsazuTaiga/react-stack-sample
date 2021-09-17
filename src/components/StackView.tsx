import {
  Children,
  createContext,
  ReactElement,
  useContext,
  useState,
  VFC,
} from "react";

const StackContext = createContext<{
  toNext: () => void;
  toPrev: () => void;
  toIndexAt: (i: number) => void;
}>({
  toNext: () => void 0,
  toPrev: () => void 0,
  toIndexAt: (_: number) => void 0,
});

export const StackView: VFC<{
  children: ReactElement[];
  onNext?: () => void;
  onPrev?: () => void;
}> = ({ children, onNext, onPrev }) => {
  const [index, setIndex] = useState(0);
  const length = children.length;

  const toNext = () => {
    if (length - 1 === index) {
      console.warn("StackView Warning: Out range of stack items.");
      return;
    }
    onNext?.();
    setIndex((i) => i + 1);
  };
  const toPrev = () => {
    if (0 === index) {
      console.warn("StackView Warning: Out range of stack items.");
      return;
    }
    onPrev?.();
    setIndex((i) => i - 1);
  };
  const toIndexAt = (i: number) => {
    if (0 > i || length - 1 < i) {
      console.warn("StackView Warning: Out range of stack items.");
      return;
    }
    setIndex(i);
  };

  return (
    <StackContext.Provider
      value={{
        toNext,
        toPrev,
        toIndexAt,
      }}
    >
      {Children.map(children, (child, i) => (
        <div
          style={
            i === index
              ? undefined
              : {
                  display: "none",
                }
          }
        >
          {child}
        </div>
      ))}
    </StackContext.Provider>
  );
};

export const useStack = () => useContext(StackContext);
