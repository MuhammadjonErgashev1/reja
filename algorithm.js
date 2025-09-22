function countLetter(letter,word)
{
    let str=word;
    let number=0;
    let arr=str.split("");
    for(let i=0; i<arr.length; i++)
    {
        if(arr[i].includes(letter))
        {
            number++;
            
        }
    }

    if(number>0){
        return number;
    }
    else console.log("berilgan so'zda siz qidirgan harf mavjud emas")

};

const result=countLetter("a", "harfaaafagafa");
const result1=countLetter("k", "kamalakkka");
console.log(result);
console.log(result1);