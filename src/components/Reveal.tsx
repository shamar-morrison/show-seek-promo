import type { CSSProperties, ElementType, ReactNode } from "react";
import { useInView } from "../hooks/useInView";

type RevealProps = {
  as?: ElementType;
  index?: number;
  className?: string;
  children: ReactNode;
};

export function Reveal({ as: Tag = "div", index = 0, className = "", children }: RevealProps) {
  const { ref, inView } = useInView<HTMLElement>();
  return (
    <Tag
      ref={ref}
      data-inview={inView}
      className={`reveal ${className}`}
      style={{ "--i": index } as CSSProperties}
    >
      {children}
    </Tag>
  );
}
