<script setup lang="ts">
import type { TooltipConfigInterface } from "@unovis/ts"
import { VisTooltip } from "@unovis/vue"
import { computed } from "vue"
import { useChart } from "./context"

const props = defineProps<{
  triggers?: TooltipConfigInterface["triggers"]
  followCursor?: boolean
}>()

const { element } = useChart()
const container = computed(() => element.value)
</script>

<template>
  <VisTooltip
    :triggers="props.triggers"
    :follow-cursor="props.followCursor ?? true"
    :container="container"
  />
</template>
