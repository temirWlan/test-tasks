<template>
  <li class="cart__item" :data-category="item.category" :data-id="item.id">
    <div class="cart__item-image-block image-block">
      <img
        :src="'https://frontend-test.idaproject.com' + item.photo"
        :alt="item.name"
      />
    </div>
    <div class="cart__item-description">
      <span class="cart__item-caption item__caption">
        {{ item.name }}
      </span>
      <b class="cart__item-price item__price">{{ item.price }} ₽</b>
      <a class="cart__item-rating item__rating" href="#">
        <img src="@/assets/img/icons/star.svg" alt="star" />
        <span class="cart__rating item__rating-ratio" :data-ratio="item.rating">
          {{ item.rating }}
        </span>
      </a>
    </div>
    <a class="cart__item-btn" href="#" @click.prevent="removeFromCart">
      <img src="@/assets/img/icons/trash.svg" alt="trash" />
    </a>
  </li>
</template>

<script>
export default {
  name: 'CartItem',
  props: {
    item: {
      type: Object,
      default: () => {
        return {
          category: 1,
          id: 0,
          name: 'Рюкзак Louis Vuitton Discovery',
          photo: '/upload/product/businessBag17-5dc4.486zln.jpg',
          price: 70000,
          rating: 5,
        };
      },
    },
  },
  methods: {
    removeFromCart() {
      this.$store.dispatch('cart/removeFromItems', +this.item.id);
    },
  },
};
</script>
