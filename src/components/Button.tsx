import type React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost" | "outline-white" | "white";
  href?: string;
  external?: boolean;
}

export function Button({ variant = "primary", href, external, className = "", children, ...props }: ButtonProps) {
  const baseClass = "inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg text-[15px] font-medium transition-all duration-200";

  const variants: Record<string, string> = {
    primary: "bg-teal-deep text-white hover:bg-[#0a4537] hover:-translate-y-px shadow-sm hover:shadow",
    ghost: "border-[1.5px] border-teal-mid text-teal-deep hover:bg-teal-pale",
    "outline-white": "border-[1.5px] border-white text-white hover:bg-white/10",
    white: "bg-white text-teal-deep hover:bg-white/90 hover:-translate-y-px shadow-sm",
  };

  const classes = `${baseClass} ${variants[variant]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
        </a>
      );
    }
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
