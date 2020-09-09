let stdInput = process.stdin;
stdInput.setEncoding('utf-8');
let fizzbuzz = function(num){
    let result = [];
    for(let i=1;i<=num;i++){
        let fizz = (i%3===0 ? "Fizz" : "");
        let buzz = (i%5===0 ? "Buzz" : "");
        result.push((fizz===""&&buzz==="") ? i : fizz+buzz);
    }
    console.log(result);
    process.exit();
    return true;
}
let main = () => {
    console.log("数字を入力してください");
    stdInput.on('data', (data) => {
        let _data = Number(data);
        if(!Number.isFinite(_data) || data.replace(/(\n|\r)/,"")===""){
            console.log("数字を入力してください");
        }else{
            fizzbuzz(_data);
        }
    });    
}

 main();