const colors = ['', 'teal', 'redOrange', 'yellow', 'blue', 'red']

const articles = [...document.getElementsByTagName('article')]

window.addEventListener('scroll', function() {
    const topScroll = window.pageYOffset

    for(let i = 0; articles.length > i; i++){
        if(topScroll <= articles[i].offsetTop){
            document.body.className = colors[i]
            break
        }
    }
})