<template>
  <header class="header">
    <div class="header__wrapper">
      <div class="container">
        <div class="header__row">
          <nuxt-link exact to="/" class="header__logo image-block">
            <img src="@/assets/img/logo.svg" alt="logo" />
          </nuxt-link>
          <a
            id="basket"
            class="header__basket image-block"
            href="#"
            @click.prevent="onOpenCart"
          >
            <span id="goods-count" class="header__basket-circle">
              {{ count.length }}
            </span>
            <img src="@/assets/img/icons/cart.svg" alt="basket" />
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'Header',
  computed: {
    ...mapGetters({
      count: 'cart/items',
    }),
  },
  methods: {
    ...mapActions({
      toggleCart: 'cart/setVisibility',
    }),
    onOpenCart() {
      this.toggleCart();
      document.body.style.overflow = 'hidden';
    },
  },
};
</script>

<style lang="scss" src="@/assets/scss/_header.scss" scoped></style>
