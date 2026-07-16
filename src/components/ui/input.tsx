type InputProps = {
  label: string;
  type?: string;
  placeholder?: string;
};

export default function Input({
  label,
  type = "text",
  placeholder,
}: InputProps) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-slate-300">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        className="
        w-full
        rounded-2xl
        border
        border-slate-700
        bg-slate-900/70
        px-5
        py-4
        text-white
        placeholder:text-slate-500
        outline-none
        transition-all
        duration-300
        focus:border-cyan-400
        focus:ring-2
        focus:ring-cyan-400/20
        "
      />
    </div>
  );
}