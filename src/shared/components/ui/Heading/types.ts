type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

type HeadingProps = React.HTMLAttributes<HTMLElement> & {
  level?: HeadingLevel;
  asChild?: boolean;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "div" | "span";
};

export type { HeadingProps };
