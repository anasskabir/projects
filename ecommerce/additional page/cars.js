let cars;

async function renderCars(filter) {
    const carsWrapper = document.querySelector(".cars")
    
    if (!cars) {
      cars = await getCars()
    }

    if (filter === 'LOW_TO_HIGH') {
        cars.sort((a, b) => (a.salePrice || a.originalPrice) - (b.salePrice || b.originalPrice));
    }
    else if (filter === 'HIGH_TO_LOW'){
        cars.sort((a, b) => (b.salePrice || b.originalPrice) - (a.salePrice || a.originalPrice));
    }
    else if (filter === 'RATING') {
        cars.sort((a, b) => b.rating - a.rating);

    }

    const carsHTML = cars.map(car => {
        return `<div class="car">
        <figure class="car__img--wrapper">
            <img class="car__img" src="${car.url}" alt="">
        </figure>
        <div class="car__title">
            ${car.title}
        </div>
        <div class="car__ratings">
            ${ratingsHTML(car.rating)}
        </div>
        <div class="car__price">
            ${priceHTML(car.originalPrice, car.salePrice)}
        </div>
        </div>`
    }).join("")

    carsWrapper.innerHTML = carsHTML
    
}

function priceHTML (originalPrice, salePrice){
   if (!salePrice) {
    return `$${originalPrice.toFixed(2)}`
   }
   else {
    return `<span class="car__price--normal">$${originalPrice.toFixed(2)}</span> $${salePrice.toFixed(2)}`
   }

}

function ratingsHTML (rating) {
    let ratingHTML = ''
    for (let i =0; i < Math.floor(rating); ++i) {
        ratingHTML += '<i class="fas fa-star"></i>\n'
    }

    if (!Number.isInteger(rating)) {
        ratingHTML += '<i class="fas fa-star-half-alt"></i>\n'
    }
    return ratingHTML

}

function filterCars(event){
  renderCars(event.target.value)
}

setTimeout(() => {
  renderCars()
})

// FAKE DATA
function getCars() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve ([
        {
          id: 1,
          title: "Bentley Continental GT",
          url: "./additonal pg assets/bentley.jpeg",
          originalPrice: 49.95,
          salePrice: 14.95,
          rating: 4.5,
        },
        {
          id: 2,
          title: "Chevrolet Corvette",
          url: "./additonal pg assets/corvette.jpeg",
          originalPrice: 39,
          salePrice: null,
          rating: 5,
        },
        {
          id: 3,
          title: "Ferrari 458",
          url: "./additonal pg assets/ferrari.jpeg",
          originalPrice: 29,
          salePrice: 12,
          rating: 5,
        },
        {
          id: 4,
          title: "Honda NSX",
          url: "./additonal pg assets/honda.webp",
          originalPrice: 44,
          salePrice: 19,
          rating: 4.5,
        },
        {
          id: 5,
          title: "Lamborghini Huracan",
          url: "./additonal pg assets/lamborghini.jpeg",
          originalPrice: 32,
          salePrice: 17,
          rating: 4,
        },
        {
          id: 6,
          title: "Maserati Ghibli",
          url: "./additonal pg assets/maserati.webp",
          originalPrice: 70,
          salePrice: 12.5,
          rating: 5,
        },
        {
          id: 7,
          title: "McLaren 720s",
          url: "./additonal pg assets/mclaren.jpeg",
          originalPrice: 11,
          salePrice: 10,
          rating: 4,
        },
        {
          id: 8,
          title: "Mercedes AMG GT",
          url: "./additonal pg assets/mercedes.jpg",
          originalPrice: 38,
          salePrice: 17.95,
          rating: 4.5,
        },
        {
          id: 9,
          title: "Nissan GTR",
          url: "./additonal pg assets/nissan.jpeg",
          originalPrice: 35,
          salePrice: null,
          rating: 4,
        },
        {
          id: 10,
          title: "Porsce 911",
          url: "./additonal pg assets/porsche.jpeg",
          originalPrice: 40,
          salePrice: null,
          rating: 4,
        },
        {
          id: 11,
          title: "Tesla Model S",
          url: "./additonal pg assets/tesla.jpeg",
          originalPrice: 30,
          salePrice: null,
          rating: 4.5,
        },
      ])
    }, 1000)
  }) 
}
  