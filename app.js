const addBtns = document.querySelectorAll('.btn');
const lengthProduct = document.querySelector('.length')



function addProductHandler(ev) {
    ev.preventDefault();

    if (localStorage.getItem('basket') == null) {
        localStorage.setItem('basket', JSON.stringify([]))
    }


    let arr = JSON.parse(localStorage.getItem('basket'));
    let productId = this.parentElement.getAttribute('data-id')
    let existProduct = arr.find(p => p.id == productId)
    if (existProduct == undefined) {



        arr.push({
            id: productId,
            name: this.parentElement.firstElementChild.innerText,
            Price: this.nextElementSibling.firstElementChild.innerText,
            imgUrl: this.parentElement.previousElementSibling.getAttribute('src'),
            count: 1,
        });


    } else {
        existProduct.count++
    }
    localStorage.setItem('basket', JSON.stringify(arr))
    sizeProduct();
}


addBtns.forEach(addBtn => {
    addBtn.addEventListener('click', addProductHandler)
})


sizeProduct()


function sizeProduct() {

    let products = JSON.parse(localStorage.getItem('basket'))
    lengthProduct.innerText = products.length

}