let answ1 = document.getElementById('answ1');
let answ2 = document.getElementById('answ2');
let answ3 = document.getElementById('answ3');
let answ4 = document.getElementById('answ4');
let answ5 = document.getElementById('answ5');

let a = document.getElementById('a');
let b = document.getElementById('b');
let c = document.getElementById('c');
let r = document.getElementById('r');

let aa = document.getElementById('aa');
let bb = document.getElementById('bb');
let cc = document.getElementById('cc');


                 // Площадь прямоугольника
        function ploshad(){
            let plosh = Number(a.value) * Number(b.value);
            console.log('Ploshad = ' + plosh);
            answ1.textContent = ' Площадь = ' + plosh;
        }


                    // Периметр прямоугольника        
        function perimetr(){
            let perim = 2*(Number(a.value)+Number(b.value));
            console.log('Perimetr = ' + perim);
            answ1.textContent = ' Периметр = ' + perim;
        }



                     // Площадь квадрата
        function ploshadKv(){
            let plosh = Number(c.value) * Number(c.value);
            answ2.textContent = 'Площадь квадрата = ' +  plosh;
        }



                     // Периметр квадрата
        function perimetrKv(){
            let perim = Number(c.value) *4;
            answ2.textContent = 'Периметр квадрата = ' + perim;
        }



        //Площадь круга через радиус
        function ploshadKr(){
            let plosh =  (Math.PI * Number(r.value)* Number(r.value));
                answ3.textContent = 'Площадь круга = ' + plosh;
        }



        //Периметр круга через радиус (длина окружности)
        function perimetrKr(){
            let perim = ((Math.PI *2) * Number(r.value));
            answ3.textContent = 'Периметр круга = ' + perim;
        }  



        //Площадь треугольника по трем сторонам

        function ploshadTr(){
                let a = Number(aa.value);
                let b = Number(bb.value);
                let c = Number(cc.value);

                let P =  (a+b+c)/2;

                let pp = P*(P-a)*(P-b)*(P-c);
                let S = Math.sqrt(pp) 
            answ4.textContent = 'Площадь треугольника = '+S;
        }




                // Игра угадай число
                 let rand = Math.floor(Math.random()*100);
                let nn = 0;
       
            function randomNum(){

                let userNum = document.getElementById('userNum');
                let u = userNum.value;
                let trys = document.getElementById('trys').textContent = nn;
          
            if(u == rand){
                answ5.textContent = 'Правильно!';
               
            }else if( u < rand){
                nn++;
                answ5.textContent = 'Введите число больше';
                trys.textContent = nn;
            }else if( u > rand){
                nn++
                answ5.textContent = 'Введите число меньше';
                trys.textContent = nn;
            }
                console.log('rand ' + rand);
            }


            function timer(){
                let test = document.getElementById('test');
                test.value = parseInt(test.value)-1;

                if((test.value > 0) && (answ5.textContent !== 'Правильно!')){
                    window.setTimeout(timer, 1000);
                }

              
            }
         

            //Угадай ячейку
            
   