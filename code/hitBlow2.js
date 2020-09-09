let stdInput = process.stdin;
stdInput.setEncoding('utf-8');
let cnt = 0;
let answer = null;

let chkAnswer = (data) => {
    cnt++;
    if(data===answer){
        console.log("正解！・・・"+cnt+"回目で当てました")
        process.exit();
        return true;
    }else if(data>answer){
        console.log("もっと下")
    }else if(data<answer){
        console.log("もっと上")
    }
}

let main = () => {
    answer = Math.floor(Math.random()*101)
    console.log("0-100で数字を当てて");
    stdInput.on('data', (data) => {
        let _data = Number(data);
        if(!Number.isFinite(_data) || data.replace(/(\n|\r)/,"")===""){
            console.log("数字を入力してください");
        }else{
            chkAnswer(_data);
        }
    });    
}

 main();