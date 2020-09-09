let stdInput = process.stdin;
stdInput.setEncoding('utf-8');
let exec = function(num){
    let result = 0;
    let calc = function(param){
        if(param === 0){
            return result
        } else {
            result += param
            return calc(param-1)
        }
    }
    console.log(calc(num))
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
            exec(_data);
        }
    });    
}

main();

