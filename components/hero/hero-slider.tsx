"use client"

import * as React from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { heroSlides } from "@/lib/constants"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useMediaQuery } from "@/hooks/use-media-query"
import { cn } from "@/lib/utils"
import type { EmblaOptionsType } from 'embla-carousel'

export function HeroSlider() {
  const isDesktop = useMediaQuery("(min-width: 768px)")
  const [api, setApi] = React.useState<any>()
  const [current, setCurrent] = React.useState(0)

  React.useEffect(() => {
    if (!api) return

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  const carouselOptions: EmblaOptionsType = {
    align: "start",
    loop: true,
    dragFree: !isDesktop,
    containScroll: "trimSnaps",
    axis: isDesktop ? "x" : "y",
  }

  return (
    <div className="relative">
      <Carousel
        setApi={setApi}
        opts={carouselOptions}
        className="w-full"
        orientation={isDesktop ? "horizontal" : "vertical"}
      >
        <CarouselContent className={cn(
          "h-[100vh]",
          isDesktop ? "" : "-mt-4 pt-4"
        )}>
          {heroSlides.map((slide, index) => (
            <CarouselItem 
              key={index} 
              className={cn(
                "h-full",
                isDesktop ? "" : "pt-4"
              )}
            >
              <div className="relative h-full">
                <Card className="relative overflow-hidden h-full bg-background">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    width={1920}
                    height={1080}
                    className="object-cover w-full h-full opacity-40 dark:opacity-20"
                    priority={index === 0}
                  />
                  <div className={cn(
                    "absolute inset-0 bg-gradient-to-r",
                    slide.accent
                  )} />
                  <div className="absolute inset-0 flex items-center justify-center text-center">
                    <div className="container mx-auto px-4">
                      <div className="max-w-4xl mx-auto space-y-8">
                        <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.1] whitespace-pre-line">
                          {slide.title}
                        </h2>
                        <p className="text-lg sm:text-xl md:text-2xl font-medium text-muted-foreground max-w-2xl mx-auto">
                          {slide.description}
                        </p>
                        <div>
                          <Button size="lg" className="group text-base">
                            {slide.buttonText}
                            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden md:block">
          <CarouselPrevious className="left-12" />
          <CarouselNext className="right-12" />
        </div>
      </Carousel>
      <div className={cn(
        "absolute left-1/2 transform -translate-x-1/2 flex gap-2",
        isDesktop ? "bottom-6" : "right-6 bottom-1/2 translate-y-1/2 flex-col"
      )}>
        {heroSlides.map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-2 h-2 rounded-full transition-all",
              current === index
                ? "bg-primary w-6"
                : "bg-primary/50 hover:bg-primary/75",
              !isDesktop && current === index && "!h-6 !w-2"
            )}
            onClick={() => api?.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  )
}