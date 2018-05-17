/**
 * Created by 李建鹏 on 2018/5/5.
 */
window.onload=function () {
    // let a=document.getElementsByTagName("ul")
    // let b=a[0].getElementsByTagName('li')
    // let c=document.getElementsByClassName("banner")
    // let d=c[0].getElementsByClassName("a")


//     for(let i=0;i<b.length;i++){
//         b[i].onclick=function() {
//             for(let j=0;j<b.length;j++){
//                 b[j].className='li'
//                 d[j].style.zIndex=10
//
//             }
//             b[i].className='li color'
//             d[i].style.zIndex=999
//             index=i
//         }
//     }
//     c.onmouseenter=function () {
//         clearInterval(t)
//     }
//     c.onmouseleave=function () {
//         t=setInterval(move,2000)
//     }
//     let t=setInterval(move,2000)
//     function move() {
//         index++
//         if(index===d.length){
//             index=0;
//         }
//         d.forEach(function (val) {
//          val.style.zIndex=10
//         })
//         d[index].style.zIndex=999
//         b.forEach(p => p.className='li')
//         b[index].className="li color"
//
//     }
// }
    let a=document.getElementsByTagName("ul")
    let b=a[0].querySelectorAll('.li')
    let c=document.querySelector('.banner')
    let d=c.querySelectorAll(".a")
    let widths=parseInt(getComputedStyle(c,null).width)
    let index=0
    let current=0,next=0
    let flag=true
    b.forEach(function (p,index) {
        p.onclick=function () {
            if(current==index){return}
            b[current].classList.remove("color")
            b[index].classList.add("color")
            if(current>index){
                d[index].style.left=-widths+"px"
                animate(d[current],{left:widths})
                animate(d[index],{left:0})
            }else if(current <index) {
                d[index].style.left=widths+"px"
                animate(d[current],{left:-widths})
                animate(d[index],{left:0})
            }
            current=next=index
        }
    })
    c.onmouseenter=function () {
        clearInterval(t)
    }
    c.onmouseleave=function () {
        t=setInterval(move,2000)
    }
    let t=setInterval(move,2000)
    function move() {
        next++
            if (next===d.length){
                next=0
        }
        b[current].classList.remove("color")
        b[next].classList.add("color")
        d[next].style.left=widths+'px'
        animate(d[current],{left:-widths})
        animate(d[next],{left:0})
        current=next
    }

///////////////////推荐////////////
/////////////推荐/////
    let left=document.querySelector(".shop >.left")
    let right=document.querySelector(".shop >.right")
    let shop1=document.querySelectorAll(".shop >.shop1")
    let shoplan=shop1[0].querySelectorAll(".shoplan")
    console.log(left);
    console.log(right);
    console.log(shop1);
    console.log(shoplan);
    let lw=(parseInt(getComputedStyle(shoplan[0],null).width)+
        parseInt(getComputedStyle(shoplan[0],null).marginRight))*3
    console.log(lw);
    maxtimes =shoplan.length/3
    console.log(maxtimes);
    let times=0
    left.onclick=function () {
        console.log(1);
        if(++times===maxtimes){
            console.log(++times === maxtimes);
            times=maxtimes-1
        }
        shop1[0].style.transform=`translateX(${-times*lw}px)`
    }
    right.onclick=function () {
        if(--times<0){
            times=0
        }
        shop1[0].style.transform=`translateX(${-times*lw}px)`
    }
}
