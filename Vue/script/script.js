document.addEventListener('scroll',event=>{
    if(screen.width<415){
        if(window.scrollY>261 && window.scrollY<600){
            document.getElementById('navbar-brand').innerHTML = 'A propos';
        }else if(window.scrollY>599){
            document.getElementById('navbar-brand').innerHTML = 'Titres';
        }else{
            document.getElementById('navbar-brand').innerHTML = 'Accueil';
        }
    }
})