const arr = [10, 12, 23, 34, 55];

function customForEach(cb){
    console.log(cb)
    for(let i = 0 ; i < arr.length ; i++){
        cb(arr[i])
    }
}

customForEach((value) => console.log('custom   : ' , value))