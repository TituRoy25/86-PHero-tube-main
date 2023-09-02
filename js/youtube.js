const handleCategory = async () => {

    const response = await fetch("https://openapi.programming-hero.com/api/videos/categories");
    const data = await response.json();

    const tabContainer = document.getElementById("tab-container");
    data.data.forEach((category) => {
        const div = document.createElement("div");
        div.innerHTML = `
        <a onclick="handleAll('${category.category_id}')" class="btn active:bg-[#FF1F3D] ">${category.category}</a>
        `;
        tabContainer.appendChild(div);
    });
    //console.log(data.data);

};

const handleAll = async (categoryId) => {
    const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`);
    const data = await response.json();

    const cardContainer = document.getElementById("card-container");
    cardContainer.textContent = '';
    data.data.forEach((news) => {

        const second = news.others.posted_date;
        //const convertedTime = convertSecondToHourMin(second);
        //const time = ${convertedTime.}

        const div = document.createElement('div');
        div.innerHTML = `
                <div class="relative">
                    <figure>
                    <img class=" rounded w-[320px] h-[200px]" src=${news?.thumbnail}/>
                    </figure>
                    <h5 class="absolute bottom-0 right-0 mr-14 mb-3  bg-black text-white text-[10px]">${news?.others?.posted_date}ago</h5>
                </div>
    
                <div class="mt-2 flex flex-row">
                    <div >
                        <img class="w-[30px] h-[30px] rounded-full" src=${news?.authors[0]?.profile_picture}/>
                    </div>
                    
                    <div class="ml-5">
                        <h1 class="font-bold text-[20px]">${news?.title}</h1>
                        <div class="text-[15px]">
                            <div class="flex flex-row">
                                <div><p class="mr-2">${news?.authors[0]?.profile_name}</p></div>
                                <div class="verify-image">${news?.authors[0]?.verified && `<img src="./Blue-check.png"> `}</div>
                            </div>                    
                            <p>${news?.others?.views} views</p>
                        </div>
                    </div>
                </div>
                `;

        cardContainer.appendChild(div);

    })

}



handleCategory();
handleAll(1000);

// const convertSecondToHourMin = (seconds) => {
//     // console.log(seconds);
//     const hours = Math.floor(seconds / 3600);

//     const remainingSeconds = seconds % 3600;

//     const minutes = Math.floor(remainingSeconds / 60);

//     return { hours, minutes };
// }

//<p>${news?.authors[0]?.verified? '<img class="flex-1" src="images/fi_10629607.svg ">' : ''  }</p>