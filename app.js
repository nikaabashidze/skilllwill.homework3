

                                                             // HOMEEWORK 1

                                                             
const calculate = (num1,num2,...args) => {  
    
    let sum1=0
    let=sum2=1

    for(const num of args) {

        sum1=num1+num2
        sum2*=num

    }

    return [sum1,sum2]
}




const homework1=document.getElementById('homework1')
const function1 = document.getElementById('function1');
const condition1 = document.getElementById('condition1');


homework1.addEventListener('click', function() {
    
    
    function1.style.display = 'block';
    function2.style.display = 'none';
        function3.style.display = 'none';
        
        condition1.style.display = 'block';
        condition2.style.display = 'none';
        condition3.style.display = 'none';
        
        
        
        
        // chemi console
        function myconsole(message) {
            let consolediv = document.querySelector('.console');
            consolediv.innerHTML += '<p>' + '> '+'['+ message + ']'+ '</p>';
        }
        
        myconsole(calculate(3,5,10,5,3,2));
        
        
        
    //brauzeris console
    console.log(calculate(3,5,10,5,3,2))
   


    
});    












// ///////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////


// //HOMEEWORK 2




const user = {
    banks:{

       TBC:{
           address:{
               city:'tbilisi',
               street:'gorgiladze 18'
           }
       },
       VTB:{
           address:{
               city:'tbilisi'
           }
       },

       BOG:{
           address:{
               street:'gorgiladze 12',
               city:'Batumi',

           }
       },

       CREDO:{
           address:{
               city:'khutaisi',
           }
       }


    }
   }

   

   const destructuring = (user) =>{

   const{banks:{BOG:{address:{city= {} }}}} = user
    return city

}




const homework2=document.getElementById('homework2')
const function2 = document.getElementById('function2');

homework2.addEventListener('click', function() {   
    
    function1.style.display = 'none';
    function2.style.display = 'block';
    function3.style.display = 'none';
    
    
    condition1.style.display = 'none';
    condition2.style.display = 'block';
    condition3.style.display = 'none';
    
    
    
           // chemi console
           function myconsole(message) {
            let consolediv = document.querySelector('.console');
            consolediv.innerHTML += '<p>' + '> '+ message + '</p>';
        }
        

        
        
    //brauzeris console
   

    // chemi console
    
    myconsole(destructuring(user))
    
    //brauzeris console
    console.log(destructuring(user))


});





// ///////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////

//                                                                 //HOMEEWORK 3

const car = {

    name: 'Chevrolette  Camaro ',
    modelYear:  1969,

    profile: {
        class: 'Muscle car',
        bodystyle:'2-door hardtop',
        design:'Henry Haga',

    },

     Assembly:['California', 'Norwood', 'Ohio', ' caracas']
}

const spreadop = (car) => {

const spread = {
   ...car,
  profile: {
        ...car.profile
    },
   Assembly:[...car.Assembly]
}
   return spread
}
const car2 = spreadop(car)


car.modelYear= 1971







function myconsole(message) {
    let consolediv = document.querySelector('.console');
    consolediv.innerHTML += '<p>' + '> '+ message + '</p>';
}


const homework3=document.getElementById('homework3')
const function3 = document.getElementById('function3');

homework3.addEventListener('click', function() {

    function1.style.display = 'none';
    function2.style.display = 'none';
    function3.style.display = 'block';


    condition1.style.display = 'none';
    condition2.style.display = 'none';
    condition3.style.display = 'block';
 
    

    // chemi console

    myconsole(car.modelYear)
    myconsole(car2.modelYear)
  

//brauzeris console

console.log(car.modelYear)
console.log(car2.modelYear)

});



// ///////////////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////////////


















