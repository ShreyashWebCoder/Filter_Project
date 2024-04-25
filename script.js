//Products Data
let products = [
  {
    id: 1,
    name: "Nike Air Max",
    desc: "Classic sneakers",
    size: [7, 8, 9, 10],
    color: ["black", "white"],
    price: 1200,
    strikeOut: 1499,
    discount: 80,
    rating: 4.5,
    brand: "Nike",
    imgURL:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSmFgNpYH8MDHGZMzBy6FSvOooTZVL-znuq6YBRKnUcW6X9-GsKnpVXvDWIOl5E6e2Vh8lRFtamUd8bld_BvLx9_b_jGFXI7J0ANwOh-WKGN0ztJ0_aDn1D&usqp=CAE",
  },
  {
    id: 2,
    name: "Puma RS-X",
    desc: "Retro-style sneakers",
    size: [7, 8, 9],
    color: ["black", "red"],
    price: 1000,
    strikeOut: 1299,
    discount: 70,
    rating: 4.2,
    brand: "Puma",
    imgURL:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRzpIvbsJB0QBBAYdYVs1v0gmqCZGxc30W1iua84HLPpPf-UJtnSexsswcS3nbOOXuYsKKj7YSBg01aWF_Xzi5u-jrXGLY6pybSEJBFP82wP1jYsoHSgU-_&usqp=CAE",
  },
  {
    id: 3,
    name: "Sparks Runner",
    desc: "Lightweight running shoes",
    size: [8, 9, 10],
    color: ["green", "white"],
    price: 800,
    strikeOut: 999,
    discount: 70,
    rating: 4.0,
    brand: "Sparks",
    imgURL:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQmIXBWYpGw0tH18FTjv0jaQcOW7n0axyCOovf4jSRnLcG4ijsuuXfWgau9jjAAq2m68H90NVq9YiKJo5LYmWA22PnBjaMZL1zB6ILxbPf28-MJax2aRgob0A&usqp=CAE",
  },
  {
    id: 4,
    name: "Adidas Superstar",
    desc: "Iconic streetwear shoes",
    size: [7, 8, 9, 10],
    color: ["black", "white"],
    price: 1500,
    strikeOut: 1799,
    discount: 80,
    rating: 4.7,
    brand: "Adidas",
    imgURL:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRgUD13PNUVrpDUpsp1jrTwoD78sWkEHrkQi1fcQaRH5-zzbuxfKuQYkzNR4QkRBcQZmlgQEBV8ehUfuNMqQC8-X-f_8DQSZGYIMpbWWcbhzE7aPtwIgfgJLg&usqp=CAE",
  },
  {
    id: 5,
    name: "Nike React Infinity Run",
    desc: "Premium running shoes",
    size: [7, 8, 9],
    color: ["black", "green"],
    price: 1700,
    strikeOut: 1999,
    discount: 80,
    rating: 4.6,
    brand: "Nike",
    imgURL:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRAkdBUyhus0VBs2XsS4eCdYJNqW5RNEMuQjTOUA3jGzl-TlbsuVmMnGiJioXKUITqwdb8rjsbU-OkyE8fhBx--MCw2sRKFxLPYZnihgOyrggLkH0iDB778MA&usqp=CAE",
  },
  {
    id: 6,
    name: "Puma Clyde Court",
    desc: "Basketball sneakers",
    size: [8, 9, 10],
    color: ["red", "white"],
    price: 1200,
    strikeOut: 1499,
    discount: 80,
    rating: 4.3,
    brand: "Puma",
    imgURL:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQUvewjtPZ5luz151xmloI0eSqmYmH_jRZpD_vXaIjylNHZR5QE_hCDBFK93OO-METhE5Lr5WUS0N_9PX5MydpEGs85PUgbEtdfRF9M9UUcVP1mgSFwbRlSIQ&usqp=CAE",
  },
  {
    id: 7,
    name: "Sparks Elite",
    desc: "High-performance trainers",
    size: [7, 8, 9, 10],
    color: ["black", "red"],
    price: 1400,
    strikeOut: 1699,
    discount: 80,
    rating: 4.4,
    brand: "Sparks",
    imgURL:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQK-nYOUTtqSkaAhkg5JF-sCtlojSog0jVTfdr_MSde52BvLOsvcvMsG37dGkZ3EPkeb3K9Xr5P9nNpRNMnhiN-fQMDkTjXah2BjfC2oDAcsa7G0baV26LwgQ&usqp=CAE",
  },
  {
    id: 8,
    name: "Adidas Ultra Boost",
    desc: "Comfortable running shoes",
    size: [7, 8, 9],
    color: ["green", "white"],
    price: 1600,
    strikeOut: 1899,
    discount: 80,
    rating: 4.8,
    brand: "Adidas",
    imgURL:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTNPuQvja_qU6cZJvVltuyRgxQ2eDoNtjacsO086s2wQKAg3ftUNtyKgvPwPgjlEDGy0gE4_1Q0xlHRq2J3Ti4IspNs4IC_GT6lLxCBXRs86XQRbrNYQOSAsg&usqp=CAE",
  },
  {
    id: 9,
    name: "Nike Blazer Mid '77 Vintage",
    desc: "Vintage-style sneakers",
    size: [8, 9, 10],
    color: ["red", "white"],
    price: 1300,
    strikeOut: 1599,
    discount: 80,
    rating: 4.5,
    brand: "Nike",
    imgURL:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTC8jljvuUSwzT8PxYB0qPjLr-0oph2suQp8rB7BhZETLtouX9ynt63z-KanuM2t0ZmsMX1hk4RZ0y2bct5VRdVdDJ68VD7AK6C-Wt1iXVmd6A7HFYBErsV&usqp=CAE",
  },
  {
    id: 10,
    name: "Puma Future Rider",
    desc: "Casual streetwear shoes",
    size: [7, 8, 9],
    color: ["black", "green"],
    price: 1100,
    strikeOut: 1399,
    discount: 70,
    rating: 4.1,
    brand: "Puma",
    imgURL:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcShtF7wjTXuRXlIOKyddZm7xncC3K8HFvykK6j6QAKHmT4lmZ9S8suQ13zZ1fsi-26wfXvCf8y27wnkUuRAR2X8egmd0aS_Jw5M1Kodm2Y2p6HQ66nJ2iRJ&usqp=CAE",
  },
  {
    id: 11,
    name: "Sparks Velocity",
    desc: "Versatile athletic shoes",
    size: [7, 8, 9, 10],
    color: ["black", "white"],
    price: 900,
    strikeOut: 1199,
    discount: 75,
    rating: 4.2,
    brand: "Sparks",
    imgURL:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT4gSu6uU_lafT3HWwBEIpqHGfVqc0XacZA8Zv_J0spR8k-Spry7hzEGMQCpDd9ByKztJLlaZQIIPaHIzk06Q15UNkT3mv_K1vxoxI9HG_YCp-hkev0tX4jCw&usqp=CAE",
  },
  {
    id: 12,
    name: "Adidas Gazelle",
    desc: "Iconic casual sneakers",
    size: [8, 9, 10],
    color: ["red", "white"],
    price: 1400,
    strikeOut: 1699,
    discount: 80,
    rating: 4.6,
    brand: "Adidas",
    imgURL:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTE-723bNEzHRe8DV9N6PM3gib22dD6teUyJdVhGv0JAuRNYQ5c293f8mwxHmz374-_89qZ2u4wq36pt4RTB3UWX8XbsgTVl8A0cBEVbcJxczHyHc1v3QdcaTg&usqp=CAE",
  },
  {
    id: 13,
    name: "Nike Joyride Run Flyknit",
    desc: "Innovative cushioned shoes",
    size: [7, 8, 9],
    color: ["green", "black"],
    price: 1800,
    strikeOut: 2099,
    discount: 80,
    rating: 4.7,
    brand: "Nike",
    imgURL:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQJ-wdrJosWwL61UUxfTS9ZN34iU5PV2T55FycucSg2qae6pUzv0FaROxvnQqRA3AmrxUoCbvetQeRVauESQVWhd1GCvrnCvskLoDgb4At7pxh14vg4IA50&usqp=CAE",
  },
  {
    id: 14,
    name: "Puma Cell Venom",
    desc: "Retro-inspired trainers",
    size: [7, 8, 9, 10],
    color: ["red", "white"],
    price: 1500,
    strikeOut: 1799,
    discount: 80,
    rating: 4.4,
    brand: "Puma",
    imgURL:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcScRrdSdHz8T-j1b0192SyXDmJZrIrNz4VVVza1iuhbZgZIjHVew5udceJiViWKB9rHOQMwrbDC8fx89sCGaC7tLWXb-yiUK6COepcwaLfY5xRWO8D6uQwMZg&usqp=CAE",
  },
  {
    id: 15,
    name: "Sparks Agility",
    desc: "Dynamic workout shoes",
    size: [8, 9, 10],
    color: ["black", "green"],
    price: 1000,
    strikeOut: 1299,
    discount: 70,
    rating: 4.0,
    brand: "Sparks",
    imgURL:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSbl5fQ21YqoRgMbwXdx55bgoTrhgGx-PzvaJ92Kcz6krt3QDUVp9kVvICEWBc8nezx-q5NGRdikxHgEh-pA5wNupwq-9H1f2dHmhROsteKQDgHuWWRq8Chgg&usqp=CAE",
  },
  {
    id: 16,

    name: "Adidas NMD_R1",
    desc: "Urban-inspired sneakers",
    size: [7, 8, 9],
    color: ["white", "black"],
    price: 1700,
    strikeOut: 1999,
    discount: 80,
    rating: 4.8,
    brand: "Adidas",
    imgURL:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQaES3qbVjzGv8AxpEj3yRbUznObqd9qTg7l3leExkJw8qBYmkiGbVms0zg33aUumhES9MYfbjjFK78dYLttVUIH6U15FG1_wZc2i1x93GtZMrYcAT1Mtx52w&usqp=CAE",
  },
  {
    id: 17,
    name: "Nike Free RN 5.0",
    desc: "Lightweight running shoes",
    size: [7, 8, 9, 10],
    color: ["red", "white"],
    price: 1300,
    strikeOut: 1599,
    discount: 80,
    rating: 4.3,
    brand: "Nike",
    imgURL:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTWzsDWRCrcoXTsx0bMYicYvglABB6TDWJtcMtpQxi9hLq_vcb7c3pTp85ZovjhYtr9qH7RnYVsdd3b8qRvH5gPLLjejD4DQsB0CB7yncjGusI-rVaAw4wu&usqp=CAE",
  },
  {
    id: 18,
    name: "Puma Suede Classic",
    desc: "Timeless suede sneakers",
    size: [8, 9, 10],
    color: ["black", "green"],
    price: 1200,
    strikeOut: 1499,
    discount: 80,
    rating: 4.6,
    brand: "Puma",
    imgURL:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSbykh2r1I5MY0phZ_MHfhMUDxD5J8qsH0aLPXwArIxNBsDpmZmqD-RwO-dw2U_8g4OeJyptdktxv2I5ED2_gYNPrpQkAm3fNnu-KotphQnCY6YOFAw9Vda&usqp=CAE",
  },
  {
    id: 19,
    name: "Sparks Endurance",
    desc: "Durable athletic trainers",
    size: [7, 8, 9],
    color: ["red", "white"],
    price: 1100,
    strikeOut: 1399,
    discount: 70,
    rating: 4.1,
    brand: "Sparks",
    imgURL:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTY0mFeUIML-ahrDzFhtUyi1iA3hqwOpJCLbnlTMYQb9iP9Y0UBw843BPVGI8N_XEXwxPl4Selu8wnT1KSDU1iDoECgl3EdQk12rUBCY0Fap-5mlk6WA8Ta&usqp=CAE",
  },
  {
    id: 20,
    name: "Adidas Stan Smith",
    desc: "Classic tennis shoes",
    size: [7, 8, 9, 10],
    color: ["white", "black"],
    price: 1400,
    strikeOut: 1699,
    discount: 80,
    rating: 4.7,
    brand: "Adidas",
    imgURL:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQiSaueWRDFGEyFwXYAQ-owMoFlN2fHvJCj7MU8LHl0YeyJfVvix0O9HfDAm5ISMgelpb3qkLRtM4lfcPWI4gXyYmiQA-9fu7gWMuKSdZp5nG6JtXq5auL3&usqp=CAE",
  },
];


// Filter-Section Box (In-Out)
let filterStatus = false;

filterController = () => {
  if (filterStatus === false) {
    let filter = document.getElementById("filter-section");
    filter.style.left = "0";
    console.log(filter);
    filterStatus = true;
  } else {
    let filter = document.getElementById("filter-section");
    filter.style.left = "-20vw";
    console.log(filter);
    filterStatus = false;
  }
};


// Card Container Dynamically
const set_Cards = (cardArr) => {
  // console.log(cardArr)

  document.getElementById("card-container").innerHTML = "";

  cardArr.forEach((card_Products) => {
    let cardContainer = document.getElementById("card-container");

    let cardItem = document.createElement("div");
    cardItem.setAttribute("class", "card-item");

    let cardImg = document.createElement("div");
    cardImg.setAttribute("class", "card-img");

    let Img = document.createElement("img");
    Img.setAttribute("src", card_Products.imgURL);
    cardImg.appendChild(Img);
    cardItem.appendChild(cardImg);

    let cardInfo = document.createElement("div");
    cardInfo.setAttribute("class", "card-info");

    let first_P = document.createElement("p");
    first_P.setAttribute("class", "first-p");
    first_P.append("Sponsored");
    cardInfo.appendChild(first_P);

    let cardName = document.createElement("h3");
    cardName.setAttribute("class", "card-name");
    cardName.append(card_Products.name);
    cardInfo.appendChild(cardName);

    let cardDescr = document.createElement("p");
    cardDescr.setAttribute("class", "card-descr");
    cardDescr.append(card_Products.desc);
    cardInfo.appendChild(cardDescr);

    let cardPrice = document.createElement("h3");
    cardPrice.setAttribute("class", "card-price");
    cardPrice.innerHTML = `&#8377; ${card_Products.price}
        <span class="strikeOut-price">&#8377; ${card_Products.strikeOut}</span>
        <span class="discount-price">${card_Products.discount}% off </span>`;
    cardInfo.appendChild(cardPrice);

    let cardBtn = document.createElement("button");
    cardBtn.setAttribute("class", "card-btn");
    cardBtn.append("Hot Deals");
    cardInfo.appendChild(cardBtn);

    cardItem.appendChild(cardInfo);

    cardContainer.appendChild(cardItem);
  });
};
set_Cards(products);




//Filter Section 
let filterObj ={
    name: null,
    minPrice:null,
    maxPrice:null,
    brand:null,
    color: null,
    size: null
}

// For Property-Name & Property-Value in Object
const setFilterObj =(proName ,proValue)=>{
    if(proValue.trim() === ""){
        filterObj[proName] = null
    }
    else{
        filterObj[proName] = proValue
        console.log(filterObj[proName])
    }
}

// console.log(setFilterObj(name, "nike"))


// For Color Checked
const checkColor =()=>{
    let checkInputColor = document.querySelectorAll('input[type="checkbox"]');
    console.log(checkInputColor)

    let colorCollection= [];

    checkInputColor.forEach((element)=>{
        if(element.checked === true){
            colorCollection.push(element.name)
        }
    })
    // console.log(colorCollection)


    if(colorCollection.length !== 0){
        filterObj.color = colorCollection;
    }
    else{
        filterObj.color = null;
    }
}
// console.log(checkColor())


 //For Size
//  const checkSize = () => {
//     let checkInputSize = document.querySelectorAll('input[type="checkbox"]');
    
//     let sizeCollection = [];

//     checkInputSize.forEach((sizes) => {
//         sizeCollection.push(sizes.size); 
//     });

//     if (sizeCollection.length !== 0) {
//         filterObj.size = sizeCollection
//     } else {
//         filterObj.size = null;
//     }

//     console.log(filterObj.size);
// };


//FilterData
const filterData =()=>{

    //DeepCopy
    let filterArr = JSON.parse(JSON.stringify(products));
    
    //For Name Check
    if(filterObj.name !== null){
        filterArr = filterArr.filter((product)=>(
            product.name.toLowerCase().includes(filterObj.name.toLowerCase())
            ))
        }


    // For Brands Checked 
        if(filterObj.brand !== null){
            filterArr = filterArr.filter((product)=>(
                product.brand === filterObj.brand
            ))
        }


    //For Checked Color
        if(filterObj.color !== null){
            filterArr = filterArr.filter((product)=>(
                // product.color[1] == filterObj.color
                
               product.color.find((colors)=>filterObj.color.includes(colors))
            ))
        }


    //Foe Min & Max Price Checked
    if(filterObj.minPrice !== null && filterObj.maxPrice !== null){
        filterArr = filterArr.filter((product)=>(
            filterObj.minPrice<=product.price && filterObj.maxPrice >= product.price 
        ))

        console.log(filterArr)
    }

    

        // For Sizes Checked 
        if(filterObj.size !== null){
            filterArr = filterArr.filter((product)=>(
                // product.size === filterObj.size
                product.size.find((size)=>filterObj.size.includes(size))
            ))
        }


        
        
        set_Cards(filterArr)
        console.log(filterObj)
    }

// console.log(filterData)