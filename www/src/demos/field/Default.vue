<script setup lang="ts">
import { computed, ref } from "vue"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

const name = ref("像素灯笼")
const link = ref("http://lantern.example.dev")
const intro = ref("")
const tags = ref<string[]>(["小游戏"])

const tagOptions = ["小游戏", "工具", "音频", "视觉"]

const linkError = computed(() => {
  if (!link.value || link.value.startsWith("https://")) return undefined
  return "链接需要以 https:// 开头"
})

function toggleTag(tag: string, checked: boolean | "indeterminate") {
  const next = new Set(tags.value)
  if (checked === true) next.add(tag)
  else next.delete(tag)
  tags.value = [...next]
}
</script>

<template>
  <form class="w-full max-w-md" @submit.prevent>
    <FieldGroup>
      <FieldSet>
        <FieldLegend>提交工具</FieldLegend>
        <FieldDescription>填好基本信息，审核通过后会出现在展厅里。</FieldDescription>
        <FieldGroup>
          <Field>
            <FieldLabel for="tool-name">名称</FieldLabel>
            <Input id="tool-name" v-model="name" placeholder="给工具起个名字" />
          </Field>

          <Field :data-invalid="linkError ? 'true' : undefined">
            <FieldLabel for="tool-link">链接</FieldLabel>
            <Input
              id="tool-link"
              v-model="link"
              type="url"
              placeholder="https://"
              :aria-invalid="linkError ? true : undefined"
            />
            <FieldDescription>工具的访问地址，需要可以直接打开。</FieldDescription>
            <FieldError v-if="linkError">{{ linkError }}</FieldError>
          </Field>

          <Field>
            <FieldLabel for="tool-intro">简介</FieldLabel>
            <Textarea id="tool-intro" v-model="intro" placeholder="用两三句话说明它做了什么。" />
          </Field>
        </FieldGroup>
      </FieldSet>

      <FieldSet>
        <FieldLegend variant="label">标签</FieldLegend>
        <FieldDescription>可以多选，不选也可以。</FieldDescription>
        <div class="grid gap-3">
          <Field v-for="tag in tagOptions" :key="tag" orientation="horizontal">
            <Checkbox
              :id="`tag-${tag}`"
              :model-value="tags.includes(tag)"
              @update:model-value="(checked) => toggleTag(tag, checked)"
            />
            <FieldLabel :for="`tag-${tag}`" class="font-normal">{{ tag }}</FieldLabel>
          </Field>
        </div>
      </FieldSet>

      <Field orientation="horizontal" class="justify-end">
        <Button variant="outline" type="button">存为草稿</Button>
        <Button type="submit">提交工具</Button>
      </Field>
    </FieldGroup>
  </form>
</template>
