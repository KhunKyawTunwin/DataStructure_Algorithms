let employee1 = [5,1,4,5,3,4,6];
let employee2 = [1,3,2,5,3];
let employee1count = 0 ;
let employee2count = 0 ;
let arraylength ;
let sum1 = 0 ;
let sum2 = 0 ;

const comparerating  = (array1,array2) => {
    if(!Array.isArray(array1) || !Array.isArray(array2)){
        return console.log("Your input data are wrong try again input data");
    }

    if(array1.length >= array2.length ){
        arraylength = array1.length;
        //console.log ("This is arraylength employee1 ",arraylength);
        arraylength = array2.length ;
        //console.log("This is array length employee2 ", arraylength);

    //}
    }else {
        arraylength = array2.length ;
    }


    //  array1.length >= array2.length
    //  ?(arraylength = array1.length)
    //  :(arraylength = array2.length);

for(let i=0 ;i<arraylength ; i++){
    sum1 += array1[i];
    sum2 += array2[i];
     
        array1[i] > array2[i]
        ?employee1count ++
        :array1[i] == array2[i] 
        ?(employee2count += 0)
        :employee2count++;
    
}


sum1 > sum2
?console.log(`Employee  1 total rating is ${sum1} and 
Employee2 total is ${sum2},
Employee 1 better and ${employee1count} times services`)
:sum1 == sum2 
?console.log(`Service rating are same ${sum1}`)
:console.log(`Employee2 total rating is ${sum2} 
and Employee 1 total is ${sum1} ,
Employee 2 better and ${employee2count} times better at services
 ` );

};

 comparerating(employee1,employee2);

