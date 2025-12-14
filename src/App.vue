<script setup>
  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'
  import Modal from './components/Modal.vue'
  import { ref } from 'vue' 

  const isOpen = ref(false)
</script>

<template>
  <div class="page-wrapper flex">
    <Header @toggleModal="isOpen = !isOpen" />
    <main class="main">
      <router-view></router-view>
    </main>

    <Modal :isOpen="isOpen" @toggleModal="isOpen = !isOpen" />

    <Footer />
  </div>
</template>

<style>
  * {
    box-sizing: border-box;
  }

  @font-face {
    font-family: 'Roboto';
    src: url('./assets/fonts/RobotoRegular.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Roboto';
    src: url('./assets/fonts/RobotoBold.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 16px;
    font-style: normal;
    line-height: normal;
  }

  main {
    flex-grow: 1;
    background: linear-gradient(180deg, rgba(245, 245, 245, 0) 1.04%, #f5f5f5 100%);
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  h2,
  h3,
  h4,
  h5,
  p {
    margin: 0;
  }

  .page-wrapper {
    flex-direction: column;
    min-height: 100vh;
  }

  .container {
    margin: 0 auto;
    padding: 0 15px;
    width: 100%;
    max-width: 1230px;
    height: 100%;
  }

  .flex {
    display: flex;
  }

  .btn {
    padding: 8px 16px;
    align-items: center;
    gap: 4px;
    line-height: 150%;
    text-align: center;
    border: none;
    border-radius: 2px;
    cursor: pointer;
  }
</style>
