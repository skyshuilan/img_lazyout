 var imgs = document.body.querySelectorAll('img'),   
        H = window.innerHeight;  //浏览器视窗高度
    function lazyload(){
        var S = document.documentElement.scrollTop||document.body.scrollTop;   //滚动条滚过高度
        [].forEach.call(imgs,function(img){
             if(!img.getAttribute('data-src')){return}  //已经替换过的跳过
             console.log(getTop(img))
            
             if(H + S - 200 > getTop(img)){    //这里H+S减去200，延后加载时机
                 img.src=img.getAttribute("data-src");
                 img.removeAttribute("data-src");
             }
            });
    [].every.call(imgs,function(img){return !img.getAttribute('data-src')}) && (window.removeEventListener("scroll",lazyload,false));   //完成所有替换后注销事件
            
    }

    window.addEventListener("scroll",lazyload,false);
    window.addEventListener("load",lazyload,false);

    function getTop(e){
        var T = e.offsetTop;
        while(e = e.offsetParent ){
            T += e.offsetTop
        }
        return T
    }
