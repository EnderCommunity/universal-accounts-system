/**
 * 
 * Manage the profanity filter
 * 
 **/

function makeRequest(url, callback){
    let request = new XMLHttpRequest();
    request.open('GET', url);
    request.send(null);
    request.onloadend = function(){
        if(request.status === 200){
            callback(false, request.responseText);
        }else{
            callback(new Error(`Unable to fetch file (${url})`), undefined);
        }
    };
}

export async function textProfanity(text){
    return new Promise((resolve,reject)=>{
        makeRequest("/lists/banned_words.txt", function(error, data){
            if(error){
                throw error;
            }
            let status = false,
                lcText = text.toLowerCase();
            data = data.replace(/\r/g, "").toLowerCase().split(/\n/g);
            data.forEach(bWord => {
                let i = lcText.indexOf(bWord);
                if(i != -1){
                    if(i > 0){ // Not at the start of the string
                        if(/^[a-z]*$/g.test(text[i - 1]) && /^[A-Z]*$/g.test(text[i])){ //aA
                            status = true;
                        }else if(/^[A-Z]*$/g.test(text[i]) && /^[A-Z]*$/g.test(text[i - 1])){ // AA
                            status = true;
                        }else if(!/^[a-z]*$/g.test(lcText[i - 1])){ //#a ,#A
                            status = true;
                        }
                    }else{
                        status = true;
                    }
                }
                data = [];
            });
            resolve(status);
        });
    });
}