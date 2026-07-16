import type { ReactNode } from "react";
import Sidebar from "./sidebar";
import TopNavbar from "./top-navbar";

type Props = {
  children: ReactNode;
};

export default function DashboardLayout({ children }: Props) {
  return (
    <main className="min-h-screen bg-[#0b1120] text-white overflow-hidden">

      <div className="fixed top-[-180px] left-[-180px] h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="fixed bottom-[-180px] right-[-180px] h-[420px] w-[420px] rounded-full bg-violet-600/10 blur-[140px]" />

      <div className="flex">

        <Sidebar />

        <section className="flex-1 p-10">

          <TopNavbar />

          {children}

        </section>

      </div>

    </main>
  );
}