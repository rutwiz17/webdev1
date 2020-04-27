let sec=0;
let msec=0;
let interval = null;
let sec1;
let msec1;
let k=1;
let b1 = null , b2 = null , b3 = null , b4 = null , b5 = null , j=0;
let sound = new Audio("Cowboy_with_spurs-G-rant-1371954508.wav");
let sound1 = new Audio("boxing_bell_multiple.wav");
let sound2 = new Audio("applause3.wav");
function timer(){
    msec++;
    if((msec%1000)==0){
        sec++;
        
    }
    if((msec%1000)<10){
        msec1="00"+(msec%1000).toString();
    }
    else if((msec%1000)<100){
        msec1='0'+(msec%1000).toString();
    }
    else{
        msec1=msec%1000;
    }
    if(sec<10){
        sec1='0'+sec.toString();
    }
    else{
        sec1=sec;
    }
    
    document.getElementById("display").innerHTML="Time: "+sec1+':'+msec1;
}





function shuffle(arr) {
    let pos;
    for(let i =arr.length - 1;i>0;i--){
        pos = Math.floor(Math.random()*(i-1));
        arr[i]+=arr[pos];
        arr[pos]=arr[i]-arr[pos];
        arr[i]=arr[i]-arr[pos];
    }
    
    return arr;
}

function setbtns(bid){
    sound1.play();
interval=window.setInterval(timer,1);
    if(bid=="medium"){    

        let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
        let arr1 = shuffle(arr);
        let arr2 = shuffle(arr1);
for(let y=0 ; y<20 ; y++){
    document.getElementById("btn"+(y+1).toString()).innerHTML=arr2[y];
}
for(y=0 ; y<20 ; y++){
    document.getElementById("btn"+(y+1).toString()).style.opacity=0.2+Number( document.getElementById("btn"+(y+1).toString()).textContent)/50;
}
    document.getElementById("button1").style.visibility='visible';

    }
    else if(bid=="easy"){


        let arr = [1,2,3,4,5,6,7,8,9,10,11,12];
        let arr1 = shuffle(arr);
        let arr2 = shuffle(arr1);
for(let y=0 ; y<12 ; y++){
    document.getElementById("btn"+((y+1)*100).toString()).innerHTML=arr2[y];
}
for(y=0 ; y<12 ; y++){
    document.getElementById("btn"+((y+1)*100).toString()).style.opacity=0.2+Number( document.getElementById("btn"+((y+1)*100).toString()).textContent)/25;
}
document.getElementById("button11").style.visibility='visible';  

}
    else if(bid=="hard"){


        let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42];
        let arr1 = shuffle(arr);
        let arr2 = shuffle(arr1);
for(let y=0 ; y<42 ; y++){
    document.getElementById("btn"+((y+1)*10000).toString()).innerHTML=arr2[y];
}
for(y=0 ; y<42 ; y++){
    document.getElementById("btn"+((y+1)*10000).toString()).style.opacity=0.20+Number( document.getElementById("btn"+((y+1)*10000).toString()).textContent)/84;
}
document.getElementById("button12").style.visibility='visible';  


    }
    
    
   
document.getElementById("disp3").style.visibility='hidden';
document.getElementById("bes").style.visibility='hidden';
document.getElementById("best").style.visibility='hidden';
document.getElementById("first").style.visibility='hidden';
document.getElementById("second").style.visibility='hidden';
document.getElementById("third").style.visibility='hidden';
document.getElementById("fourth").style.visibility='hidden';
document.getElementById("fifth").style.visibility='hidden';
document.getElementById("diff").style.visibility='hidden';




}


function update1(cid){
    
    let temp = Number(document.getElementById(cid).textContent);
    if(k==temp){
    if(temp<13){
        document.getElementById(cid).innerHTML=temp + 12;
        document.getElementById(cid).style.opacity=0.2+Number( document.getElementById(cid).textContent)/25;
       sound.play();
    }
    else{
        document.getElementById(cid).innerHTML=' ';
        document.getElementById(cid).style.opacity=0;
      sound.play();
    }
    if(temp==24){
        window.clearInterval(interval);
    
        document.getElementById("disp3").style.visibility='visible';
        document.getElementById("button11").style.visibility='hidden';
        document.getElementById("diff").style.visibility='visible';
        b1=Number(localStorage.getItem("b010"));
        b2=Number(localStorage.getItem("b020"));
        b3=Number(localStorage.getItem("b030"));
        b4=Number(localStorage.getItem("b040"));
        b5=Number(localStorage.getItem("b050"));
        if(b1!=null){
        if(msec<b1){
            b1=msec;
            localStorage.setItem("b050",localStorage.getItem("b040"));
            localStorage.setItem("b040",localStorage.getItem("b030"));
            localStorage.setItem("b030",localStorage.getItem("b020"));
            localStorage.setItem("b020",localStorage.getItem("b010"));
            localStorage.setItem("b010",b1.toString());
            b2=Number(localStorage.getItem("b020"));
            b3=Number(localStorage.getItem("b030"));
            b4=Number(localStorage.getItem("b040"));
            b5=Number(localStorage.getItem("b050"));
            j=1;
            sound2.play();
            
        }}
        if(b2!=null){
        if(msec<b2&&msec>b1){
            b2=msec;
            localStorage.setItem("b050",localStorage.getItem("b040"));
            localStorage.setItem("b040",localStorage.getItem("b030"));
            localStorage.setItem("b030",localStorage.getItem("b020"));
            localStorage.setItem("b020",b2.toString());
            b3=Number(localStorage.getItem("b030"));
            b4=Number(localStorage.getItem("b040"));
            b5=Number(localStorage.getItem("b050"));
            j=1;
            sound2.play();
        }}
        if(b3!=null){
        if(msec<b3&&msec>b2){
            b3=msec;
            localStorage.setItem("b050",localStorage.getItem("b040"));
            localStorage.setItem("b040",localStorage.getItem("b030"));
            localStorage.setItem("b030",b3.toString);
            b4=Number(localStorage.getItem("b040"));
            b5=Number(localStorage.getItem("b050"));
        j=1;
        sound2.play();
        }}
        if(b4!=null){
            if(msec<b4&&msec>b3){
            b4=msec;
            localStorage.setItem("b050",localStorage.getItem("b040"));
            localStorage.setItem("b040",b4.toString());
            b5=Number(localStorage.getItem("b050"));
        j=1;
        sound2.play();
        }}
        if(b5!=null){
            if(msec<b5&&msec>b4){
            b5=msec;
            localStorage.setItem("b050",b5.toString());
        j=1;
        sound2.play();
        }}
        if(!b1){
            if(!j){
                b1=msec;
                localStorage.setItem("b010",b1.toString());
            j=1;sound2.play();
            }
        }
        else if(!b2){
            if(!j){
                b2=msec;
                localStorage.setItem("b020",b2.toString());
            j=1;sound2.play();
            }
        }
        else if(!b3){
            if(!j){
                b3=msec;
                localStorage.setItem("b030",b3.toString());
            j=1;sound2.play();
            }
        }
        else if(!b4){
            if(!j){
                b4=msec;
                localStorage.setItem("b040",b4.toString());
            j=1;sound2.play();
            }
        }
        else if(!b5){
            if(!j){
                b5=msec;
                localStorage.setItem("b050",b5.toString());
            j=1;sound2.play();
            }
        }




        sec=0;
        j=0;
        msec=0;
        k=0;
        document.getElementById("bes").style.visibility='visible';
        document.getElementById("bes").innerHTML="Best(Noobie)";
    
        
        if(b1){
            document.getElementById("first").style.visibility='visible';
            document.getElementById("first").innerHTML="1st: "+(Math.floor(b1/1000)).toString()+':'+(b1%1000).toString();

        }
        if(b2){
            document.getElementById("second").style.visibility='visible';
            document.getElementById("second").innerHTML="2nd: "+(Math.floor(b2/1000)).toString()+':'+(b2%1000).toString();

        }
        if(b3){
            document.getElementById("third").style.visibility='visible';
            document.getElementById("third").innerHTML="3rd: "+(Math.floor(b3/1000)).toString()+':'+(b3%1000).toString();

        }
        if(b4){
            document.getElementById("fourth").style.visibility='visible';
            document.getElementById("fourth").innerHTML="4th: "+(Math.floor(b4/1000)).toString()+':'+(b4%1000).toString();

        }
        if(b5){
            document.getElementById("fifth").style.visibility='visible';
            document.getElementById("fifth").innerHTML="5th: "+(Math.floor(b5/1000)).toString()+':'+(b5%1000).toString();

        }


b01=null;
b02=null;
b03=null;
b04=null;
b05=null;
}
k++;    
}
    
}


function update(cid){
    
    let temp = Number(document.getElementById(cid).textContent);
    if(k==temp){
    if(temp<21){
        document.getElementById(cid).innerHTML=temp + 20;
        document.getElementById(cid).style.opacity=0.2+Number( document.getElementById(cid).textContent)/50;
       sound.play();
    }
    else{
        document.getElementById(cid).innerHTML=' ';
        document.getElementById(cid).style.opacity=0;
      sound.play();
    }
    if(temp==40){
        window.clearInterval(interval);
    
        document.getElementById("disp3").style.visibility='visible';
        document.getElementById("button1").style.visibility='hidden';
        document.getElementById("diff").style.visibility='visible';
        b1=Number(localStorage.getItem("b01"));
        b2=Number(localStorage.getItem("b02"));
        b3=Number(localStorage.getItem("b03"));
        b4=Number(localStorage.getItem("b04"));
        b5=Number(localStorage.getItem("b05"));
        if(b1!=null){
        if(msec<b1){
            b1=msec;
            localStorage.setItem("b05",localStorage.getItem("b04"));
            localStorage.setItem("b04",localStorage.getItem("b03"));
            localStorage.setItem("b03",localStorage.getItem("b02"));
            localStorage.setItem("b02",localStorage.getItem("b01"));
            localStorage.setItem("b01",b1.toString());
            b2=Number(localStorage.getItem("b02"));
            b3=Number(localStorage.getItem("b03"));
            b4=Number(localStorage.getItem("b04"));
            b5=Number(localStorage.getItem("b05"));
            j=1;
            sound2.play();
            
        }}
        if(b2!=null){
        if(msec<b2&&msec>b1){
            b2=msec;
            localStorage.setItem("b05",localStorage.getItem("b04"));
            localStorage.setItem("b04",localStorage.getItem("b03"));
            localStorage.setItem("b03",localStorage.getItem("b02"));
            localStorage.setItem("b02",b2.toString());
            b3=Number(localStorage.getItem("b03"));
            b4=Number(localStorage.getItem("b04"));
            b5=Number(localStorage.getItem("b05"));
            j=1;
            sound2.play();
        }}
        if(b3!=null){
        if(msec<b3&&msec>b2){
            b3=msec;
            localStorage.setItem("b05",localStorage.getItem("b04"));
            localStorage.setItem("b04",localStorage.getItem("b03"));
            localStorage.setItem("b03",b3.toString);
            b4=Number(localStorage.getItem("b04"));
            b5=Number(localStorage.getItem("b05"));
        j=1;
        sound2.play();
        }}
        if(b4!=null){
            if(msec<b4&&msec>b3){
            b4=msec;
            localStorage.setItem("b05",localStorage.getItem("b04"));
            localStorage.setItem("b04",b4.toString());
            b5=Number(localStorage.getItem("b05"));
        j=1;
        sound2.play();
        }}
        if(b5!=null){
            if(msec<b5&&msec>b4){
            b5=msec;
            localStorage.setItem("b05",b5.toString());
        j=1;
        sound2.play();
        }}
        if(!b1){
            if(!j){
                b1=msec;
                localStorage.setItem("b01",b1.toString());
            j=1;sound2.play();
            }
        }
        else if(!b2){
            if(!j){
                b2=msec;
                localStorage.setItem("b02",b2.toString());
            j=1;sound2.play();
            }
        }
        else if(!b3){
            if(!j){
                b3=msec;
                localStorage.setItem("b03",b3.toString());
            j=1;sound2.play();
            }
        }
        else if(!b4){
            if(!j){
                b4=msec;
                localStorage.setItem("b04",b4.toString());
            j=1;sound2.play();
            }
        }
        else if(!b5){
            if(!j){
                b5=msec;
                localStorage.setItem("b05",b5.toString());
            j=1;sound2.play();
            }
        }




        sec=0;
        j=0;
        msec=0;
        k=0;
        document.getElementById("bes").style.visibility='visible';
        document.getElementById("bes").innerHTML="Best(Medium)";
    
        
        if(b1){
            document.getElementById("first").style.visibility='visible';
            document.getElementById("first").innerHTML="1st: "+(Math.floor(b1/1000)).toString()+':'+(b1%1000).toString();

        }
        if(b2){
            document.getElementById("second").style.visibility='visible';
            document.getElementById("second").innerHTML="2nd: "+(Math.floor(b2/1000)).toString()+':'+(b2%1000).toString();

        }
        if(b3){
            document.getElementById("third").style.visibility='visible';
            document.getElementById("third").innerHTML="3rd: "+(Math.floor(b3/1000)).toString()+':'+(b3%1000).toString();

        }
        if(b4){
            document.getElementById("fourth").style.visibility='visible';
            document.getElementById("fourth").innerHTML="4th: "+(Math.floor(b4/1000)).toString()+':'+(b4%1000).toString();

        }
        if(b5){
            document.getElementById("fifth").style.visibility='visible';
            document.getElementById("fifth").innerHTML="5th: "+(Math.floor(b5/1000)).toString()+':'+(b5%1000).toString();

        }


b01=null;
b02=null;
b03=null;
b04=null;
b05=null;
}
k++;    
}
    
}



function update2(cid){
    
    let temp = Number(document.getElementById(cid).textContent);
    if(k==temp){
    if(temp<43){
        document.getElementById(cid).innerHTML=temp + 42;
        document.getElementById(cid).style.opacity=0.2+Number( document.getElementById(cid).textContent)/84;
       sound.play();
    }
    else{
        document.getElementById(cid).innerHTML=' ';
        document.getElementById(cid).style.opacity=0;
      sound.play();
    }
    if(temp==84){
        window.clearInterval(interval);
    
        document.getElementById("disp3").style.visibility='visible';
        document.getElementById("button12").style.visibility='hidden';
        document.getElementById("diff").style.visibility='visible';
        b1=Number(localStorage.getItem("b011"));
        b2=Number(localStorage.getItem("b021"));
        b3=Number(localStorage.getItem("b031"));
        b4=Number(localStorage.getItem("b041"));
        b5=Number(localStorage.getItem("b051"));
        if(b1!=null){
        if(msec<b1){
            b1=msec;
            localStorage.setItem("b051",localStorage.getItem("b041"));
            localStorage.setItem("b041",localStorage.getItem("b031"));
            localStorage.setItem("b031",localStorage.getItem("b021"));
            localStorage.setItem("b021",localStorage.getItem("b011"));
            localStorage.setItem("b011",b1.toString());
            b2=Number(localStorage.getItem("b021"));
            b3=Number(localStorage.getItem("b031"));
            b4=Number(localStorage.getItem("b041"));
            b5=Number(localStorage.getItem("b051"));
            j=1;
            sound2.play();
            
        }}
        if(b2!=null){
        if(msec<b2&&msec>b1){
            b2=msec;
            localStorage.setItem("b051",localStorage.getItem("b041"));
            localStorage.setItem("b041",localStorage.getItem("b031"));
            localStorage.setItem("b031",localStorage.getItem("b021"));
            localStorage.setItem("b021",b2.toString());
            b3=Number(localStorage.getItem("b031"));
            b4=Number(localStorage.getItem("b041"));
            b5=Number(localStorage.getItem("b051"));
            j=1;
            sound2.play();
        }}
        if(b3!=null){
        if(msec<b3&&msec>b2){
            b3=msec;
            localStorage.setItem("b051",localStorage.getItem("b041"));
            localStorage.setItem("b041",localStorage.getItem("b031"));
            localStorage.setItem("b031",b3.toString);
            b4=Number(localStorage.getItem("b041"));
            b5=Number(localStorage.getItem("b051"));
        j=1;
        sound2.play();
        }}
        if(b4!=null){
            if(msec<b4&&msec>b3){
            b4=msec;
            localStorage.setItem("b051",localStorage.getItem("b041"));
            localStorage.setItem("b041",b4.toString());
            b5=Number(localStorage.getItem("b051"));
        j=1;
        sound2.play();
        }}
        if(b5!=null){
            if(msec<b5&&msec>b4){
            b5=msec;
            localStorage.setItem("b051",b5.toString());
        j=1;
        sound2.play();
        }}
        if(!b1){
            if(!j){
                b1=msec;
                localStorage.setItem("b011",b1.toString());
            j=1;sound2.play();
            }
        }
        else if(!b2){
            if(!j){
                b2=msec;
                localStorage.setItem("b021",b2.toString());
            j=1;sound2.play();
            }
        }
        else if(!b3){
            if(!j){
                b3=msec;
                localStorage.setItem("b031",b3.toString());
            j=1;sound2.play();
            }
        }
        else if(!b4){
            if(!j){
                b4=msec;
                localStorage.setItem("b041",b4.toString());
            j=1;sound2.play();
            }
        }
        else if(!b5){
            if(!j){
                b5=msec;
                localStorage.setItem("b051",b5.toString());
            j=1;sound2.play();
            }
        }




        sec=0;
        j=0;
        msec=0;
        k=0;
        document.getElementById("bes").style.visibility='visible';
        document.getElementById("bes").innerHTML="Best(Pro)";
    
        
        if(b1){
            document.getElementById("first").style.visibility='visible';
            document.getElementById("first").innerHTML="1st: "+(Math.floor(b1/1000)).toString()+':'+(b1%1000).toString();

        }
        if(b2){
            document.getElementById("second").style.visibility='visible';
            document.getElementById("second").innerHTML="2nd: "+(Math.floor(b2/1000)).toString()+':'+(b2%1000).toString();

        }
        if(b3){
            document.getElementById("third").style.visibility='visible';
            document.getElementById("third").innerHTML="3rd: "+(Math.floor(b3/1000)).toString()+':'+(b3%1000).toString();

        }
        if(b4){
            document.getElementById("fourth").style.visibility='visible';
            document.getElementById("fourth").innerHTML="4th: "+(Math.floor(b4/1000)).toString()+':'+(b4%1000).toString();

        }
        if(b5){
            document.getElementById("fifth").style.visibility='visible';
            document.getElementById("fifth").innerHTML="5th: "+(Math.floor(b5/1000)).toString()+':'+(b5%1000).toString();

        }


b01=null;
b02=null;
b03=null;
b04=null;
b05=null;
}
k++;    
}
    
}
