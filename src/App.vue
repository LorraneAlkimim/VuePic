<template>
  <div>
    <my-menu :routes="routes"></my-menu>
    <transition name="fading-page">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import { routes } from './routes';
import Menu from './components/shared/menu/Menu';

export default {
  components: {
    'my-menu': Menu
  },

  data() {
    return {
      routes
    }
  }
}
</script>

<style lang="scss" scoped>
  div {
    .fading-page-enter, .fading-page-leave-active {
        opacity: 0;
    }

    .fading-page-enter-active, .fading-page-leave-active {
        transition: opacity 0.4s;
    }
  }
</style>
