<template>
  <div id="app">
    <app-header />
    <main class="grid-container">
      <router-view />
    </main>
    <app-footer />
  </div>
</template>

<style lang="scss">
@import url("../node_modules/foundation-sites/dist/css/foundation.min.css");
</style>
<script>
  import AppHeader from './components/header/AppHeader';
  import AppFooter from "./components/footer/AppFooter";

  export default {
    components: {AppFooter, AppHeader}
  }
</script>