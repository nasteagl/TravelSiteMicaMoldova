window.onload = e => {
    for (opacity = 1; opacity > 0; opacity = opacity - 0.1) 
    {           
        setTimeout(function(){document.getElementById('loadingImg').style.opacity = opacity;}, 1200)              
    }  
    setTimeout(function(){document.getElementById('loadingImg').remove()}, 2400)     
}

const find_news = document.getElementById('find_more_news')
const find_blog = document.getElementById('find_more_blogs')
const find_shop = document.getElementById('find_more_shop')

find_news.addEventListener('click', (e) => {
    e.preventDefault()
    window.open('html/news_page.html', '_blank').focus();
})

find_blog.addEventListener('click', (e) => {
    e.preventDefault()
    window.open('html/blog_page.html', '_blank').focus();
})

find_shop.addEventListener('click', (e) => {
    e.preventDefault()
    window.open('html/shop_page.html', '_blank').focus();
})
