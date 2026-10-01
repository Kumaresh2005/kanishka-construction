import { cn } from "../../utils/helpers";

export default function Container({ children, className = "", as: Tag = "div" }) {
  return (
    <Tag className={cn("mx-auto w-full max-w-7xl container-px", className)}>
      {children}
    </Tag>
  );
}
