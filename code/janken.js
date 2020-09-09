let stdInput = process.stdin;
stdInput.setEncoding('utf-8');
let janken = ["グー","チョキ","パー"];

let judge = (data) => {
    console.log("「ぽい！」");    
    let resultName = "";
    let computer = Math.floor( Math.random() * 3 );
    if(computer === data) {
        console.log("「アイコでしょ！」");
        return false;
    }
    if(computer === 0 && data === 1) {
        resultName = "コンピューター";
    }
    if(computer === 0 && data === 2) {
        resultName = "あなた";
    }
    if(computer === 1 && data === 0) {
        resultName = "あなた";
    }
    if(computer === 1 && data === 2) {
        resultName = "コンピューター";
    }
    if(computer === 2 && data === 0) {
        resultName = "コンピューター";
    }
    if(computer === 2 && data === 1) {
        resultName = "あなた";
    }
    console.log("＊コンピュータ：" + janken[computer]);
    console.log("＊あなた：" + janken[data]);
    console.log("「" + resultName + "の勝ち！」");
    process.exit();
    return true;
}
let main = () => {
    console.log("「じゃんけん・・・」");
    console.log("0.グー 1.チョキ 2.パー");    
    stdInput.on('data', (data) => {
        let _data = Number(data);
        if(!Number.isFinite(_data) || _data > 2 || data.replace(/(\n|\r)/,"")===""){
            console.log("0〜2の数字で入力してね！");
        }else{
            judge(_data);
        }
    });    
}

 main();

