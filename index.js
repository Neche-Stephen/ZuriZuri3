// Task 1
function convertFahrToCelsius(Fahr){
    if(isNaN(Fahr)){
        console.log(`${Fahr} is not a valid number but a/an ${typeof(Fahr)}.`);
     }else{
        Celsius = (Fahr - 32) * 5/9;
        Celsius = Celsius.toFixed(4)
        console.log(Celsius);
     }
   

}
convertFahrToCelsius(0)

// Task 2
function checkYuGiOh(n){
   if(isNaN(n)){
      console.log(`${n} is not a valid number but a/an ${typeof(n)}.`) 
    }
   const arr = Array.from({length: n}, (_, index) => index + 1);
   for (i = 0; i < arr.length; i++) {
      if( (arr[i] % 2 == 0 ) && (arr[i] % 3 != 0) &&  ( arr[i] % 5 != 0 )){
         console.log("Yu")
      }

      else if( (arr[i] % 3 == 0 ) && (arr[i] % 2 != 0) &&  ( arr[i] % 5 != 0 )){
      console.log("Gi")
      }

     else if( (arr[i] % 5 == 0 ) && (arr[i] % 2 != 0) &&  ( arr[i] % 5 != 0 )){
      console.log("Oh")
     }

     else if(  (arr[i] % 2 == 0)  &&  (arr[i] % 3 == 0) &&  ( arr[i] % 5 != 0 ) ){
         console.log('Yu-Gi')
     }  

     else if(  (arr[i] % 2 == 0)  &&  (arr[i] % 5 == 0) &&  ( arr[i] % 3 != 0 ) ){
      console.log('Yu-Oh')
     }
     else if(  (arr[i] % 3 == 0)  &&  (arr[i] % 5 == 0) &&  ( arr[i] % 2 != 0 ) ){
     console.log('Gi-Oh')
     }
     else if( ( arr[i] % 2 == 0 ) && ( arr[i] % 3 == 0 ) && ( arr[i] % 5 == 0 ) ){
      console.log('Yu-Gi-Oh')
     }                             
     else if( ( arr[i] % 2 != 0 ) && ( arr[i] % 3 != 0 ) && ( arr[i] % 5 != 0 ) ){
     console.log(arr[i])
     }
    
   }
   

}
checkYuGiOh(10)
