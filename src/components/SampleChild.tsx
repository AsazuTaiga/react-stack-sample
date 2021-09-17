import React, { useState } from "react";
import { useStack } from "./StackView";

export const SampleChild: React.VFC = () => {
  const [count, setCount] = useState(0);
  const { toNext, toPrev, toIndexAt } = useStack();
  return (
    <div>
      <div>{count}</div>

      <button type="button" onClick={() => setCount((count) => count + 1)}>
        ++
      </button>
      <button type="button" onClick={() => toNext()}>
        TO NEXT
      </button>
      <button type="button" onClick={() => toPrev()}>
        TO PREV
      </button>
      <button type="button" onClick={() => toIndexAt(0)}>
        TO INDEX AT 0
      </button>
    </div>
  );
};
