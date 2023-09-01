const handleCategory = async () => {
    
    const response = await fetch("https://openapi.programming-hero.com/api/videos/categories");
    const data = await response.json();

    const tabContainer = document.getElementById("tab-container");
    data.data.forEach((category) => {
        const div = document.createElement("div");
        div.innerHTML =`
        <a onclick="handleAll('${category.category_id}')" class="tab">${category.category}</a>
        `
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
        <div class="card">
            <figure><img class="rounded" src=${news?.thumbnail}/></figure>
                <div class="card-body grid grid-cols-2">
                    <div class="w-14 rounded-full">
                        <img src=${news?.authors[0]?.profile_picture}/>
                    </div>
                    
                    <div class="card-actions">
                        <h1 class="font-semibold">${news?.title}</h1>
                        <div class="text-[10px]">
                            <div class="grid grid-cols-2">
                                <div><p class="mr-2">${news?.authors[0]?.profile_name}</p></div>
                                <div><p>${news?.authors[0]?.verified}</p></div>
                            </div>                    
                            <p>${news?.others?.views}views</p>
                        </div>
                    </div>
                </div>
        </div>`

        cardContainer.appendChild(div);
    })
    //console.log(data.data);
    //console.log(categoryId);
}




handleCategory();