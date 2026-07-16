import {
  LayoutDashboard,
  FolderKanban,
  GitBranch,
  Rocket,
  Package,
  ShieldCheck,
  Settings,
} from "lucide-react";

const menu = [
  { name: "Dashboard", icon: LayoutDashboard, active: true },
  { name: "Projects", icon: FolderKanban },
  { name: "Pipelines", icon: GitBranch },
  { name: "Deployments", icon: Rocket },
  { name: "Docker", icon: Package },
  { name: "Quality", icon: ShieldCheck },
  { name: "Settings", icon: Settings },
];

export default function Sidebar() {
  return (
    <aside className="w-72 border-r border-slate-800 bg-[#101827]/80 backdrop-blur-xl">
      <div className="border-b border-slate-800 p-8">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500 text-2xl font-bold text-white">
            A
          </div>

          <div>
            <h1 className="text-xl font-bold text-white">AEP</h1>
            <p className="text-sm text-slate-400">
              Engineering Platform
            </p>
          </div>
        </div>
      </div>

      <nav className="p-6 space-y-2">
        {menu.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.name}
              className={`flex w-full items-center gap-3 rounded-2xl px-5 py-4 transition ${
                item.active
                  ? "bg-gradient-to-r from-violet-600 to-cyan-500 text-white"
                  : "text-slate-400 hover:bg-slate-800 hover:text-white"
              }`}
            >
              <Icon size={20} />
              {item.name}
            </button>
          );
        })}
      </nav>
    </aside>
  );
}