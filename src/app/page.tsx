import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight, WalletCards } from "lucide-react";
import { cn } from "@/lib/utils";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 p-6 text-center">
      <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-primary/10 text-primary">
        <WalletCards size={48} strokeWidth={1.5} />
      </div>

      <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-zinc-900 md:text-5xl">
        FinanCerto
      </h1>

      <p className="mb-8 max-w-lg text-lg text-zinc-600">
        Seu aplicativo de gestão de gastos pessoais. Acompanhe suas receitas e
        despesas, defina metas e assuma o controle da sua vida financeira.
      </p>

      <div className="flex w-full flex-col items-center justify-center gap-4 sm:flex-row">
        <Link
          href="/login"
          className={cn(
            buttonVariants({ size: "lg" }),
            "flex w-full min-w-[200px] items-center justify-center gap-2 sm:w-auto",
          )}
        >
          Acessar Conta
          <ArrowRight className="h-5 w-5" />
        </Link>

        <Link
          href="/register"
          className={cn(
            buttonVariants({ variant: "outline", size: "lg" }),
            "flex w-full min-w-[200px] items-center justify-center sm:w-auto",
          )}
        >
          Criar Conta
        </Link>
      </div>
    </div>
  );
}
