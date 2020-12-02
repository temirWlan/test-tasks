<template>
  <li class="card" :data-category="card.category" :data-id="card.id">
    <div class="card__panel">
      <a
        class="card__rating item__rating"
        href="#"
        @click.prevent="onClickStar"
      >
        <img src="@/assets/img/icons/star.svg" alt="star" />
        <span class="card__rating item__rating-ratio" :data-ratio="card.rating">
          {{ card.rating }}
        </span>
      </a>
      <a class="card__cart" href="#" @click.prevent="onClickBtn">
        <img src="@/assets/img/icons/cart.svg" alt="star" />
      </a>
    </div>
    <div class="card__image-block item__image-block">
      <img
        :src="'https://frontend-test.idaproject.com' + card.photo"
        :alt="card.name"
      />
    </div>
    <div class="card__description">
      <a class="card__caption item__caption" href="#">
        {{ title }}
      </a>
      <b class="card__price item__price"> {{ card.price }} ₽</b>
    </div>
  </li>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'Card',
  props: {
    card: {
      type: Object,
      required: true,
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
  data() {
    return {
      title: this.card.name
        .split(' ')
        .map((str) => str[0].toUpperCase() + str.slice(1).toLowerCase())
        .join(' '),
      isAdded: false,
    };
  },
  computed: {
    ...mapGetters({
      items: 'cart/items',
    }),
  },
  methods: {
    onClickStar(e) {
      e.preventDefault();
    },
    onClickBtn() {
      this.isAdded = !this.isAdded;

      if (this.isAdded) {
        this.$store.dispatch('cart/addToItems', +this.card.id);
      } else {
        this.$store.dispatch('cart/removeFromItems', +this.card.id);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.card {
  min-height: 270px;
  padding: 18px 18px 16px 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
  background: #fff;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
  border-radius: 8px;

  &__panel {
    width: 88%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
  }
  &__cart {
    width: 16px;
    height: 16px;
    opacity: 0.4;
    transition: $slow;
    &:hover {
      opacity: 1;
    }
    & img {
      max-width: 100%;
      max-height: 100%;
    }
  }
  &__caption {
    &:hover {
      color: #000;
    }
  }
  &__image-block {
    max-width: 144px;
    max-height: 180px;
    & img {
      max-width: 100%;
      max-height: 100%;
    }
  }
  &__description {
    margin-top: 16px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
}

.selected .card__cart {
  opacity: 1;
}

@media (max-width: 1200px) {
  .card {
    min-height: 250px;
    &__image-block {
      max-height: 170px;
      max-width: 120px;
    }
  }
}

@media (max-width: 992px) {
  .card {
    justify-content: space-between;
    &__panel {
      position: static;
    }
    &__image-block {
      max-height: 140px;
      min-height: 120px;
      max-width: 100px;
    }
    &__cart {
      width: 20px;
      height: 20px;
    }
  }
}

@media (max-width: 768px) {
  .card {
    min-height: 230px;
  }
}

@media (max-width: 576px) {
  .card {
    min-height: 220px;
    &__panel {
      position: static;
    }
    &__image-block {
      max-height: 150px;
      max-width: 120px;
    }
  }
}

@media (max-width: 576px) {
  .card {
    &__description {
      align-items: center;
    }
  }
}
</style>
