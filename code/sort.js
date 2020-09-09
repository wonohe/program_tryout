let sampleAry = [20, 31, 42, 13, 5, 38];

//バブルソート
let bubbleSort = (paramAry,mode) => {
    //配列コピー
    let _paramAry = paramAry.slice(0, paramAry.length);
    let blnSwap;
    let blnFinish = true;
    for(let i=0;i<_paramAry.length-1;i++){
        blnSwap = false;
        if(mode==="desc"){
            if(_paramAry[i] < _paramAry[i+1]) blnSwap = true;
        }else{
            //指定がない場合は昇順で処理
            if(_paramAry[i] > _paramAry[i+1]) blnSwap = true;
        }
        if(blnSwap){
            blnFinish = false; //入替発生している場合はソート完了してないのでfalseに変更
            _paramAry.splice(i, 2, _paramAry[i+1], _paramAry[i]);
        }
    }
    if(!blnFinish){
        return bubbleSort(_paramAry,mode);            
    }else{
        return _paramAry;
    }
}

//クイックソート
let resultAry = []
let quickSort = (paramAry,startPosi,endPosi,mode) => {
    //再帰処理するため参照渡し（mainでコピー）
    let _paramAry = paramAry;
    let _mode = mode ? mode : "asc"
    let pivot = _paramAry[startPosi]>_paramAry[startPosi+1] ? _paramAry[startPosi] : _paramAry[startPosi+1]
    let left = startPosi;
    let right = endPosi;

    while(true) {
        //それぞれ先頭と最後から検索
        while((_paramAry[left]<pivot&&_mode==="asc")||(_paramAry[left]>pivot&&_mode==="desc")){
                left++;
        }
        while((pivot<_paramAry[right]&&_mode==="asc")||(pivot>_paramAry[right]&&_mode==="desc")){
                right--;
        }
        if(right <= left) break;
        //交換
        let tmp = _paramAry[left];
        _paramAry[left] = _paramAry[right]
        _paramAry[right] = tmp
        left++;
        right--;
    }
    if((left-startPosi)>1){
        quickSort(_paramAry,startPosi,left-1,_mode)
    }
    if((endPosi-right)>1){
        quickSort(_paramAry,right+1,endPosi,_mode)
    }
    return _paramAry
}

//「合計」「平均」「最大値」「最小値」取得
let getArrayInfo = (paramAry) => {
    //配列コピー
    let _paramAry = paramAry.slice(0, paramAry.length);
    let infoObj = {
        "sum":0,
        "avg":0,
        "max":null,
        "min":null,
    }
    for(let i=0;i<_paramAry.length;i++){
        infoObj.sum += _paramAry[i];
        if(!infoObj.max || infoObj.max < _paramAry[i]) infoObj.max = _paramAry[i];
        if(!infoObj.min || infoObj.min > _paramAry[i]) infoObj.min = _paramAry[i];
    }
    infoObj.avg = infoObj.sum/_paramAry.length;
    infoObj.avg = (Math.round(infoObj.avg*100))/100;    
    return infoObj;
}

//主処理
let main = () => {
    console.log("配列：[20, 31, 42, 13, 5, 38]")
    console.log("バブルソート昇順")
    console.log(bubbleSort(sampleAry,"asc"))
    console.log("バブルソート降順")
    console.log(bubbleSort(sampleAry,"desc"))
    //配列コピー
    let _paramAry = sampleAry.slice(0, sampleAry.length);
    console.log("クイックソート昇順")
    console.log(quickSort(_paramAry,0,_paramAry.length-1))
    _paramAry = sampleAry.slice(0, sampleAry.length,"asc");
    console.log("クイックソート降順")
    console.log(quickSort(_paramAry,0,_paramAry.length-1,"desc"))
    console.log("合計：" + getArrayInfo(sampleAry).sum)
    console.log("平均：" + getArrayInfo(sampleAry).avg)
    console.log("最大値：" + getArrayInfo(sampleAry).max)
    console.log("最小値：" + getArrayInfo(sampleAry).min)
}

main()
