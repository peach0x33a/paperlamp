// 素墨 Quiet Ink — 示例站交互：主题三档切换、色卡实时取值、排版规格、弹窗与 Toast。

(function () {
  "use strict";

  var KEY = "quiet-ink-theme";
  var media = matchMedia("(prefers-color-scheme: dark)");

  function safeGet(key) {
    try { return localStorage.getItem(key); } catch (e) { return null; }
  }
  function safeSet(key, value) {
    try { localStorage.setItem(key, value); } catch (e) { /* 存储被禁用时静默降级 */ }
  }

  function pref() {
    var v = safeGet(KEY);
    return v === "light" || v === "dark" ? v : "auto";
  }

  function applyTheme() {
    var p = pref();
    var dark = p === "dark" || (p === "auto" && media.matches);
    document.documentElement.classList.toggle("dark", dark);
    document.querySelectorAll(".theme-switch button").forEach(function (btn) {
      var active = btn.dataset.theme === p;
      btn.classList.toggle("active", active);
      btn.setAttribute("aria-checked", String(active));
      btn.tabIndex = active ? 0 : -1;
    });
    fillSwatches();
  }

  var themeButtons = Array.prototype.slice.call(
    document.querySelectorAll(".theme-switch button")
  );
  themeButtons.forEach(function (btn, i) {
    btn.addEventListener("click", function () {
      safeSet(KEY, btn.dataset.theme);
      applyTheme();
    });
    btn.addEventListener("keydown", function (e) {
      var delta = e.key === "ArrowRight" || e.key === "ArrowDown" ? 1
        : e.key === "ArrowLeft" || e.key === "ArrowUp" ? -1 : 0;
      if (!delta) return;
      e.preventDefault();
      var next = themeButtons[(i + delta + themeButtons.length) % themeButtons.length];
      safeSet(KEY, next.dataset.theme);
      applyTheme();
      next.focus();
    });
  });
  media.addEventListener("change", function () {
    if (pref() === "auto") applyTheme();
  });

  // ---- 色卡：变量名 + 实时解析值（随主题翻转） ----

  var SWATCHES = [
    ["--bg", "应用背景"],
    ["--surface", "卡片 / 弹窗表面"],
    ["--text", "正文墨色"],
    ["--text-muted", "弱化文字"],
    ["--border", "边框 / 分割线"],
    ["--overlay", "遮罩（纸色 80%）"],
    ["--accent", "交互强调 indigo"],
    ["--accent-wash", "面板底纹"],
    ["--rating", "星级金"],
    ["--featured", "精选墨"],
    ["--warning", "警告橙"],
    ["--error", "错误红"],
  ];

  var grid = document.getElementById("swatch-grid");
  SWATCHES.forEach(function (item) {
    var el = document.createElement("div");
    el.className = "swatch";
    el.innerHTML =
      '<div class="chip-color" style="background: var(' + item[0] + ')"></div>' +
      '<div class="name">' + item[0] + "</div>" +
      '<div class="value" data-var="' + item[0] + '"></div>' +
      '<div class="value">' + item[1] + "</div>";
    grid.appendChild(el);
  });

  function fillSwatches() {
    var style = getComputedStyle(document.documentElement);
    document.querySelectorAll("[data-var]").forEach(function (el) {
      el.textContent = style.getPropertyValue(el.dataset.var).trim();
    });
  }

  // ---- 排版规格：从计算样式读取，永不与 token 脱节 ----

  document.querySelectorAll("[data-specimen]").forEach(function (el) {
    var cs = getComputedStyle(el);
    var lh = parseFloat(cs.lineHeight) / parseFloat(cs.fontSize);
    el.parentElement.querySelector(".specimen-meta").textContent =
      el.dataset.specimen + " · " + cs.fontSize + " / " + cs.fontWeight +
      " / " + (Math.round(lh * 100) / 100);
  });

  // ---- 间距刻度 ----

  var scale = document.getElementById("spacing-scale");
  ["1", "2", "3", "4", "6", "8", "12", "16"].forEach(function (n) {
    var row = document.createElement("div");
    row.className = "scale-row";
    row.innerHTML =
      '<span class="meta-label">--sp-' + n + "</span>" +
      '<div><div class="bar" style="width: var(--sp-' + n + ')"></div></div>';
    scale.appendChild(row);
  });

  // ---- 标签切换（仅按钮型 chip 可交互） ----

  document.querySelectorAll("button.tag-chip").forEach(function (chip) {
    chip.addEventListener("click", function () {
      chip.classList.toggle("active");
      chip.setAttribute("aria-pressed", String(chip.classList.contains("active")));
    });
  });

  // ---- 弹窗 ----

  var modal = document.getElementById("demo-modal");
  document.getElementById("modal-btn").addEventListener("click", function () {
    modal.showModal();
  });
  ["modal-close", "modal-cancel", "modal-ok"].forEach(function (id) {
    document.getElementById(id).addEventListener("click", function () {
      modal.close();
    });
  });
  modal.addEventListener("click", function (e) {
    if (e.target === modal) modal.close(); // 点击遮罩关闭
  });

  // ---- Toast：常驻 live region，先入树后写内容，确保读屏播报 ----

  var toastRegion = document.getElementById("toast-region");
  var toastTimer = null;

  function motionMs(varName, fallback) {
    var v = parseFloat(
      getComputedStyle(document.documentElement).getPropertyValue(varName)
    );
    return isNaN(v) ? fallback : v;
  }

  document.getElementById("toast-btn").addEventListener("click", function () {
    clearTimeout(toastTimer);
    toastRegion.innerHTML = "";

    var toast = document.createElement("div");
    toast.className = "toast";
    toastRegion.appendChild(toast);
    requestAnimationFrame(function () {
      toast.innerHTML =
        '<svg class="icon icon-sm" aria-hidden="true"><use href="#i-check"/></svg>' +
        "已复制链接（示例 Toast，停留约 2.2 秒）";
    });

    toastTimer = setTimeout(function () {
      toast.classList.add("leaving");
      setTimeout(function () { toast.remove(); }, motionMs("--motion-grid", 220));
    }, 2200);
  });

  applyTheme();
})();
