
var sylvain_chrono_trigger = 0;

function stopChrono(){
    clearTimeout(sylvain_chrono_trigger);
}

function easychrono(param_secondes, display){
    

    var seconds = parseInt(param_secondes % 60, 10);
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = seconds;

    if( param_secondes > 0 ){
        stopChrono();
        sylvain_chrono_trigger = setTimeout(
            function(){
                easychrono(param_secondes - 1, display);
                
            }, 
            1000
        );
    }
    if(param_secondes == 0) {
       stopChrono();
        sylvain_chrono_trigger = setTimeout(
            function(){
                easychrono(10, display);
                easybtnProvideQuestion();
            }, 
            1000
        );
    }
}

function easylancetoi() {
    
    var display = document.querySelector('.easytime');
    stopChrono();
    easychrono(10, display);

};

