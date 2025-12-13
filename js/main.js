const modalFunc = () => {
  const modal = document.querySelector('.cart-modal__overlay')
  const cartBtn = document.getElementById('cart-btn')

  const openModal = () => {
    modal.classList.add('open')
  }

  const closeModal = () => {
    modal.classList.remove('open')
  }

  cartBtn.addEventListener('click', () => {
    openModal()
  })

  modal.addEventListener('click', (event) => {
    if (event.target.classList.contains('cart-modal__overlay') || event.target.closest('.cart-modal__header--close')) {
      closeModal()
    }
  })
}

const restsFunc = () => {
  const container = document.getElementById('rests-block')

  const restArray = [
    {
      id: 0,
      title: 'Пицца плюс',
      time: 50,
      rating: 4.5,
      price: 900,
      type: 'Пицца',
      image: 'rest-1.webp'
    },
        {
      id: 1,
      title: 'Тануки',
      time: 50,
      rating: 4.5,
      price: 900,
      type: 'Пицца',
      image: 'rest-2.webp'
    },
        {
      id: 2,
      title: 'FoodBand',
      time: 50,
      rating: 4.5,
      price: 900,
      type: 'Пицца',
      image: 'rest-3.webp'
    },
        {
      id: 3,
      title: 'Жадина-пицца',
      time: 50,
      rating: 4.5,
      price: 900,
      type: 'Пицца',
      image: 'rest-4.webp'
    },
        {
      id: 4,
      title: 'Точка еды',
      time: 50,
      rating: 4.5,
      price: 900,
      type: 'Пицца',
      image: 'rest-5.webp'
    },
        {
      id: 5,
      title: 'PizzaBurger',
      time: 50,
      rating: 4.5,
      price: 900,
      type: 'Пицца',
      image: 'rest-6.webp'
    },
  ]

  const renderRests = (array) => {
    container.innerHTML = ''

    array.forEach((card) => {
      container.insertAdjacentHTML('beforeend', `
        <a href="./goods.html?id=${card.id}" class="products-card">
          <div class="products-card__image">
            <img src="./img/rest/${card.image}" alt="${card.title}">
          </div>
          <div class="products-card__description flex">
            <div class="products-card__description-row flex">
              <h4 class="products-card__description--title">
                ${card.title}
              </h4>
              <div class="products-card__description--badge">
                ${card.time}&nbsp;мин
              </div>
            </div>
            <div class="products-card__description-row flex">
              <div class="products-card__description-info flex">
                <div class="products-card__description-info--raiting">
                  <img src="./img/star.svg" alt="Star">
                  ${card.rating}
                </div>
                <div class="products-card__description-info--price">
                  От&nbsp;${card.price}&nbsp;₽
                </div>
                <div class="products-card__description-info--group">
                  ${card.type}
                </div>
              </div>
            </div>
          </div>
        </a>
      `)
    })
  }

  const loading = () => {
    container.innerHTML = '<p style="width: 100%; text-align: center">Загрузка...</p>'  
  }

  if (container) {
    loading()
  
    setTimeout(() => {
      renderRests(restArray)
    }, 1000)
  }
}

const goodsFunc = () => {
  const container = document.getElementById('goods-block')

  const goodsArray = [
    {
      id: 0,
      title: 'Ролл угорь стандарт',
      description: 'Рис, угорь, соус унаги, кунжут, водоросли нори.',
      price: 250,
      image: 'good-1.webp'
    },
    {
      id: 1,
      title: 'Калифорния лосось стандарт',
      description: 'Рис, лосось, авокадо, огурец, майонез, икра масаго, водоросли нори.',
      price: 395,
      image: 'good-2.webp'
    },
    {
      id: 2,
      title: 'Окинава стандарт',
      description: 'Рис, креветка отварная, сыр сливочный, лосось, огурец свежий...',
      price: 250,
      image: 'good-3.webp'
    },
    {
      id: 3,
      title: 'Цезарь маки хl',
      description: 'Рис, куриная грудка копченая, икра масаго, томат, айсберг, соус цезарь...',
      price: 250,
      image: 'good-4.webp'
    },
    {
      id: 4,
      title: 'Ясай маки стандарт 185 г',
      description: 'Рис, помидор свежий, перец болгарский, авокадо, огурец, айсберг',
      price: 250,
      image: 'good-5.webp'
    },
    {
      id: 5,
      title: 'Ролл с креветкой стандарт',
      description: 'Рис, водоросли нори, креветки отварные, сыр сливочный, огурцы',
      price: 250,
      image: 'good-6.webp'
    },
  ]

  const loading = () => {
    container.innerHTML = '<p style="width:100%;text-align:center";>Загрузка...</p>'
  }

  const goodsRender = (array) => {
    container.innerHTML = ''

    array.forEach((card) => {
      container.insertAdjacentHTML('beforeend', `
        <div class="products-card">
          <div class="products-card__image">
            <img src="./img/goods/${card.image}" alt="${card.title}">
          </div>
          <div class="products-card__description flex">
            <div class="products-card__description-row flex">
              <h5 class="products-card__description--name">
                ${card.title}
              </h5>
            </div>
            <div class="products-card__description-row flex">
              <p class="products-card__description--text">
                ${card.description}
              </p>
            </div>
            <div class="products-card__description-row flex">
              <div class="products-card__description-controls flex">
                <button class="btn btn-primary flex">
                  В&nbsp;корзину
                  <img src="./img/shopping-cart-white.svg" alt="Shopping-cart">
                </button>
                <span class="products-card__description-controls--price">
                  ${card.price} ₽
                </span>
              </div>
            </div>
          </div>
        </div>
      `)
    })
  }

  if (container) {
    loading()

    setTimeout(() => {
      goodsRender(goodsArray)
    }, 1000)
  }
}

modalFunc()
restsFunc()
goodsFunc()