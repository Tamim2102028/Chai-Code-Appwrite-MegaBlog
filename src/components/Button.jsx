function Button({
  children,
  type = "button",
  bgColor = "blue",
  textColor = "white",
  className = "",
  onClick,
  ...props
}) {
  return (
    <button
      type={type}
      className={`px-4 py-2 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${bgColor}-500 bg-${bgColor}-600 hover:bg-${bgColor}-700 text-${textColor} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
