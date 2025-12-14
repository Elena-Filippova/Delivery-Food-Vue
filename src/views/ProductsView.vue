<template>
  <section class="products">
    <div class="container">
      <div class="products-wrapper flex" id="goods-block">
        <div class="products-card" v-for="good in goodsArray" :key="good.id">
          <div class="products-card__image">
            <img :src="getUrl(good.image)">
          </div>
          <div class="products-card__description flex">
            <div class="products-card__description-row flex">
              <h5 class="products-card__description--name">
                {{ good.title }}
              </h5>
            </div>
            <div class="products-card__description-row flex">
              <p class="products-card__description--text">
                {{ good.description }}
              </p>
            </div>
            <div class="products-card__description-row flex">
              <div class="products-card__description-controls flex">
                <button class="btn btn-primary flex">
                  В&nbsp;корзину
                  <img src="../assets/img/shopping-cart-white.svg" alt="Shopping-cart">
                </button>
                <span class="products-card__description-controls--price">
                  {{ good.price }} ₽
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import { goodsArray } from '@/constans/goods'

  const getUrl = (name) => {
    return new URL('../aseets/img/rest/${name}', import.meta.url)
  }
</script>

<style>

</style>