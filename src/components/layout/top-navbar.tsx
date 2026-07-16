import {
  Bell,
  Search,
} from "lucide-react";

export default function TopNavbar() {
  return (
    <header className="mb-10 flex items-center justify-between">

      <div>
        <h1 className="text-5xl font-bold text-white">
          Dashboard
        </h1>

        <p className="mt-2 text-slate-400">
          Welcome back, Prithvi 👋
        </p>
      </div>

      <div className="flex items-center gap-4">

        <div className="flex items-center gap-3 rounded-2xl bg-slate-900 px-5 py-3">

          <Search size={18} className="text-slate-400" />

          <input
            placeholder="Search..."
            className="bg-transparent text-white outline-none placeholder:text-slate-500"
          />

        </div>

        <button className="rounded-2xl bg-slate-900 p-4">
          <Bell className="text-white" size={20} />
        </button>

        <div className="flex items-center gap-3 rounded-2xl bg-slate-900 px-4 py-2">

          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 font-bold text-white">
            P
          </div>

          <div>
            <p className="font-semibold text-white">
              Prithvi
            </p>

            <p className="text-sm text-slate-400">
              Platform Engineer
            </p>
          </div>

        </div>

      </div>
    </header>
  );
}