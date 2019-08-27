<template>
  <div id="app">
    <ion-app>
      <ion-menu ref="menu" side="end">
        <ion-header>
          <ion-toolbar color="primary">
            <ion-title class="ion-text-center">Menu</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-content padding>
          <ion-list lines="none">
            <ion-item @click="router('/')" button>
              <ion-icon slot="start" name="home"></ion-icon>
              <ion-label>Início</ion-label>
            </ion-item>
            <ion-item @click="router('/sobre')" button>
              <ion-icon slot="start" name="information-circle-outline"></ion-icon>
              <ion-label>Sobre</ion-label>
            </ion-item>
            <ion-item
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/giordanna/boilerplate-nuxtjs-ionic4"
            >
              <ion-icon slot="start" name="logo-github"></ion-icon>
              <ion-label>Github</ion-label>
            </ion-item>
          </ion-list>
        </ion-content>
      </ion-menu>

      <div class="ion-page" main>
        <ion-header>
          <ion-toolbar color="primary">
            <ion-buttons>
              <ion-title class="ion-text-center">Boilerplate</ion-title>
              <ion-menu-button slot="end"></ion-menu-button>
            </ion-buttons>
          </ion-toolbar>
        </ion-header>
        <nuxt />
      </div>
    </ion-app>
    <ion-menu-controller></ion-menu-controller>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  },
  methods: {
    router(path) {
      this.$router.push(path);
      this.$refs.menu.close();
    }
  }
};
</script>