let count = 180;
let saygac=0;
let basla=0;
let san=0;
let gun=0;
let deq=0;
let saat=0;
let div =  document.getElementsByTagName("div")[0];
CountDown();
let time = setInterval(CountDown,1000);
function CountDown(){
 
   
   
    div.innerHTML = basla+" saniye ="+ gun+  " gun "+saat+" saat "+deq+" deq "+san+" san ";
    if(san!=0){
        san--;
        
    }
    else{
        san=59;
        if(deq!=0){
            deq--;
        }
        else{
            deq=59;
            if(saat!=0){
                saat--;
            }
            else{
                saat=23;
                if(gun!=0)
                {
                    gun--;
                }
            }
        }
    }
    saygac++;
    if(saygac==(basla+2)){
        clearInterval(time);
    }
    
    
    

   
}
this.onload=()=>{
    basla=count;
    gun= Math.floor(count/86400);
    count=Math.abs(count-(86400*gun));
    saat= Math.floor(count/3600);
    count=Math.abs(count-(3600*saat));
    deq= Math.floor(count/60);
    count=Math.abs(count-(60*deq));
    san=count;


}