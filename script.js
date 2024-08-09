// create your own API access key and replace the key added below.

const accessKey = "uBQOznNmV4rxQ_-QiENDmAFPL_4oBC3qLlTzY6sOUgs";

 const searchBox=document.querySelector("#search-box");
 const showMoreBtn=document.querySelector("#show-more-btn");
 const searchForm=document.querySelector("#search-form");
 const searchResult=document.querySelector("#search-result");


let keyword="";
let page=1;

async function searchImages(){
    keyword=searchBox.value;
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12 `;
    const response=await fetch(url);
    const data= await response.json();
     console.log(data);


    if(page === 1){
        searchResult.innerHTML = "";
    }

    

    const results = data.results;

    results.map((result) =>{
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";

        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
    })
    showMoreBtn.style.display = "block";
}

searchForm.addEventListener("submit", (e) =>{
    e.preventDefault();
    page = 1;
    searchImages();
});

showMoreBtn.addEventListener("click", ()=>{
    page++;
    searchImages();
})

