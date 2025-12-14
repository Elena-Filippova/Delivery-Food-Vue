<template>
  <header class="header flex">
    <div class="container">
      <div class="header-box flex">
        <div class="header-logo logo">
          <router-link to="/">
            <img src="../assets/img/logo.svg" alt="Logo">
          </router-link>
        </div>
        <div class="header-controls flex">
          <button class="btn btn-primary flex">
            <img src="../assets/img/user.svg" alt="User">
            Войти
          </button>
          <button class="btn btn-outline flex" @click="openModal()">
            <img src="../assets/img/shopping-cart.svg" alt="Shopping-cart">
            Корзина
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
  const emit = defineEmits(['toggleModal'])
  const openModal = () => emit('toggleModal')
</script>

<style>
  .header {
    align-items: center;
    min-height: 124px;
  }

  .header-box {
    justify-content: space-between;
    align-items: center;
    height: 100%;
  }

  .logo {
    max-width: 100px;
  }

  .logo a img {
    width: 100%;
  }

  .header-controls {
    justify-content: flex-end;
    align-items: center;
    gap: 8px;
  }

  .btn-primary {
    background-color: #1890ff;
    color: #ffffff;
  }

  .btn-outline {
    outline: 1px solid #d9d9d9;
    background-color: #ffffff;
    color: #595959;
  }
</style>