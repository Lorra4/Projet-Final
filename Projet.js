const product = [
    {
        id: 0,
        image: './Images/yellow.jpeg',
        title: 'Ensemble Yellow Summer',
        prix: 18000,
    },
    {
        id: 1,
        image: './Images/skyblue.jpeg',
        title: 'Sac Marrin Touch',
        prix: 9500,
    },
    {
        id: 2,
        image: './Images/rainbow.jpeg',
        title: 'Ensemble Pink Summer',
        prix: 8000,
    },
    {
        id: 3,
        image: './Images/rouge.jpeg',
        title: 'Sac Glamour',
        prix: 12000,
    },
    {
        id: 4,
        image: './Images/Pullmarron.jpeg',
        title: 'Pull Marron Crochet',
        prix: 20000,
    },
    {
        id: 5,
        image: './Images/orangebag.jpeg',
        title: 'Sac Orange Mood',
        prix: 6000,
    },
    {
        id: 6,
        image: './Images/green.jpeg',
        title: 'Sac Upper Class',
        prix: 15000,
    },
    {
        id: 7,
        image: './Images/combi.jpeg',
        title: 'Brown Summer',
        prix: 8500,
    }




];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, prix} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>${prix} FCFA </h2>`+
        "<button onclick='addtocart("+(i++)+")'>Ajouter au panier</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Ton panier est vide";
        document.getElementById("total").innerHTML = " " +0+".00"+ "FCFA";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, prix} = items;
            total=total+prix;
            document.getElementById("total").innerHTML = " "+total+".00"+"FCFA";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>${prix}.00FCFA</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }

    
}
    
