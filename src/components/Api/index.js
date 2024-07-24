import Chance from "chance";

const  chance = Chance();

export const fakeUserData=()=>{
    
    const  chance=Chance();
 console.log(chance.name({middle:true}));
 return chance.name({middle:true}) 
};
// fakeUserData();