function onMouseOver(){
    var tooltip = document.getElementById('tooltip')
    tooltip.style.display = 'block'
}

function onMouseOut(){
    var tooltip = document.getElementById('tooltip')
    tooltip.style.display = 'none'
}

function logout(){

}
function open_modal(){
    var elements = document.getElementById('modal-container');
    var animation = anime.timeline({
        easing: 'easeInOutSine',
        duration: 300
    });

    animation.add({
        targets: elements,
        opacity: 1,
        zIndex: 1
    })
}

function close_modal(){
    var elements = document.getElementById('modal-container');
    
    var animation = anime.timeline({
        easing: 'easeInOutSine',
        duration: 300
    });

    animation.add({
        targets: elements,
        opacity: 0,
        zIndex: -1
    })
}

window.onclick = (event)=>{
    
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