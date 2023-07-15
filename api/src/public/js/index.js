//* Get Elements:

const galleryElement = document.getElementById("gallery");
const searchByTagName = document.getElementById('searchByTagName');
const searchByPrice = document.getElementById('searchByPrice');
const priceSelectorOptions = document.getElementById('priceSelectorOptions');
const priceSelector = document.getElementById('priceSelector');
const priceSelectorIcon = document.getElementById('priceSelectorIcon');
const paginationElement = document.getElementById('pagination');

//* Global Variables:

const pagination = { current_page: 1, per_page: 12, totalPage: 10 };

const filters = { tag_name: "", price_value: "", price_comparison: "" };

//* Requests:

const getProducts = async () => {
    const tag_name = `tag_name=${filters.tag_name}`;
    const price_value = `price_value=${filters.price_value || 0}`;
    const price_comparison = `price_comparison=${filters.price_comparison}`;
    const per_page = `per_page=${pagination.per_page}`;
    const current_page = `current_page=${pagination.current_page}`;

    axios.get(
        `http://localhost:3001/search?${tag_name}&${price_value}&${price_comparison}&${per_page}&${current_page}`
    )

        .then(function (response) {
            insertCards(response.data.products, pagination.per_page);
            pagination.totalPage = response.data.pagesTotal;
            insertPageBtn();
        })
        .catch(function (error) { console.error(error); });

};

//* Insert Dynamic Elements:

const insertCards = (products) => {
    let cardListToInsert = "";
    let notFound = "<div>Lo sentimos, no hemos podido encontrar ningún producto.</div>";
    products.forEach((product, index) => {
        if (index >= pagination.per_page) return;
        const cardHTML = `
      <div class="card">
        <div class="box">
          <img src="${product.image}" alt="">
        </div>
        <div class="box">
          <div class="wrap">
            <div class="tittle" title="${product.name}">${product.name.slice(0, 15)}...</div>
            <div class="price">${product.price.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })}</div>
          </div>
          <div class="wrap">
            <button>Seleccionar</button>
          </div>
        </div>
      </div>
    `;
        cardListToInsert += cardHTML;
    });

    if (products.length <= 0) galleryElement.innerHTML = notFound;
    else galleryElement.innerHTML = cardListToInsert;
}

const insertPageBtn = () => {
    let btnListToInsert = "";
    let btnSelectedStyle = "color: #fdfdfd; background-color: #606060;";
    for (let i = 1; i < pagination.totalPage + 1; i++) {
        // if (i === 1) continue;
        // if (pagination.totalPage === i)
        const box = `<div class="box"
            style = "${i === pagination.current_page ? btnSelectedStyle : ""}";
            onclick={togglePagination(${i})}>${i}</div>`;
        btnListToInsert += box;
    }
    paginationElement.innerHTML = btnListToInsert;
}

//* Methods:

const handleSubmit = () => {
    filters.tag_name = searchByTagName.value;
    if (searchByPrice.value) filters.price_value = searchByPrice.value;
    else { filters.price_value = 0; filters.price_comparison = ""; };
    togglePagination(1);
}

const togglePagination = (page) => {
    pagination.current_page = page;
    insertPageBtn();
    getProducts();
}

const togglePriceComparisonSelector = () => {
    if (priceSelectorOptions.style.display === 'none' || priceSelectorOptions.style.display === "") {
        priceSelectorIcon.style.transform = 'rotate(180deg)';
        priceSelectorOptions.style.display = 'block';
        priceSelectorOptions.style.animationName = 'slideDown';
    } else {
        priceSelectorIcon.style.transform = 'rotate(0)';
        priceSelectorOptions.style.animationName = 'slideUp';
        setTimeout(() => {
            priceSelectorOptions.style.display = 'none';
        }, 300);
    }
}

const selectPriceComparison = (price_comparison, comparison_name) => {

    if (price_comparison) {
        filters.price_comparison = price_comparison;
        priceSelector.textContent = comparison_name;
    }
    filters.price_value && togglePagination(1);

    togglePriceComparisonSelector();
}

//* Events:

document.addEventListener('keydown', function (event) {
    const searchByTagName = document.getElementById('searchByTagName');
    const searchByPrice = document.getElementById('searchByPrice');

    if (event.key === 'Enter' && (event.target === searchByTagName || event.target === searchByPrice)) {
        event.preventDefault();
        handleSubmit();
    }
});

//* Start:

togglePagination(1);
