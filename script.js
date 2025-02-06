
const searchBtn = document.getElementById('search')
const searchBox = document.getElementById('search_box')
const searchResults = document.getElementById('results')
const showMorebtn = document.getElementById('buttonShow')


let page = 1
let  value = ''
console.log(value)

async function showResults(){
    value = searchBox.value
    const pageUrl = `https://api.unsplash.com/search/photos?page=${page}&query=${value}&client_id=Z9u2_OD8xHCKBGd4069Hll_tSaDaIzlee8yH8rR2zcE&per_page=12`
    let response = await fetch(pageUrl)
    let  data = await  response.json()
    let imgUrls = data.results 
    console.log(imgUrls)

    imgUrls.map((imgUrl)=>{
    let img = document.createElement('img')
    img.src = imgUrl.urls.small
    let imgLInk = document.createElement('a')
    imgLInk.href = imgUrl.links.html
    imgLInk.appendChild(img)
    searchResults.appendChild(imgLInk)
    })
    showMorebtn.style.display = "block"

}

function Clear(){
    searchResults.innerHTML = ""
}

showMorebtn.addEventListener('click',(e)=>{
    page++
    showResults()
})


searchBtn.addEventListener('click', (e)=>{
    e.preventDefault()
    Clear()
    showResults()
})