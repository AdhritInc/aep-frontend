import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

type Props = {
  title: string;
  value: string;
  icon: LucideIcon;
  color: string;
};

export default function StatsCard({
  title,
  value,
  icon: Icon,
  color,
}: Props) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        duration: 0.25,
      }}
      className="group relative overflow-hidden rounded-3xl border border-slate-700/60 bg-slate-900/60 p-6 backdrop-blur-xl"
    >
      <div
        className={`absolute inset-0 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20 ${color}`}
      />

      <div className="relative flex items-center justify-between">

        <div>

          <p className="text-slate-400">
            {title}
          </p>

          <h2 className="mt-5 text-5xl font-bold text-white">
            {value}
          </h2>

        </div>

        <div
          className={`rounded-2xl p-4 ${color}`}
        >
          <Icon size={28} className="text-white" />
        </div>

      </div>
    </motion.div>
  );
}