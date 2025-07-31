import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CheckCircle, Star } from "lucide-react";
import Image from "next/image";
import Link from 'next/link';
import { WhatsappIcon } from "@/components/icons/whatsapp-icon";


const testimonials = [
  {
    name: "Ana Silva",
    role: "Empreendedora Digital",
    testimonial: "Este evento abriu minha mente para novas possibilidades. A energia e o conteúdo foram incríveis, saí de lá com um plano de ação claro!",
    avatar: "https://placehold.co/100x100.png",
    hint: "woman portrait"
  },
  {
    name: "Carlos Pereira",
    role: "Desenvolvedor de Software",
    testimonial: "Uma das melhores experiências de networking que já tive. Conectei-me com profissionais fantásticos e aprendi muito. Recomendo fortemente.",
    avatar: "https://placehold.co/100x100.png",
    hint: "man portrait"
  },
  {
    name: "Juliana Costa",
    role: "Gerente de Marketing",
    testimonial: "O conteúdo foi prático, direto ao ponto e extremamente relevante para os desafios atuais do mercado. Voltei para a empresa cheia de ideias.",
    avatar: "https://placehold.co/100x100.png",
    hint: "woman smiling"
  },
  {
    name: "Rafael Martins",
    role: "Consultor de Negócios",
    testimonial: "Organização impecável e palestrantes de altíssimo nível. Um evento que realmente entrega valor e transforma perspectivas.",
    avatar: "https://placehold.co/100x100.png",
    hint: "man professional"
  }
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background font-body">
      <main className="flex-1">
        <section className="w-full py-20 md:py-28 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <CheckCircle className="w-20 h-20 text-primary animate-pulse" />
              <div className="space-y-2">
                <h1 className="text-4xl font-black tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline bg-clip-text text-transparent bg-gradient-to-r from-primary to-red-400">
                  SUA VAGA ESTÁ CONFIRMADA!
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Parabéns! Você deu o primeiro passo para transformar sua carreira. Agora, um passo importante te aguarda.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-card">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-6 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">Passo Importante: Entre no Grupo VIP</h2>
                <p className="mx-auto max-w-[600px] text-muted-foreground md:text-lg">
                  Não perca nenhuma informação! No grupo exclusivo do WhatsApp, enviaremos todos os avisos, links de acesso, materiais complementares e oportunidades de networking.
                </p>
              </div>
              <Button asChild size="lg" className="font-bold text-lg py-8 px-10 shadow-[0_0_20px_theme(colors.primary)] hover:shadow-[0_0_30px_theme(colors.primary)] transition-shadow duration-300">
                <Link href="#" target="_blank">
                  <WhatsappIcon className="mr-3 h-7 w-7" />
                  ENTRAR NO GRUPO DO WHATSAPP
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24">
          <div className="container flex flex-col items-center gap-12 px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">O que dizem sobre o evento</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Veja o que os participantes das edições anteriores têm a dizer.
              </p>
            </div>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full max-w-sm sm:max-w-xl md:max-w-3xl lg:max-w-5xl"
            >
              <CarouselContent>
                {testimonials.map((item, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1 h-full">
                      <Card className="flex flex-col justify-between h-full bg-card border-border/50 hover:border-primary/50 transition-colors duration-300">
                        <CardContent className="p-6 flex flex-col items-start text-left gap-4">
                           <div className="flex text-primary">
                              <Star className="fill-primary" />
                              <Star className="fill-primary" />
                              <Star className="fill-primary" />
                              <Star className="fill-primary" />
                              <Star className="fill-primary" />
                          </div>
                          <blockquote className="text-lg font-normal text-foreground">
                            "{item.testimonial}"
                          </blockquote>
                        </CardContent>
                        <CardHeader className="p-6 pt-0 flex flex-row items-center gap-4">
                          <Avatar>
                            <AvatarImage src={item.avatar} data-ai-hint={item.hint} alt={item.name} />
                            <AvatarFallback>{item.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div className="grid gap-0.5 text-left">
                            <p className="text-sm font-semibold text-foreground">{item.name}</p>
                            <p className="text-xs text-muted-foreground">{item.role}</p>
                          </div>
                        </CardHeader>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden sm:flex" />
              <CarouselNext className="hidden sm:flex" />
            </Carousel>
          </div>
        </section>
      </main>

      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center justify-center px-4 md:px-6 border-t border-border">
        <p className="text-xs text-muted-foreground">&copy; 2024 DOT. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
