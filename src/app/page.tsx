import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import Link from 'next/link';
import Image from "next/image";
import { WhatsappIcon } from "@/components/icons/whatsapp-icon";
import { CountdownTimer } from "@/components/countdown-timer";


export default function Home() {
  const eventDate = new Date("2024-08-14T20:00:00-03:00");
  const eventTimestamp = eventDate.getTime();

  return (
    <div className="flex flex-col min-h-dvh bg-background font-body">
      <main className="flex-1">
        <section className="w-full py-6 md:py-8 lg:py-10">
          <div className="container px-6 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-4xl pt-8 font-black tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline bg-clip-text text-transparent bg-gradient-to-r from-primary to-red-400">
                  SUA VAGA ESTÁ QUASE CONFIRMADA!
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Parabéns! Você deu o primeiro passo para transformar sua jornada no Triathlon. Agora, dois passos importantes te aguardam:
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full pb-12 md:pb-24 pt-8">
          <div className="container px-6 md:px-6">
            <div className="flex flex-col md:grid md:grid-cols-2 gap-8 items-start">
              <div className="bg-card rounded-lg p-8 h-full flex-col items-center text-center md:order-1 order-2 hidden md:flex">
                <Mail className="w-16 h-16 text-primary mb-4" />
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline mb-2">Confirme sua inscrição no e-mail</h2>
                <p className="mx-auto max-w-[600px] text-muted-foreground md:text-lg mb-4">
                  Enviamos um e-mail com o link de acesso exclusivo para o evento. É crucial que você o localize e confirme sua presença para não perder nenhum detalhe.
                </p>
                <p className="text-xs text-muted-foreground/80">
                  PS: Caso não encontre o e-mail, procure na sua caixa de lixo eletrônico, spam ou aguarde alguns minutos e verifique novamente.
                </p>
              </div>
              <div className="bg-card rounded-lg p-8 h-full flex flex-col items-center text-center md:order-2 order-1">
                <WhatsappIcon className="w-16 h-16 text-primary mb-4" />
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline mb-2">Entre no Grupo VIP do WhatsApp</h2>
                <p className="mx-auto max-w-[600px] text-muted-foreground md:text-lg mb-6">
                  Não perca nenhuma informação! No grupo exclusivo, enviaremos todos os avisos e materiais para você decolar sua carreira.
                </p>
                <Button asChild size="lg" className="font-bold text-lg py-8 px-10 shadow-[0_0_20px_theme(colors.primary)] hover:shadow-[0_0_30px_theme(colors.primary)] transition-shadow duration-300 mt-auto">
                  <Link href="https://chat.whatsapp.com/KyIufyaRxyu90KsgpVfkC2?mode=ac_t" target="_blank">
                    <WhatsappIcon className="mr-3 h-7 w-7" />
                    ENTRAR NO GRUPO
                  </Link>
                </Button>
              </div>
              <div className="bg-card rounded-lg p-8 h-full flex flex-col items-center text-center md:order-1 order-2 md:hidden">
                <Mail className="w-16 h-16 text-primary mb-4" />
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline mb-2">Confirme sua inscrição no e-mail</h2>
                <p className="mx-auto max-w-[600px] text-muted-foreground md:text-lg mb-4">
                  Enviamos um e-mail com o link de acesso exclusivo para o evento. É crucial que você o localize e confirme sua presença para não perder nenhum detalhe.
                </p>
                <p className="text-xs text-muted-foreground/80">
                  PS: Caso não encontre o e-mail, procure na sua caixa de lixo eletrônico, spam ou aguarde alguns minutos e verifique novamente.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full pt-6 pb-12 md:pt-12 md:pb-24 bg-card">
          <div className="container flex flex-col items-center gap-4 px-6 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center">O evento começa em:</h2>
            <CountdownTimer targetTimestamp={eventTimestamp} />
          </div>
        </section>
      </main>

      <footer className="flex flex-col gap-4 py-8 w-full shrink-0 items-center justify-center px-4 md:px-6 border-t border-border text-center">
        <Image src="/Logo.png" alt="Destravando o Triathlon" width={200} height={50} className="mb-2" />
        <p className="text-xs text-muted-foreground mt-2">&copy; 2025 Destravando o Triathlon. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
