import Button from "../../components/ui/button";
import Card from "../../components/ui/card";
import Input from "../../components/ui/input";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-[#0b1120] flex items-center justify-center px-6">
      <Card>
        <div className="mb-10 text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500 text-2xl font-bold text-white shadow-lg">
            A
          </div>

          <h1 className="text-4xl font-bold text-white">
            Adhrit Engineering Platform
          </h1>

          <p className="mt-3 text-slate-400">
            Welcome back. Sign in to continue.
          </p>
        </div>

        <form className="space-y-6">
          <Input
            label="Email"
            type="email"
            placeholder="name@company.com"
          />

          <Input
            label="Password"
            type="password"
            placeholder="••••••••"
          />

          <Button type="submit">
            Sign In
          </Button>
        </form>
      </Card>
    </main>
  );
}