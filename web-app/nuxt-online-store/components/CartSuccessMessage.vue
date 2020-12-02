<template>
  <div class="cart__box cart-success-box">
    <div class="cart__box-image-block image-block">
      <img src="@/assets/img/ok-emoji.png" alt="emoji" />
    </div>
    <div class="cart__box-description">
      <h4 class="cart__box-title">Заявка успешно отправлена</h4>
      <p class="cart__box-text">Вскоре наш менеджер свяжется с Вами</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartSuccessMessage',
};
</script>

<style lang="scss">
.cart-success-box {
  margin-top: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
