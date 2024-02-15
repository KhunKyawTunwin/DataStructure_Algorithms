
const family ={
  name : 'David',
  children :[
      {
          name:'Geroge',
          children:[
              {
                  name:'Cherry',
                  children:[
                      {
                          name:'Rosy',
                          children:[
                              {
                                  name:'John',
                                  children:[
                                      {
                                          name:'Mary',
                                          childern:[]
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

let outPut = [];
function familyname (member){
  [
      member.name,
      ...member.children.map((result)=>{
          outPut.push(result.name);
          familyname(result);
      }),
  ];
  return outPut;
};
console.log(familyname(family));