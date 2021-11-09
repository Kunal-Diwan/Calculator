

function calcFn(value){
    document.getElementById('outPutBox').value += value
}

function resetOutput(){
    document.getElementById('outPutBox').value =''
}
function removeLast(){
    let value = document.getElementById('outPutBox').value
    value = value.slice(0,-1)
    document.getElementById('outPutBox').value = value
}

function calAll(){
    let value = document.getElementById('outPutBox').value
    console.log('eq is ',value);
    document.getElementById('outPutBox').value = eval(value)
}

//================theme1==============//

function theme2(){
    document.querySelector('.theme1').style.opacity = '0'
    document.querySelector('.theme2').style.opacity = '1'
    document.querySelector('.theme3').style.opacity = '0'


    //changing theme

    let n =  document.querySelectorAll('.calcBtn')
    for(i=0;i<n.length;i++){
     n[i].style.boxShadow = '0 4px #B4A597'
        n[i].style.backgroundColor = '#EAE3DC'
        n[i].style.color = '#444B5A'
    }

    document.querySelector('.container').style.background = '#E5E5E5'
    document.querySelector('.theme-toggle').style.background = '#D1CCCC'
    document.querySelector('.output').style.background = '#EDEDED'
    document.querySelector('.input').style.background = '#D1CCCC'
    document.querySelector('.input').style.background = '#D1CCCC'
    document.querySelector('.calcDel').style.background = '#377F86'
    document.querySelector('.calcDel').style.boxShadow = '0 4px #1B5F65'
    document.querySelector('.calcBtnReset').style.background = '#377F86'
    document.querySelector('.calcBtnReset').style.boxShadow = '0 4px #1B5F65'
    document.querySelector('.calcBtnReset').style.color = 'white'
    document.querySelector('.calcDel').style.color = 'white'
    document.querySelector('.toggle').style.color = '#1D0934'
    document.querySelector('.output').style.color = '#1D0934'
    document.querySelector('.calcBtnEquals').style.color = 'white'
    document.querySelector('.calcBtnEquals').style.background = '#D03F2F'
    document.querySelector('.calcBtnEquals').style.boxShadow = '0 4px #93261A'
    
    
}

function theme3(){
    document.querySelector('.theme1').style.opacity = '0'
    document.querySelector('.theme2').style.opacity = '0'
    document.querySelector('.theme3').style.opacity = '1'


    //changing theme
    let n =  document.querySelectorAll('.calcBtn')
    for(i=0;i<n.length;i++){
        n[i].style.boxShadow = '0 4px #871C9C'
           n[i].style.backgroundColor = '#341C4F'
           n[i].style.color = '#FFE53D'
       }
    
    document.querySelector('.theme3').style.background = '#00E0D1'
    document.querySelector('.container').style.background = '#160628'
    document.querySelector('.theme-toggle').style.background = '#D1CCCC'
    document.querySelector('.output').style.background = '#1D0934'
    document.querySelector('.input').style.background = '#1D0934'
    // document.querySelector('.calcBtn').style.background = '#341C4F'
    document.querySelector('.calcDel').style.background = '#58077D'
    document.querySelector('.calcDel').style.boxShadow = '0 4px #BC15F4'
    document.querySelector('.calcBtnReset').style.background = '#58077D'
    document.querySelector('.calcBtnReset').style.boxShadow = '0 4px #BC15F4'
    document.querySelector('.calcBtnReset').style.color = 'white'
    document.querySelector('.calcDel').style.color = 'white'
    document.querySelector('.toggle').style.color = '#FFE53D'
    document.querySelector('.output').style.color = '#FFE53D'
   
   document.querySelector('.calcBtnEquals').style.background = '#00E0D1'
    document.querySelector('.calcBtnEquals').style.boxShadow = '0 4px #6CF9F2'
    document.querySelector('.calcBtnEquals').style.color = '#1B2428'
   
   
}
function theme1(){
    document.querySelector('.theme1').style.opacity = '1'
    document.querySelector('.theme2').style.opacity = '0'
    document.querySelector('.theme3').style.opacity = '0'


    //changing theme

    let n =  document.querySelectorAll('.calcBtn')
   for(i=0;i<n.length;i++){
    n[i].style.boxShadow = '0 4px #B4A597'
       n[i].style.backgroundColor = '#EAE3DC'
       n[i].style.color = '#444B5A'
   }


    document.querySelector('.container').style.background = '#3A4764'
    document.querySelector('.theme-toggle').style.background = '#182034'
    document.querySelector('.output').style.background = '#182034'
    document.querySelector('.input').style.background = '#232C43'
    document.querySelector('.calcDel').style.background = '#637197'
    document.querySelector('.calcDel').style.boxShadow = '0 4px #404E72'
    document.querySelector('.calcBtnReset').style.background = '#404E72'
    document.querySelector('.calcBtnReset').style.boxShadow = '0 4px #404E72'
    document.querySelector('.calcBtnReset').style.color = 'white'
    document.querySelector('.calcDel').style.color = 'white'
    document.querySelector('.calcBtnEquals').style.color = 'white'
    document.querySelector('.calcBtnEquals').style.background = '#D03F2F'
    document.querySelector('.calcBtnEquals').style.boxShadow = '0 4px #93261A'
    document.querySelector('.toggle').style.color = 'white'
    document.querySelector('.output').style.color = 'white'
}
