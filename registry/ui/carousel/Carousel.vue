<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import type { CarouselApi, CarouselOptions, CarouselOrientation, CarouselPlugins } from "./context"
import emblaCarouselVue from "embla-carousel-vue"
import { computed, provide, ref, watch } from "vue"
import { cn } from "@/lib/utils"
import { carouselKey } from "./context"

const props = withDefaults(defineProps<{
  opts?: CarouselOptions
  plugins?: CarouselPlugins
  orientation?: CarouselOrientation
  class?: HTMLAttributes["class"]
}>(), {
  orientation: "horizontal",
})

const [emblaRef, carouselApi] = emblaCarouselVue(
  { ...props.opts, axis: props.orientation === "vertical" ? "y" : "x" },
  props.plugins ?? [],
)

const canScrollPrev = ref(false)
const canScrollNext = ref(false)
const selectedIndex = ref(0)
const slideCount = ref(0)

function onSelect(api: CarouselApi) {
  canScrollPrev.value = api.canScrollPrev()
  canScrollNext.value = api.canScrollNext()
  selectedIndex.value = api.selectedScrollSnap()
  slideCount.value = api.scrollSnapList().length
}

watch(carouselApi, (api) => {
  if (!api)
    return
  onSelect(api)
  api.on("select", onSelect)
  api.on("reInit", onSelect)
}, { immediate: true })

function scrollPrev() {
  carouselApi.value?.scrollPrev()
}

function scrollNext() {
  carouselApi.value?.scrollNext()
}

function onKeydown(event: KeyboardEvent) {
  const target = event.target as HTMLElement | null
  if (target?.closest("input, textarea, select, [contenteditable]"))
    return
  const vertical = props.orientation === "vertical"
  if (event.key === (vertical ? "ArrowUp" : "ArrowLeft")) {
    event.preventDefault()
    scrollPrev()
  }
  else if (event.key === (vertical ? "ArrowDown" : "ArrowRight")) {
    event.preventDefault()
    scrollNext()
  }
}

provide(carouselKey, {
  carouselApi,
  setViewport: (el) => {
    emblaRef.value = (el ?? undefined) as HTMLElement | undefined
  },
  orientation: computed(() => props.orientation),
  canScrollPrev,
  canScrollNext,
  selectedIndex,
  slideCount,
  scrollPrev,
  scrollNext,
})
</script>

<template>
  <div
    data-slot="carousel"
    role="region"
    aria-roledescription="carousel"
    tabindex="0"
    :class="cn('relative outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring', props.class)"
    @keydown="onKeydown"
  >
    <slot />
  </div>
</template>
