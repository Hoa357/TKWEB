const btni=document.getElementsByName("AddCart")
//console.log(btni)


// Lấy thông tin sản phẩm
btni.forEach(function (button, index){ 
    button.addEventListener("click",function(event){{
        //console.log(button,index)
        
        var btnItemi = event.target

        var producti =btnItemi.parentElement.parentElement
        //console.log(producti)
        var productiImg = producti.querySelector("img").src
        //console.log(productiImg)
        var productiPrice = producti.querySelector("div div b").innerText
        //console.log(productiPrice)
        var productiName = producti.querySelector("div a").innerText
        //console.log(productiName)
        addcarti(productiPrice,productiImg,productiName)
       
    }})
});


//Tạo thẻ chứa thông tin sản phẩm mới thêm vào giỏ hàng
function addcarti(productiPrice,productiImg,productiName){
    var addtri = document.createElement("tr")

    
    // Kiểm tra sản phẩm đã có trong giỏ hàng chưa
    var cartItemi = document.querySelectorAll("tbody tr")
    //console.log(cartItemii)
    
    
    for(var i=4; i<cartItemi.length; i++){
        //console.log(i)
        
        // Lấy tên của sản phẩm mới vửa thêm vào giỏ hàng
        var productiT = document.querySelector("h6")
        //console.log(productiT)
        
        if( productiT[i] == productiName){
                alert("Sản phẩm của bạn đã có trong giỏ hàng")
                return 
            }
        }   
    
    var trcontenti = '<tr><td class="product__cart__item"><div class="product__cart__item__pic"><img src="'+productiImg+'" alt="" width="70px" height="100px"></div><div class="product__cart__item__text"><h6 class="title">'+productiName+'</h6><h5>'+productiPrice+'</h5></div></td><td class="quantity__item"><div class="quantity"><div class="pro-qty-2"><input type="number" value="1" min="1" style="outline: none;"></div></div></td><td class="cart__price">'+productiPrice+'</td><td class="cart__close" style="cursor:pointer"><i class="fa fa-trash"></i></td></tr>'
    addtri.innerHTML=trcontenti
    alert("Đã thêm sản phẩm vào giỏ hàng!")
    var  cartTablei=document.querySelectorAll("tbody")[4]
    //console.log(cartTablei)
    cartTablei.append(addtri)
    carttotali()
    deletecarti() 
    
}


// Tính tổng
function carttotali(){
    var cartItemi = document.querySelectorAll("tbody tr")
    //console.log(cartItemi.length-9)
    var totali=0
    var counti=0
   
    for(var i=4; i<cartItemi.length; i++){
        //console.log(i)
        var inputvaluei=cartItemi[i].querySelector("input").value
        var productiPrice=cartItemi[i].querySelector("h5").innerHTML
        //console.log(productiPrice)
        tami=inputvaluei*productiPrice*1000
        totali = totali + tami
        tongi=totali.toLocaleString('de-DE')
        //console.log(tongi)
        counti++
    }
    var totalcarti=document.querySelector(".price_total span") 
    //console.log(totalcarti)
    totalcarti.innerHTML=totali.toLocaleString('de-DE')

    var cartCounti = document.querySelector(".header_cart-notice")
    cartCounti.innerHTML=counti
    
    inputchangei()
   //console.log(totalcart)
}


// Xoá sản phẩm

function deletecarti(){
    var cartItemi = document.querySelectorAll("tbody tr")

    //Xoá tất cả sản phẩm
    var cartXi = document.querySelector(".delete_all")
    //console.log(cartXi)
    cartXi.addEventListener("click",function(event){
        var cartXAlli=document.querySelector(".shopping__cart__table tbody ")
        //console.log(cartXAlli)
        cartXAlli.remove()
        carttotali()
    })

    //Xoá từng sản phẩm
    for(var i=0; i<cartItemi.length; i++){
        var productiX = document.querySelectorAll(".cart__close")     
        productiX[i].addEventListener("click",function(event){
            var cartDeletei = event.target
            var cartItemXi = cartDeletei.parentElement.parentElement
            cartItemXi.remove()
            carttotali()
            //console.log(cartItemX)
        })
    }
}


// Cập nhật số lượng
function inputchangei(){
    var cartItemi = document.querySelectorAll("tbody tr")
    
    for(var i=4; i<cartItemi.length; i++){
        var inputvaluei=cartItemi[i].querySelector("input")
        //console.log(inputvaluei)
        inputvaluei.addEventListener("change",function(){
            carttotali()
        })
    
    }

}

// Đóng mở giỏ hàng
const cartopen=document.querySelector(".fa-cart-plus")
const cartclose=document.querySelector(".bx-x")
//console.log(cartopen)
//console.log(cartclose)
cartopen.addEventListener("click",function(){
    document.querySelector(".shopping-cart").style.right="0"
})

cartclose.addEventListener("click",function(){
    document.querySelector(".shopping-cart").style.right="-100%"
})


// Nút thanh toán
function on() {
    document.getElementById("overlay").style.display = "block";
}



function off() {
    document.getElementById("overlay").style.display = "none";
}



                               