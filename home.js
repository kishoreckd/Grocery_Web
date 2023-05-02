let section3 = document.querySelector('.section-3')
let productsDiv = document.querySelector('.products')
let vegetableDiv = document.querySelector('.vegitablesDiv')
let fruitDiv = document.querySelector('.fruitsDiv')
let viewmoreBtn = document.querySelector('.viewmoreBtn')
let loader = document.querySelector('.fa-solid')
let dDcategory = document.querySelector('.category')
let toMoreAdd=document.querySelector('.toMore')
let basketPrice=document.querySelector('.totalPr')
let basket=document.querySelector('.basket')

window.addEventListener('DOMContentLoaded', () => {
    fetch(`http://localhost:3000/products`)
        .then(response => response.json())
        .then(data => {
            let products = data
            // console.log(products);
            for (let i = 0; i < products.length; i++) {

                // console.log(products[i].category);
                if (products[i].category == 'vegetable' && i < 4) {
                    vegitableOperation(vegetableDiv)
                    // console.log(products[i]);

                }
                else if (products[i].category == "fruits") {

                    vegitableOperation(fruitDiv)

                }

                function vegitableOperation(getDiv) {
                    let productId = products[i].id
                    let productsName = products[i].name
                    let productPrice = products[i].price
                    let productMrp = products[i].mrp
                    let productImg = products[i].images
                    let discount = products[i].discount


                    //Element creation part

                    let productInnerDiv = document.createElement('div')
                    productInnerDiv.setAttribute('class', 'productsInnerDiv')
                    // below div for show the icon 
                    let iconDiv = document.createElement('div')
                    iconDiv.setAttribute('class', 'iconsdiv')

                    let offerImg = document.createElement('img')
                    offerImg.src = 'image/Star1.svg';

                    let offPercent = document.createElement('span')
                    offPercent.innerText = discount.slice(0, 3)

                    let whisticonDiv = document.createElement('div')
                    whisticonDiv.setAttribute('class', 'heart')
                    let hearticon = document.createElement('i')
                    hearticon.setAttribute('class', 'fa-regular fa-heart')

                    // below div for show the products main image
                    let productImageDiv = document.createElement('div')
                    productImageDiv.setAttribute('class', 'productImg')
                    let productImage = document.createElement('img')
                    productImage.src = productImg

                    // below div for show the product price and discount 
                    let productRateDiv = document.createElement('div')
                    productRateDiv.setAttribute('class', 'productRate')
                    let productName = document.createElement('h3')
                    let priceDiv=document.createElement('div')
                    priceDiv.setAttribute('class','priceDiv')
                    let rateTag = document.createElement('span')
                    let discountTag = document.createElement('del')

                    //below div for the buttons
                    let btnDiv = document.createElement('div')
                    btnDiv.setAttribute('class', 'btnsection')
                    let weightBtn = document.createElement('button')
                    let addBtn = document.createElement('button')

                    let plus=document.createElement('span')
                    let itemNumber=document.createElement('span')
                    let minus=document.createElement('span')

                    let quantity = /,(.*\w+)/.exec(productsName)[1];
                    let Pname = /(.*\w+),/.exec(productsName)[1];


                    // -----------------------------------------------------------------------//
                    // assigning part
                    productName.innerText = Pname
                    rateTag.innerText = productPrice
                    discountTag.innerText = productMrp
                    weightBtn.innerText = quantity
                    addBtn.innerText = 'Add Item'


                    // -----------------------------------------------------------------------//
                    // Append the div in respenctive place part

                    getDiv.append(productInnerDiv)
                    //   productsDiv.appendChild(productInnerDiv)
                    productInnerDiv.appendChild(iconDiv)
                    iconDiv.appendChild(offerImg)
                    iconDiv.appendChild(offPercent)
                    iconDiv.appendChild(whisticonDiv)
                    whisticonDiv.append(hearticon)

                    productInnerDiv.appendChild(productImageDiv)
                    productImageDiv.append(productImage)

                    productInnerDiv.appendChild(productRateDiv)
                    productRateDiv.appendChild(productName)
                    productRateDiv.appendChild(priceDiv)
                    priceDiv.appendChild(rateTag)
                    priceDiv.append(discountTag)

                    productInnerDiv.appendChild(btnDiv)
                    btnDiv.appendChild(weightBtn)
                    btnDiv.appendChild(addBtn)
                    
                    whisticonDiv.addEventListener('click', (e) => {
                        if (hearticon.classList.contains('fa-regular')) {
                            hearticon.setAttribute('class', 'fa-solid fa-heart')
                        }
                        else {
                            hearticon.setAttribute('class', 'fa-regular fa-heart')
                        }
                    })



                    addBtn.addEventListener('click',()=>{
                        itemNumber=1
                      let addedItemPrice=addBtn.parentElement.previousSibling.lastChild.firstChild.innerText.slice(1,5)
                    //   console.log(addedItemPrice);
                      basketPrice.innerHTML=Number(basketPrice.innerHTML)+Number(addedItemPrice) 
                      if(basketPrice.innerText!==0){
                        addBtn.innerText=''
                        plus.innerHTML="+"
                        minus.innerHTML="-"
                        addBtn.append(minus,itemNumber,plus)
                        basket.classList.add('show')
                        
                      }

                    //   const separatedWeight= weight.replace(/\D/g, '')
                      
                    })    


                    plus.addEventListener('click',(e)=>{
                        addBtn.style.visibility='hidden'
                        console.log(e.target);
                        Number(itemNumber++)
                        alert()
                      })
                      minus.addEventListener('click',(e)=>{
                        console.log(e.target);
                      })
                }




            }

        })

})








