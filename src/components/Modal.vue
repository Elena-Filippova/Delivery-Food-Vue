<template>
  <div class="cart-modal__overlay flex" :class="{open: isOpen}" @click.self="closeModal()">
    <div class="cart-modal">
      <div class="cart-modal__header flex">
        <h2 class="cart-modal__header--title">
          Корзина
        </h2>
        <span class="cart-modal__header--close" @click="closeModal()">
          <img src="../assets/img/close.svg" alt="Close">
        </span>
      </div>
      <div class="cart-modal__body">
        <div class="cart-item flex">
          <p class="cart-item__title">
            Ролл угорь стандарт
          </p>
          <div class="cart-item__controls flex">
            <div class="cart-item__controls--price">
              250 ₽
            </div>
            <button class="btn btn-outline flex">-</button>
            <div class="cart-item__controls--count">1</div>
            <button class="btn btn-outline flex">+</button>
          </div>
        </div>
        <div class="cart-item flex">
          <p class="cart-item__title">
            Ролл угорь стандарт
          </p>
          <div class="cart-item__controls flex">
            <div class="cart-item__controls--price">
              250 ₽
            </div>
            <button class="btn btn-outline flex">-</button>
            <div class="cart-item__controls--count">1</div>
            <button class="btn btn-outline flex">+</button>
          </div>
        </div>
        <div class="cart-item flex">
          <p class="cart-item__title">
            Ролл угорь стандарт
          </p>
          <div class="cart-item__controls flex">
            <div class="cart-item__controls--price">
              250 ₽
            </div>
            <button class="btn btn-outline flex">-</button>
            <div class="cart-item__controls--count">1</div>
            <button class="btn btn-outline flex">+</button>
          </div>
        </div>
        <div class="cart-item flex">
          <p class="cart-item__title">
            Ролл угорь стандарт
          </p>
          <div class="cart-item__controls flex">
            <div class="cart-item__controls--price">
              250 ₽
            </div>
            <button class="btn btn-outline flex">-</button>
            <div class="cart-item__controls--count">1</div>
            <button class="btn btn-outline flex">+</button>
          </div>
        </div>
        <div class="cart-item flex">
          <p class="cart-item__title">
            Ролл угорь стандарт
          </p>
          <div class="cart-item__controls flex">
            <div class="cart-item__controls--price">
              250 ₽
            </div>
            <button class="btn btn-outline flex">-</button>
            <div class="cart-item__controls--count">1</div>
            <button class="btn btn-outline flex">+</button>
          </div>
        </div>
      </div>
      <div class="cart-modal__footer flex">
        <div class="cart-modal__footer--price">
          1250 ₽
        </div>
        <div class="cart-modal__footer--controls flex">
          <button class="btn btn-primary flex">
            Оформить заказ
          </button>
          <button class="btn btn-outline flex" @click="closeModal()">
            Отмена
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  const { isOpen } = defineProps({ isOpen: Boolean})
  const emit = defineEmits(['toggleModal'])
  const closeModal = () => emit('toggleModal')
</script>

<style scoped>
  .cart-modal__overlay {
    display: none;
    position: fixed;
    align-items: center;
    justify-content: center;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.4);
  }

  .open {
    display: flex;
  }

  .cart-modal {
    padding: 40px 45px;
    width: 100%;
    max-width: 780px;
    border-radius: 5px;
    background-color: #ffffff;
  }

  .cart-modal__header {
    margin-bottom: 46px;
    justify-content: space-between;
    align-items: center;
  }

  .cart-modal__header--title {
    font-weight: 700;
    font-size: 36px;
    color: #000000;
  }

  .cart-modal__header--close {
    cursor: pointer;
  }

  .cart-modal__body {
    margin-bottom: 53px;
  }

  .cart-item {
    padding-bottom: 8px;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 10px;
    border-bottom: 1px solid #d9d9d9;
  }

  .cart-item:not(:last-child) {
    margin-bottom: 15px;
  }

  .cart-item__title {
    font-size: 18px;
    line-height: 178%;
    color: #000000;
  }

  .cart-item__controls {
    align-items: center;
  }

  .cart-item__controls--price {
    margin-right: 48px;
    font-weight: 700;
    font-size: 20px;
    line-height: 160%;
    color: #000000;
  }

  .cart-item__controls--count {
    margin: 0 15px;
  }

  .cart-item__controls button {
    padding: 5px 16px;
    width: 36px;
    height: 32px;
    font-size: 14px;
    line-height: 157%;
    text-align: center;
    border-radius: 2px;
    border: 1px solid #40a9ff;
    color: #40a9ff;
  }

  .cart-modal__footer {
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 10px;
  }

  .cart-modal__footer--price {
    padding: 15px 20px;
    max-width: 106px;
    font-weight: 700;
    font-size: 20px;
    border-radius: 5px;
    background-color: #262626;
    color: #fafafa;
  }

  .cart-modal__footer--controls {
    gap: 10px;
  }
</style>