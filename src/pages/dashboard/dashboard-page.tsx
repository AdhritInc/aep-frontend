import DashboardLayout from "../../components/layout/dashboard-layout";
import StatsCard from "../../components/dashboard/stats-card";

import {
  FolderKanban,
  GitBranch,
  Package,
  ShieldCheck,
} from "lucide-react";

export default function DashboardPage() {
  return (
    <DashboardLayout>

      <div className="grid grid-cols-4 gap-6">

        <StatsCard
          title="Projects"
          value="08"
          icon={FolderKanban}
          color="bg-violet-600"
        />

        <StatsCard
          title="Pipelines"
          value="04"
          icon={GitBranch}
          color="bg-cyan-500"
        />

        <StatsCard
          title="Coverage"
          value="94%"
          icon={ShieldCheck}
          color="bg-emerald-500"
        />

        <StatsCard
          title="Images"
          value="27"
          icon={Package}
          color="bg-pink-500"
        />

      </div>

      <div className="mt-8 rounded-3xl border border-slate-700/60 bg-slate-900/60 p-8 backdrop-blur-xl">

        <h2 className="mb-6 text-2xl font-semibold">
          Pipeline Activity
        </h2>

        <div className="flex h-[420px] items-center justify-center rounded-3xl border border-dashed border-slate-700">

          Charts coming in next batch

        </div>

      </div>

    </DashboardLayout>
  );
}