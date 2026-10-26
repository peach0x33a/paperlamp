<script setup lang="ts">
import { ExternalLink } from "lucide-vue-next"
import {
  BrowserChrome,
  BrowserChromeAction,
  BrowserChromeActions,
  BrowserChromeAddressBar,
  BrowserChromeCanvas,
  BrowserChromeHeader,
  BrowserChromeTrafficLights,
} from "@/components/ui/browser-chrome"

const doc = `<meta name="color-scheme" content="light dark"><body style="margin:0;height:100vh;display:grid;place-items:center;font:14px ui-monospace,monospace;color:#888">hello from inside the iframe</body>`
</script>

<template>
  <BrowserChrome class="w-full max-w-2xl">
    <BrowserChromeHeader>
      <BrowserChromeTrafficLights />
      <BrowserChromeAddressBar url="toybox.example/t/hello-iframe" />
      <BrowserChromeActions>
        <BrowserChromeAction as-child>
          <a href="#" aria-label="在新标签页打开">
            <ExternalLink />
          </a>
        </BrowserChromeAction>
      </BrowserChromeActions>
    </BrowserChromeHeader>
    <BrowserChromeCanvas class="h-48">
      <iframe :srcdoc="doc" title="hello-iframe" class="block size-full border-0" />
    </BrowserChromeCanvas>
  </BrowserChrome>
</template>
