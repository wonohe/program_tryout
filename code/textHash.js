let stdInput = process.stdin;
stdInput.setEncoding('utf-8');
let cntWord = function(data){
    let result = {};
    let tmpAry = [];
    tmpAry = data.split(/\s/);
    for(let i in tmpAry){
        if(tmpAry[i]!=="" && !result.hasOwnProperty(tmpAry[i])){
            result[tmpAry[i]] = tmpAry[i].length
        }
    }
    console.log(JSON.stringify(result));
    process.exit();
    return true;
}

let main = () => {
    console.log("文字列を入力してください");
    stdInput.on('data', (data) => {
        if(data.replace(/(\n|\r)/,"")===""){
            console.log("文字列を入力してください");
        }else{
            cntWord(data);
        }
    });    
}

main();
