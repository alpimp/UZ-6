$(document).ready(function(){      

    $('.close-popup, .pop-up-button, .hhh').click(function(e){
        
        $('.spin-result-wrapper').fadeOut();
        $('.spin-result-wrapper').fadeOut();
    
    });        

    $('#spinWheel').click(function(){
        spin()
    })

});  

let time = 600;
let intr;
function start_timer() {
    intr = setInterval(tick, 1000);
}
function tick() {
    time = time-1;
    let mins = Math.floor(time/60);
    let secs = time - mins*60;
    if( mins == 0 && secs == 0 ) {
        clearInterval(intr);
    }
    secs = secs >= 10 ? secs : "0"+secs;
    $("#min").html("0"+mins);
    $("#sec").html(secs);
}
      
function spin() {

       let wheel = document.querySelector('.wheel-img');
    if (!wheel.classList.contains('rotated')) {
        wheel.classList.add('super-rotation');
        setTimeout(function() {
            $('.spin-result-wrapper').show();
        }, 8000);
        setTimeout(function() {
            $("#productOne").slideUp();
            $('.spin-wrapper').slideUp();
             $('.order_block').slideDown();
             start_timer();
        }, 10000);
        wheel.classList.add('rotated');
    }
}

