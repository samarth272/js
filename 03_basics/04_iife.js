//Immediately Invoked Function Expressions(IIFE)

(function chai(){
    console.log(`DB CONNECTED`);
})();

//()=> first parenthesis is defination of function
//()=> second parenthesis is execution of function
//once this function is invoked , we have to stop it by using semi-colon

((name)=>{                                      //parameter variable
    console.log(`DB Connected two ${name}`);               //value is executed
})('hitesh')                                    //parameter value