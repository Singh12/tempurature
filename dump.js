import {key} from '../external/main.js';


console.log(key);
function sometingh(num) {
    return new Promise(
        (resolve,reject) => {
            num++;
            if(num<10) {
                setTimeout(()=>{
                    resolve(num)
                }, 1000)
            } else {
                reject('Faild');
            }
         
        }
    )
}

sometingh(0).then(sometingh).then(
    function(val) {
        console.log(val);
    }, function(error) {
        console.log(error);
    }
)