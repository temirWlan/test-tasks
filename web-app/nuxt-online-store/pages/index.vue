<template>
  <div class="wrapper">
    <Header />
    <Page />
    <Cart v-if="isVisible" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Header from '@/components/Header';
import Page from '@/components/Page';
import Cart from '@/components/Cart';
export default {
  components: {
    Header,
    Page,
    Cart,
  },
  computed: {
    ...mapGetters({
      isVisible: 'cart/visibility',
    }),
  },
};
</script>
