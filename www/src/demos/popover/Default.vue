<script setup lang="ts">
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { RatingStars } from "@/components/ui/rating"
</script>

<template>
  <Popover>
    <PopoverTrigger as-child>
      <Button variant="bracket-indigo">
        评分
      </Button>
    </PopoverTrigger>
    <PopoverContent class="grid gap-3">
      <p class="title-md">评分说明</p>
      <p class="body-sm text-muted-foreground">
        星星是大家的平均分，数字保留一位小数。评分只会在工具页显示，不会公开给评论者。
      </p>
      <div class="grid gap-2">
        <RatingStars :value="4.6" />
        <RatingStars :value="3.2" />
      </div>
    </PopoverContent>
  </Popover>
</template>
