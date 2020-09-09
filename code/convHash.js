let toString = Object.prototype.toString;
let toUry = (obj) => {
    for(let i in obj){
        if(toString.call(obj[i]) === "[object Object]"){
            toUry(obj[i]);
        }else if(toString.call(obj[i]) === "[object Array]"){
            for(let j in obj[i]){
                if(toString.call(obj[i][j]) === "[object String]"){
                    obj[i][j] = obj[i][j].replace(/foo/g,"uryyyy!!");
                }
                if(toString.call(obj[i][j]) === "[object Object]" || toString.call(obj[i][j]) === "[object Array]"){
                    toUry(obj[i][j]);
                }
            }
        }else if(toString.call(obj[i]) === "[object String]"){
            obj[i] = obj[i].replace(/foo/g,"uryyyy!!");
        }
    }
    return obj;
}

let hash = {
    "main" : {
      "first" : { "text" : "foobar" },
      "second" : { "text" : "fizzbuzz", "child" : { "text" : "foobar" } }
    },
    "sub" : {
      "first" : { "text" : "fizzbuzz", "child" : { "text" : "foobar" } },
      "second" : {
        "third" : { "text" : "barfoo", "child" : { "text" : "foobar" } },
        "forth" : { "child" : { "text" : "jit_foo_foo" } }
      }
    },
    "sub2" : [100,200,"footest",{"hoge":"foofuga","huga":"aaafoobbb"},[30,40,"fooooo",{"jojo":"fooccc"}]],
    "sub3" : [[[[[[[[[["foofukai"]]]]]]]]]],
    "text" : "foofava"
  }

console.log(toUry(hash));
//確認用
console.log(JSON.stringify(toUry(hash)))