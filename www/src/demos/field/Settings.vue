<script setup lang="ts">
import { ref } from "vue"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from "@/components/ui/field"
import { Switch } from "@/components/ui/switch"

const notify = ref(true)
const quiet = ref(false)
const showMaintenance = ref(true)
</script>

<template>
  <div class="w-full max-w-md">
    <FieldSet>
      <FieldGroup class="gap-4">
        <Field orientation="horizontal">
          <FieldContent>
            <FieldLabel for="setting-notify">
              <FieldTitle>有新评论时通知我</FieldTitle>
            </FieldLabel>
            <FieldDescription>工具下出现新评论或评分时，会在站内提醒。</FieldDescription>
          </FieldContent>
          <Switch id="setting-notify" v-model="notify" />
        </Field>
        <FieldSeparator />
        <Field orientation="horizontal">
          <FieldContent>
            <FieldLabel for="setting-quiet">
              <FieldTitle>安静模式</FieldTitle>
            </FieldLabel>
            <FieldDescription>关闭首页的入场动效，只保留文字与边框。</FieldDescription>
          </FieldContent>
          <Switch id="setting-quiet" v-model="quiet" />
        </Field>
        <FieldSeparator />
        <Field orientation="horizontal">
          <FieldContent>
            <FieldLabel for="setting-maintenance">
              <FieldTitle>显示维护中的工具</FieldTitle>
            </FieldLabel>
            <FieldDescription>维护中的工具会降低不透明度，仍然可以打开。</FieldDescription>
          </FieldContent>
          <Switch id="setting-maintenance" v-model="showMaintenance" />
        </Field>
      </FieldGroup>
    </FieldSet>
  </div>
</template>
