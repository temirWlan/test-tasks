<template>
  <div class="cart__box">
    <h5 class="cart__caption">Товары в корзине</h5>
    <CartItemList />
    <div class="cart__order-form">
      <h5 class="cart__caption">Оформить заказ</h5>
      <Form />
    </div>
  </div>
</template>

<script>
import CartItemList from '@/components/CartItemList';
import Form from '@/components/Form';
export default {
  name: 'CartBox',
  components: {
    CartItemList,
    Form,
  },
};
</script>
