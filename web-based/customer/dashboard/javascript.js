// import '../../anime-master/lib/anime'

function profile_action(){

    let profileAction = document.getElementById('profile-action')
    
    if(profileAction.style.display == 'flex'){
        profileAction.style.display = 'none'
    }else{
        profileAction.style.display = 'flex'
    }
}

function profile_open(){
    var elements = document.getElementById('profile-page');
    let profileAction = document.getElementById('profile-action')
    profileAction.style.display = 'none'
    var screenwidth = screen.width;
    var translate = screenwidth * -0.25;
    
    var animation = anime.timeline({
        easing: 'easeOutExpo',
        duration: 750
    });

    animation.add({
        targets: elements,
        translateX: translate,
    })
}

function profile_close(){
    var elements = document.getElementById('profile-page');
    var screenwidth = screen.width;
    var translate = screenwidth * 0.25;
    
    var animation = anime.timeline({
        easing: 'easeInOutSine',
        duration: 750
    });

    animation.add({
        targets: elements,
        translateX: translate,
    })
}

let count = 0
function next_card(){
    count++
    var seemore = document.getElementById('see-more')
    var arrow = document.getElementById('next-card')
    if(count == 3){
        seemore.style.display = 'block'
        arrow.style.display = 'none'
    }
}

function see_more(){
    //redirect page
}

function purchase_history(){
    //show modal purchase history
    //open modal //animation
    var elements = document.getElementById('modal-container');
    let profileAction = document.getElementById('profile-action')
    profileAction.style.display = 'none'
    var screenheight = screen.height;
    console.log(screenheight)
    var animation = anime.timeline({
        easing: 'easeInOutSine',
        duration: 500
    });

    animation.add({
        targets: elements,
        opacity: 1,
        zIndex: 1
    })
}

window.onclick = (event)=>{
    var modal = document.getElementById('modal');
    var elements = document.getElementById('modal-container');
    if(event.target == elements){
        console.log('hit')
        var animation = anime.timeline({
            easing: 'easeInOutSine',
            duration: 500
        });

        animation.add({
            targets: elements,
            opacity: 0,
            zIndex: -1
        })
    }
}

function signout(){
    
}