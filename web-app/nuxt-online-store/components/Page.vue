<template>
  <main class="page">
    <div class="page__wrapper">
      <div class="container">
        <div class="page__column">
          <div class="page__row">
            <h1 class="page__title">Каталог</h1>
            <SortPanel />
          </div>
          <div class="page__row">
            <TabList />
            <div class="page__grid">
              <CardList />
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import TabList from '@/components/TabList';
import CardList from '@/components/CardList';
import SortPanel from '@/components/SortPanel';
export default {
  name: 'Page',
  components: {
    TabList,
    CardList,
    SortPanel,
  },
};
</script>

<style lang="scss" src="@/assets/scss/_page.scss"></style>
