
let test = document.getElementById('test');

let plus;
let minus;
let resulted=[];
let math =[];
let answer=[];
let number;

document.getElementById('plusButt').onclick = function(){
    //console.log("plus click");
    resulted.push(Number(number));
    math.push('plus');
    test.innerHTML = '';

    console.log(resulted);
    console.log(math);

}
document.getElementById('minusButt').onclick = function(){
   // console.log('minus click');

    resulted.push(Number(number));
    math.push('minus');
    test.innerHTML = '';

    console.log(resulted);
    console.log(math);
}



function clicked(n){
   // console.log(n);
    number = Number(test.innerHTML += n);
    console.log(number);
}

function result(){
  // console.log('plus ' + plus);
  //  console.log('minus ' + minus);
  //  console.log('Number = ' + number);
    resulted.push(Number(number));
     console.log(resulted);

     for(i=0; i<(resulted.length)+1; i++){
         console.log(resulted.length);
         answer =[];
            if(math[i] == 'plus'){
               answer.push(resulted[i]+ resulted[i+1]);
               console.log('res i '+resulted[i]);
               console.log('res i+1 ' +resulted[i+1]);
            }else if( math[i] == 'minus'){
              answer = (resulted[i] - resulted[i+1]);
            }
            
     }
     console.log('answer' + answer);


}

function calculate(){
    if(number>0){
        console.log('have a num');
    }
}

calculate();


























// let input = document.getElementsByClassName('input');
// let button = document.getElementById('1');
// let plusButt = document.getElementById('plusButt');
// let minusButt = document.getElementById('minusButt');
 
// let butt = document.getElementsByTagName('button');
// let test = document.getElementById('test');
// let plused;
// let minused;
// let num;
// let inputed1;
// let arr=[];
// let result=[];
// let inputed2;
// let res=[];

// function clicked(a){
//     let num  = a;
//     test.innerHTML += num ;
//     inputed1 = test.innerHTML;
//     res = Number(test.innerHTML);
// }

// function plus(){
//     test.innerHTML = '';
//     arr.push(Number(inputed1));
//     console.log(res);
// }


//  function minus(){
//     test.innerHTML = '';
//     arr.push(Number(inputed1));
//    console.log(res);
//  }

// function answer(){
//     for(i=0; i<arr.length; i++){
//         test.innerHTML= arr[i] + Number(test.innerHTML);
//         console.log(arr.length);
//     }
//     result.push(Number(test.innerHTML));
// console.log("Result "+result);

// }


