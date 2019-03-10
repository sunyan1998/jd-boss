window.onload = function() {
    var slideshow = document.getElementById('slideshow');
    var list = document.getElementById('list');
    var buttons = document.getElementById('buttons').getElementsByTagName('span');
    var prev = document.getElementById('prev');
    var next = document.getElementById('next');
    var index = 1;
    var animated = false;
    var timer;

    var slideshow1 = document.getElementById('slideshow1');
    var list1 = document.getElementById('list1');
    var prev1 = document.getElementById('prev1');
    var next1 = document.getElementById('next1');
    var animated1 = false;
    var timer1;
    
    function showButton() {
        for(var i = 0; i < buttons.length; i++){
            if(buttons[i].className == 'on'){
                buttons[i].className = '';
                break;
            }
        }
        buttons[index - 1].className = 'on';
    }

    function animate(offset) {
        animated = true;
        var newLeft = parseInt(list.style.left) + offset;
        var time = 300;
        var interval = 10;
        var speed = offset/(time/interval);
        function go() {
            if((speed < 0 && parseInt(list.style.left) > newLeft) || (speed > 0 && parseInt(list.style.left) < newLeft)){
                list.style.left = parseInt(list.style.left) + speed + 'px';
                setTimeout(go,interval);
            }
            else{
                animated = false;
                list.style.left = newLeft + 'px';
                if(newLeft < -3750){
                    list.style.left = -750 + 'px';
                }
                if(newLeft > -750){
                   list.style.left = -3750 + 'px';
                }
            }
        }
        go();
    }

    function play() {
        timer = setInterval(function() {
            next.onclick();
        }, 3000);
    }
    function stop() {
        clearInterval(timer);
    }

    next.onclick = function() {
        if(animated){return;}
        if(index == 5){
            index = 1;
        }
        else{
            index += 1;
        }
        showButton();
        if(!animated){
            animate(-750);
        }
    }

    prev.onclick = function() {
        if(animated){return;}
        if(index == 1){
            index = 5;
        }
        else{
            index -= 1;
        }
        showButton();
        if(!animated ){
           animate(750); 
        }
    }

    for(var i = 0; i < buttons.length; i++){
        buttons[i].onclick = function() {
            if(this.className == 'on'){
                return;
            }
            var myIndex = parseInt(this.getAttribute('index'));
            var offset = -750 * (myIndex - index);

            if(!animated ){
                animate(offset);
            }
            index = myIndex;
            showButton();
        }
    }

    slideshow.onmouseover = stop;
    slideshow.onmouseout = play;
    play();

/* 今日推荐轮播图*/
    function animate1(offset1) {
        var newLeft = parseInt(list1.style.left) + offset1;
        var time = 500;
        var interval = 10;
        var speed = offset1/(time/interval);
        animated1 = true;
        function go() {
            if((speed < 0 && parseInt(list1.style.left) > newLeft) || (speed > 0 && parseInt(list1.style.left) < newLeft)){
                list1.style.left = parseInt(list1.style.left) + speed + 'px';
                setTimeout(go, interval);
            }
            else{
                animated1 = false;
                list1.style.left = newLeft + 'px';
               if(newLeft > -255){
                    list1.style.left = -1275 + 'px';
               }
               if(newLeft < -1275){
                    list1.style.left = -255 + 'px';
               } 
            }
        }
        go();
    }
    function play1(){
        timer1 = setInterval(function () {
            next1.onclick();
        },2000);
    }
    function stop1(){
        clearInterval(timer1);
    }
    next1.onclick = function() {
        if(!animated1){
            animate1(-255);
        }
    }
    prev1.onclick = function() {
        if(!animated1){
            animate1(255);
        }
    }

    slideshow1.onmouseover = stop1;
    slideshow1.onmouseout = play1;
    play1();
}