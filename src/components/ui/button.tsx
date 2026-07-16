type ButtonProps = {
  children: React.ReactNode;
  type?: "button" | "submit";
  onClick?: () => void;
};

export default function Button({
  children,
  type = "button",
  onClick,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="
      w-full
      rounded-2xl
      bg-gradient-to-r
      from-violet-600
      via-indigo-500
      to-cyan-500
      py-4
      font-semibold
      text-white
      transition-all
      duration-300
      hover:scale-[1.02]
      hover:shadow-[0_0_40px_rgba(34,211,238,.35)]
      active:scale-95
      "
    >
      {children}
    </button>
  );
}