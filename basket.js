let arr = JSON.parse(localStorage.getItem('basket'))
const table = document.querySelector('.table')
let i = 0;

function removeElement(ev) {
  let idBtn = this.getAttribute('data-id')

   let newArr =   arr.filter(product => product.id !== idBtn )

    localStorage.setItem('basket',JSON.stringify(newArr))

    JSON.parse(localStorage.getItem('basket'))
}

arr.forEach(product => {
    let tr = document.createElement('tr')

    let tdImg = document.createElement('td')
    let img = document.createElement('img')
    img.src = product.imgUrl
    img.style.width = '100px'
    tdImg.append(img)

    let tdName = document.createElement('td')
    tdName.innerText = product.name;

    let tdPrice = document.createElement('td')
    tdPrice.innerText = '$' + product.Price;

    let tdCount = document.createElement('td')
    tdCount.innerText = product.count;

    let subtotal = document.createElement('td')

    let closeBtn = document.createElement('i')

    closeBtn.classList.add('fa-solid', 'fa-xmark')
    closeBtn.style.position = 'absolute'
    closeBtn.style.right = '40px'
    closeBtn.style.top = '30px'
    closeBtn.style.cursor = 'pointer'
    closeBtn.setAttribute('data-id', `${product.id}`)
    closeBtn.addEventListener('click', removeElement)


    subtotal.innerText += '$' + product.Price * product.count
    subtotal.append(closeBtn)
    subtotal.style.position = 'relative'
    tr.append(tdImg, tdName, tdPrice, tdCount, subtotal)
    table.lastElementChild.append(tr)
})