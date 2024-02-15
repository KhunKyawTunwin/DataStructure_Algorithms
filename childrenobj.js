const family = {
    name : 'david',
    children : [
       {name :'Mg Mg',
       children:[
        {
         name:"Kyaw Kyaw",
         children:[
          {
           name:"Aung Aung",
             children:[
              {
              name:'Tun Tun',
                children:[
                 {
                 name: "nsdbad",
                     children: []
                     }
                   ]
                 }
              ]
          }
     ]
  }
]
}  
]
}

let output = [];
function familyNames (obj){
//const familyNames = (obj) => {
  [
    obj.name,
    ...obj.children.map((result) => {
      output.push(result.name);
      familyNames(result);
    }),
  ];
  return output;
};

console.log("Children are :" , familyNames(family));





  