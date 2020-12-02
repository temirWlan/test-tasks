<template>
  <div class="cart__description">
    <p class="cart__text">Пока что вы ничего не добавили в корзину.</p>
    <a class="cart__btn close-trigger" href="#" @click.prevent="onCloseCart">
      Перейти к выбору
    </a>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'CartEmptyMessage',
  methods: {
    ...mapActions({
      toggleCart: 'cart/setVisibility',
    }),
    onCloseCart() {
      this.toggleCart();
      document.body.style.overflow = '';
    },
  },
};
</script>
