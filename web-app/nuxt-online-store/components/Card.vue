<template>
  <li class="page__card card" data-id="example">
    <div class="card__panel">
      <a class="card__rating item__rating" href="#">
        <img src="assets/img/icons/star.svg" alt="star" />
        <span class="card__rating item__rating-ratio" data-ratio="${rating}">${rating}</span>
      </a>
      <a class="card__cart" href="#">
        <img src="assets/img/icons/cart.svg" alt="star" />
      </a>
    </div>
    <div class="card__image-block item__image-block">
      <img src="${this.apiBase}${photo}" alt="${name}">
    </div>
    <div class="card__description">
      <a class="card__caption item__caption" href="#">
        ${title}
      </a>
      <b class="card__price item__price">
        ${price} ₽
      </b>
    </div>
  </li>
</template>

<script>
  export default {
    
  }
</script>

<style lang="sass" scoped>
  .card 
    min-height: 270px
    padding: 18px 18px 16px 16px
    display: flex
    flex-direction: column 
    align-items: center
    position: relative
    background: #fff
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05)
    border-radius: 8px
    &__panel 
      width: 88%
      display: flex 
      justify-content: space-between
      align-items: center 
      position: absolute
    &__cart 
      width: 16px 
      height: 16px 
      opacity: 0.4
      transition: $slow
      &:hover 
        opacity: 1
      & img 
        max-width: 100%
        max-height: 100%
    &__image-block 
      max-width: 144px
      max-height: 180px
      & img 
        max-width: 100%
        max-height: 100%
    &__description 
      margin-top: 16px
      display: flex 
      flex-direction: column 
      align-items: flex-start
    

  .selected .card__cart 
    opacity: 1

  @media (max-width: 1200px) 
    .card
      &__image-block  
        max-height: 160px
        max-width: 120px


  @media (max-width: 992px) 
    .card
      &__image-block  
        max-height: 140px
        max-width: 100px

      &__cart
        width: 20px
        height: 20px

  @media (max-width: 576px) 
    .card 
      min-height: 220px
      &__panel
        position: static 
      &__image-block  
        max-height: 150px
        max-width: 120px


  @media (max-width: 576px) 
    .card 
      &__description
        align-items: center 
</style>