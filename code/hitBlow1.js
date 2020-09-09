let stdInput = process.stdin;
stdInput.setEncoding('utf-8');
let cnt = 0;
let answer = "";

let chkAnswer = (data) => {
    cnt++;
    let tmpAry = data.split("");
    let answerAry = answer.slice(0, answer.length);
    let hitNum = 0;
    let blowNum = 0;
    for(let i in tmpAry){
        if(tmpAry[i] === answerAry[i]){
            hitNum++
        }else if(answerAry.includes(tmpAry[i])){
            blowNum++;
        }
    }
    if(hitNum===4){
        console.log(cnt+"回で正解！")
        process.exit();
    }else{
        console.log("外れ： "+hitNum+"Hits, "+blowNum+"Blow")
        console.log("4桁の数字は？")
    }
}

let createAnswer = () => {
    let tmp;
    while(answer.length<4){
        tmp = String(Math.floor(Math.random()*10))
        if(answer.indexOf(tmp) === -1) answer += tmp
    }
}

let main = () => {
    createAnswer();
    console.log(answer)
    console.log("4桁の数字は？")
    stdInput.on('data', (data) => {
        let _data =　Number(data);
        if(!Number.isFinite(_data) || data.replace(/(\n|\r)/,"").length !== 4|| data.replace(/(\n|\r)/,"")===""){
            console.log("4桁の数字を入力してください");
        }else{
            //重複除いた桁数チェック
            let tmp =　data.replace(/(\n|\r)/,"").split("");            
            if(tmp.filter((i, j, self) =>{return self.indexOf(i) === j;}).join("").length<4){
                console.log("重複しない4桁の数字を入力してください");
            }else{
                chkAnswer(data);
            }
        }
    });    
}

 main();