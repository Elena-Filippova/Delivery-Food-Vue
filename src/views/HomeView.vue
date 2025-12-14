<template>
  <section class="banner">
    <div class="container">
      <div class="banner-item">
        <div class="banner-text">
          <h2 class="banner-title">
            Онлайн-сервис доставки еды на&nbsp;дом
          </h2>
          <p class="banner-description">
            Блюда из&nbsp;любимого ресторана привезет курьер в&nbsp;перчатках, маске и&nbsp;с&nbsp;антисептиком
          </p>              
        </div>
      </div>
    </div>
  </section>
  <section class="products">
    <div class="container">
      <div class="products-header flex">
        <h3 class="products-header--title">
          Рестораны
        </h3>
        <input type="text" class="products-header--search" placeholder="Поиск блюд и ресторанов" />
      </div>
      <div class="products-wrapper flex" id="rests-block">
        <router-link 
          class="products-card" 
          v-for="rest in restArray" 
          :key="rest.id"
          :to="`/rest?id=${rest.id}`"
        >
          <div class="products-card__image">
            <img :src="getUrl(rest.image)">
          </div>
          <div class="products-card__description flex">
            <div class="products-card__description-row flex">
              <h4 class="products-card__description--title">
                {{ rest.title }}
              </h4>
              <div class="products-card__description--badge">
                {{ rest.time }}&nbsp;мин
              </div>
            </div>
            <div class="products-card__description-row flex">
              <div class="products-card__description-info flex">
                <div class="products-card__description-info--raiting">
                  <img src="../assets/img/star.svg" alt="Star">
                  {{ rest.rating }}
                </div>
                <div class="products-card__description-info--price">
                  От {{ rest.price }} ₽
                </div>
                <div class="products-card__description-info--group">
                  {{ rest.type }}
                </div>
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
  import { restArray } from '@/constans/rests'
  
  const getUrl = (name) => {
    return new URL('../aseets/img/rest/${name}', import.meta.url)
  } 
</script>

<style>
  .banner {
    margin-bottom: 56px;
  }

  .banner-item {
    padding: 68px 70px;
    border-radius: 10px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center right;
    background-image: url('../assets/img/banner.svg');
    background-color: #fff1b8;
  }

  .banner-text {
    max-width: 540px;
  }

  .banner-title {
    margin-bottom: 16px;
    font-weight: 700;
    font-size: 39px;
    color: #302c34;
  }

  .banner-description {
    font-size: 24px;
    color: #302c34;
  }

  .products-header {
    margin-bottom: 44px;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    row-gap: 30px;
  }

  .products-header--title {
    font-weight: 700;
    font-size: 36px;
    color: #000000;
  }

  .products-header--search {
    padding: 5px 12px 5px 32px;
    min-width: 306px;
    height: 34px;
    border-radius: 2px;
    border: 1px solid #d9d9d9;
    outline: none;
    background-position: left 10px center;
    background-repeat: no-repeat;
    background-image: url('../assets/img/search.svg');
    color: #bfbfbf;
  }

  .products-header--search::placeholder {
    line-height: 150%;
    color: #bfbfbf;
  }

  .products-wrapper {
    margin-bottom: 93px;
    flex-wrap: wrap;
    column-gap: 24px;
    row-gap: 30px;
  }

  .products-card {
    width: calc((100% - 48px) / 3);
    border-radius: 7px;
    overflow: hidden;
    box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05);
    background-color: #ffffff;
  }

  .products-card__image {
    width: 100%;
  }

  .products-card__image img {
    width: 100%;
  }

  .products-card__description {
    padding: 21px 24px 35px 24px;
    flex-direction: column;
    row-gap: 10px;
  }

  .products-card__description-row {
    justify-content: space-between;
    align-items: center;
  }

  .products-card__description--title {
    font-weight: 700;
    font-size: 24px;
    line-height: 133%;
    color: #000000;
  }

  .products-card__description--badge {
    padding: 1px 8px;
    font-size: 12px;
    line-height: 167%;
    border-radius: 2px;
    background-color: #262626;
    color: #ffffff;
  }

  .products-card__description-info {
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    column-gap: 25px;
  }

  .products-card__description-info--raiting {
    font-weight: 700;
    font-size: 18px;
    line-height: 178%;
    color: #ffc107;
  }

  .products-card__description-info--price,
  .products-card__description-info--group {
    font-size: 18px;
    line-height: 178%;
    color: #8c8c8c;
  }

  .products-card__description-info--group {
    position: relative;
  }

  .products-card__description-info--group::before {
    content: '';
    position: absolute;
    display: block;
    width: 5px;
    height: 5px;
    left: -14px;
    top: 14px;
    border-radius: 50%;
    background-color: #8c8c8c;
  }

  .products-card__description {
    margin-bottom: 25px;
  }

  .products-card__description--name {
    font-size: 24px;
    line-height: 133%;
    color: #000000;
  }

  .products-card__description--text {
    font-size: 18px;
    color: #8c8c8c;
  }

  .products-card__description-controls {
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    row-gap: 10px;
    column-gap: 29px;
  }

  .products-card__description-controls--price {
    font-weight: 700;
    font-size: 20px;
    line-height: 160%;
    color: #000000;
  }

  @media (max-width: 991px) {
    .banner-item {
      background-image: none;
    }

    .banner-text {
      max-width: 100%;
    }

    .products-card {
      width: calc((100% - 24px) / 2);
    }
  }

  @media (max-width: 768px) {
    .products-card {
      width: 100%;
    }
  }
</style>