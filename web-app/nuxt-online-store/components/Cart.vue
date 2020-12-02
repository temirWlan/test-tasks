<template>
  <aside id="cart" class="cart">
    <div class="cart__container">
      <div class="cart__dialog">
        <div class="cart__content">
          <div class="cart__row">
            <h3 class="cart__title">Корзина</h3>
            <button class="cart__close close-trigger" @click="onCloseCart">
              &times;
            </button>
          </div>
          <div class="cart__column">
            <CartEmptyMessage v-if="!items.length && !isSent" />
            <CartBox v-else-if="items.length && !isSent" />
            <CartSuccessMessage v-if="isSent" />
          </div>
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import CartBox from '@/components/CartBox';
import CartEmptyMessage from '@/components/CartEmptyMessage';
import CartSuccessMessage from '@/components/CartSuccessMessage';
export default {
  name: 'Cart',
  components: {
    CartEmptyMessage,
    CartBox,
    CartSuccessMessage,
  },
  computed: {
    ...mapGetters({
      items: 'cart/items',
      isSent: 'form/isSent',
    }),
  },
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

<style lang="scss" src="@/assets/scss/_cart.scss"></style>
