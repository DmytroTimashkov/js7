function cloneObj(obj){
    if(typeof obj !== "object"){
        return "this not object";
    }
    if (obj === null){
        return "null isn`t object";
    }
    if(Object.keys(obj).length <= 0){
        return "empty object";
    }
    else{
        let objClone = {}
        for(let key in obj){
            objClone[key] = obj[key]
        }
        return typeof objClone == "object" ? objClone : null ;
    }
}


let user = {
    name:"Vlad",
    surname:"Ivanov",
    age: 17
}

let test = 54;
let test2 = null

cloneObj(user);
console.log(cloneObj(test));
console.log(cloneObj(test2));


console.log(cloneObj(user));

