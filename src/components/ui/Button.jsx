import { Link } from "react-router-dom";
import { cn } from "../../utils/helpers";

const variants = {
  primary:
    "bg-brand-yellow text-brand-navy hover:bg-brand-yellow-dark shadow-soft hover:shadow-card",
  secondary:
    "bg-brand-navy text-white hover:bg-brand-blue shadow-soft hover:shadow-card",
  outline:
    "border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white bg-transparent",
  outlineLight:
    "border-2 border-white text-white hover:bg-white hover:text-brand-navy bg-transparent",
  ghost: "text-brand-navy hover:bg-brand-blue-50",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm md:text-base",
  lg: "px-8 py-4 text-base md:text-lg",
};

export default function Button({
  children,
  to,
  href,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  icon: Icon,
  iconPosition = "right",
  className = "",
  fullWidthMobile = false,
  ...props
}) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-lg font-semibold tracking-wide transition-all duration-300 ease-out active:scale-[0.97] whitespace-nowrap",
    variants[variant],
    sizes[size],
    fullWidthMobile && "w-full sm:w-auto",
    className
  );

  const content = (
    <>
      {Icon && iconPosition === "left" && <Icon size={18} strokeWidth={2.25} />}
      <span>{children}</span>
      {Icon && iconPosition === "right" && <Icon size={18} strokeWidth={2.25} />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} target={props.target} rel={props.rel} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} {...props}>
      {content}
    </button>
  );
}
