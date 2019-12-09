import Vue from 'vue';

// Render web components server-side
if (!process.browser) {
  // Avoid HTMLElement is not defined on server-side
  global.HTMLElement = () => {};
  // Avoid customElements is not defined on server-side
  global.customElements = { define: () => {} };
  // Require skatejs/ssr/register only on server side
  require('@skatejs/ssr/register');
}

// Vue must ignore custom components that aren't Vue Components
Vue.config.ignoredElements = [/^ion-/];
