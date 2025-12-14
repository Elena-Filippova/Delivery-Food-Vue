<template>
  <footer class="footer flex">
    <div class="container">
      <div class="footer-box flex">
        <div class="footer-logo logo">
          <router-link to="/">
            <img src="../assets/img/logo.svg" alt="Logo">
          </router-link>
        </div>
        <div class="footer-nav">
          <ul class="nav-list flex">
            <li>
              <a href="#">
                Ресторанам 
              </a>
            </li>
            <li>
              <a href="#">
                Курьерам
              </a>
            </li>
            <li>
              <a href="#">
                Пресс-центр
              </a> 
            </li>
            <li>
              <a href="#">
                Контакты
              </a> 
            </li>
          </ul>
        </div>
        <div class="footer-social flex">
          <ul class="social-list flex">
            <li>
              <a href="https://www.instagram.com/" target="_blank">
                <img src="../assets/img/instagram.svg" alt="Instagram">
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/" target="_blank">
                <img src="../assets/img/facebook.svg" alt="Facebook">
              </a>
            </li>
            <li>
              <a href="https://m.vk.com" target="_blank">
                <img src="../assets/img/vk.svg" alt="Vkontakte">
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style scoped>
  .footer {
    padding: 60px 0;
    align-items: center;
    min-height: 156px;
  }

  .footer-box {
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 36px;
    height: 100%;
  }

  .footer-nav {
    flex-grow: 1;
  }

  .nav-list {
    align-items: center;
    flex-wrap: wrap;
    gap: 15px;
  }

  .nav-list li a {
    font-size: 18px;
    color: #595959;
  }

  .footer-social {
    justify-content: flex-end;
  }

  .social-list {
    align-items: center;
    gap: 21px;
  }
</style>