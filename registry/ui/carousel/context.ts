import type { EmblaCarouselVueType } from "embla-carousel-vue"
import type emblaCarouselVue from "embla-carousel-vue"
import type { InjectionKey, Ref } from "vue"
import { inject } from "vue"

export type CarouselApi = NonNullable<EmblaCarouselVueType[1]["value"]>
export type CarouselOrientation = "horizontal" | "vertical"
export type CarouselOptions = NonNullable<Exclude<Parameters<typeof emblaCarouselVue>[0], Ref<unknown>>>
export type CarouselPlugins = NonNullable<Exclude<Parameters<typeof emblaCarouselVue>[1], Ref<unknown>>>

export interface CarouselContext {
  /** The live Embla instance, undefined until the viewport has mounted. */
  carouselApi: Readonly<Ref<CarouselApi | undefined>>
  /** Binds the Embla viewport element; CarouselContent passes it as a function ref. */
  setViewport: (el: unknown) => void
  orientation: Readonly<Ref<CarouselOrientation>>
  canScrollPrev: Readonly<Ref<boolean>>
  canScrollNext: Readonly<Ref<boolean>>
  /** Index of the snap point in view, straight from embla's selectedScrollSnap(). */
  selectedIndex: Readonly<Ref<number>>
  /** Number of snap points, straight from embla's scrollSnapList(). */
  slideCount: Readonly<Ref<number>>
  scrollPrev: () => void
  scrollNext: () => void
}

export const carouselKey: InjectionKey<CarouselContext> = Symbol("carousel")

export function useCarousel(): CarouselContext {
  const context = inject(carouselKey)
  if (!context)
    throw new Error("useCarousel 必须在 <Carousel> 内部使用。")
  return context
}
