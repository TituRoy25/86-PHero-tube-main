const handleCategory = async () => {
    
    const response = await fetch("https://openapi.programming-hero.com/api/videos/categories");
    const data = await response.json();

    const tabContainer = document.getElementById("tab-container");
    data.data.forEach((category) => {
        const div = document.createElement("div");
        div.innerHTML =`
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
    cardContainer.textContent='';
    data.data.forEach((news)=>{
        //console.log(news);
        const div=document.createElement('div');
        div.innerHTML= `
            <div class="relative">
                <figure>
                <img class=" rounded w-[320px] h-[200px]" src=${news?.thumbnail}/>
                </figure>
                <h5 class="absolute bottom-0 right-0 mr-14 mb-3  bg-red-600 text-white text-[10px]">${news?.others?.posted_date}ago</h5>
            </div>

            <div class="mt-2 flex flex-row">
                <div class="w-[30px] h-[32px] rounded-full">
                    <img src=${news?.authors[0]?.profile_picture}/>
                </div>
                
                <div class="ml-5">
                    <h1 class="font-bold text-[20px]">${news?.title}</h1>
                    <div class="text-[15px]">
                        <div class="flex flex-row">
                            <div><p class="mr-2">${news?.authors[0]?.profile_name}</p></div>
                            <div><p>${news?.authors[0]?.verified}</p></div>
                        </div>                    
                        <p>${news?.others?.views} views</p>
                    </div>
                </div>
            </div>
            `;

        cardContainer.appendChild(div);
    })
    //console.log(data.data);
    //console.log(categoryId);
}



handleCategory();
handleAll(1000);