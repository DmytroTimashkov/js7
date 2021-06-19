function cloneObj(obj){
    if(typeof obj !== "object"){
        return "this not object";
    }
    else if (obj == null){
        return "null isn`t object";
    }
    else if(Object.keys(obj).length <= 0){
        return "empty object";
    }
    else{
        window.objClone = {}
        for(let key in obj){
            objClone[key] = obj[key]
        }
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


console.log(objClone);

objClone.name = "John"
console.log(objClone);
console.log(user);