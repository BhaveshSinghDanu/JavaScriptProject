const ApiKey='ed02a90791454242afbadaf66b6bfac9'
const blog_container=document.getElementById('cards-holder');
const fetchRandomNews=async()=>{
    try{
        const apiUrl=`https://newsapi.org/v2/everything?q=tesla&from=2024-02-02&pageSize=10&sortBy=publishedAt&apiKey=${ApiKey}`
        const response=await fetch(apiUrl)
        const data=await response.json();
        displayNews(data.articles);
        console.log(data.articles)
    }
    catch(error)
    {
        console.log("Cannot fetch data cause of "+error)
    }
}
fetchRandomNews()

const displayNews=(articles)=>
{
    blog_container.innerHtml="";
    articles.map((article)=>{
        const card=document.createElement('div');
        card.classList.add('card');
        const title=document.createElement('h2');
        const shortingTitle=article.title.length>30?article.title.slice(0,30)+"...":article.title;

        const image=document.createElement('img');
        image.src=article.urlToImage;
        image.alt=article.title;
        title.textContent=shortingTitle;
       
        const description=document.createElement('p');
        const shortingdesc=(article.description.length<120)?article.description.slice(0,120):article.description;
        description.textContent=shortingdesc;



        card.appendChild(image);
        card.appendChild(title);
       card.appendChild(description);
       card.addEventListener("click",()=>{
        window.open(article.url,"_blank")

       })
        blog_container.appendChild(card);
    })
}
