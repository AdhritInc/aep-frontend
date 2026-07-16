type CardProps = {
  children: React.ReactNode;
};

export default function Card({ children }: CardProps) {
  return (
    <div
      className="
      w-full
      max-w-lg
      rounded-3xl
      border
      border-slate-700/60
      bg-slate-900/70
      backdrop-blur-xl
      p-10
      shadow-[0_20px_80px_rgba(0,0,0,.45)]
      "
    >
      {children}
    </div>
  );
}