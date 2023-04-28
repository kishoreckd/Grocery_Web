let section3 = document.querySelector('.section-3')
let productsDiv = document.querySelector('.products')
let vegetableDiv = document.querySelector('.vegitablesDiv')
let fruitDiv = document.querySelector('.fruitsDiv')
let viewmoreBtn = document.querySelector('.viewmoreBtn')
let loader = document.querySelector('.fa-solid')
let dDcategory=document.querySelector('.category')

let dropDown=document.querySelector('.dropDown')


window.addEventListener('DOMContentLoaded', () => {
    fetch(`http://localhost:3000/products`)
        .then(response => response.json())
        .then(data => {
            let products = data
            // console.log(products);
            for (let i = 0; i < products.length; i++) {

                // console.log(products[i].category);
                if (products[i].category == 'vegetable' && i < 4) {
                    vegitableOperation()
                    // console.log(products[i]);

                }

                // if (products[i].category == 'fruits' && i < 4) {
                    // fruitsOperation()    
                    // alert()
                    // console.log(products[i]);
                // }

                function vegitableOperation() {
                    let productId = products[i].id
                    let productsName = products[i].name
                    let productPrice = products[i].price
                    let productMrp = products[i].mrp
                    let productImg = products[i].images
                    let discount=products[i].discount


                    //Element creation part

                    let productInnerDiv = document.createElement('div')
                    productInnerDiv.setAttribute('class', 'productsInnerDiv')
                    // below div for show the icon 
                    let iconDiv = document.createElement('div')
                    iconDiv.setAttribute('class', 'iconsdiv')

                    let offerImg = document.createElement('img')
                    offerImg.src = 'image/Star1.svg';

                    let offPercent=document.createElement('span')
                    offPercent.innerText=discount.slice(0,3)

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
                    let rateTag = document.createElement('span')
                    let discountTag = document.createElement('del')

                    //below div for the buttons
                    let btnDiv = document.createElement('div')
                    btnDiv.setAttribute('class', 'btnsection')
                    let weightBtn = document.createElement('button')
                    let addBtn = document.createElement('button')

                    let res = /,(.*\w+)/.exec(productsName)[1];

                    // -----------------------------------------------------------------------//
                    // assigning part
                    productName.innerText = productsName.slice(0,12)
                    rateTag.innerText = productPrice
                    discountTag.innerText = productMrp
                    weightBtn.innerText = res
                    addBtn.innerText = 'Add Item'


                    // -----------------------------------------------------------------------//
                    // Append the div in respenctive place part

                    vegetableDiv.append(productInnerDiv)
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
                    productRateDiv.appendChild(rateTag)
                    rateTag.append(discountTag)

                    productInnerDiv.appendChild(btnDiv)
                    btnDiv.appendChild(weightBtn)
                    btnDiv.appendChild(addBtn)

                    whisticonDiv.addEventListener('click',(e)=>{
                        if(hearticon.classList.contains('fa-regular')){
                            hearticon.setAttribute('class','fa-solid fa-heart')
                        }
                        else{
                            hearticon.setAttribute('class','fa-regular fa-heart')
                        }
                    })
                }


            }
            dDcategory.addEventListener('click',()=>{

                let categoryList=[]

                for (let j = 0; j < products.length; j++) {
                     categoryList.push(products[j].category)
                }
                for (let k = 0; k < categoryList.length; k++) {

                }
            })
    
        })

})


// let input = "Kenya, Garden, PFO, Inv 2123, DG, Lot 5543, Ra";

