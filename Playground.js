let a = 75;

console.log("hello worlsd" + a)

function removeEveryOther(arr){

    for (let i = 1; i < arr.length +1; i++) {
        if (i % 2 !== 0){
            arr.delete(i);
        }
    }
}

let arr = ['Hello', 'Goodbye', 'Hello Again', 'codocholery'];

removeEveryOther(arr)

for (let arrKey in arr) {
    console.log(arr)
}