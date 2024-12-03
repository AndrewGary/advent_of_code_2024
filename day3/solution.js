const fsPromises = require('fs').promises;
const inputText = ``

const part1 = async () => {

    try{

        /**
         *  'mul(189,189)', 'mul(490,144)', 'mul(252,195)', 'mul(274,206)',
         */
        const text = (await fsPromises.readFile('./input.txt')).toString();
        const regex = /mul\(\d{1,3},\d{1,3}\)/g;

        const answer = text.match(regex).map(item => item.replace('mul(', '')).map(item => item.replace(')', '')).map(item => item.split(',')).map(item => {
            const a1 = parseInt(item[0])
            const v2 = parseInt(item[1])

            return a1 * v2;
        }).reduce((sum, currentNumber) => {
            return sum + currentNumber
        }, 0)
        // const matches = (text.match(regex)).map(item => {
        //     return item.replace('mul(', '').replace(')', '').split(',').reduce((accumulator, currentValue) => accumulator + (parseInt(currentValue[0] * parseInt(currentValue[1]))), 0)
        // });

        console.log(answer);
        // console.log(matches)
        // console.log(matches.length);

        process.exit();
        const lines = inputText.split('\n');



        const lines2 = lines.map(item => {

        })


        const array1 = [];
        const array2 = [];

        for(const line of lines){
            
        }

        
    }catch(error){
        console.log(error)
    }
}

// part1();

const part2 = async () => {

    try{

        /**
         *  'mul(189,189)', 'mul(490,144)', 'mul(252,195)', 'mul(274,206)',
         */
        const text = (await fsPromises.readFile('./input.txt')).toString();

        const arrayString = Array.from(text);
        const regex = /^mul\(\d{1,3},\d{1,3}\)/;


        let testing = '';
        for(let i = 0; i < 100; i++){
            testing += text[i];
        }

        // console.log(testing);
        // console.log(testing.length);
        // process.exit();
        
        let active = true;
        let sum = 0;
        for(let i = 0; i < text.length; i++){
            let start = i;
            let end = i + 12;

            const idk = text.slice(start, end);

            if(idk.startsWith('do()')){
                if(active === false){
                    active = true;
                }
                i += 3
                continue;
            }

            if(idk.startsWith(`don't()`)){
                if(active === true){
                    active = false;   
                }
                i += 6
                continue;
            }

            if(regex.test(idk) && active){

                let numbersString = '';

                for(let ii = 4; ii < idk.length; ii++){
                    if(idk[ii] === ')') break;
                    numbersString += idk[ii];
                }

                // console.log(text);
                console.log(numbersString);
                console.log(idk);
                console.log('');

                const values = numbersString.split(',');

                sum += (parseInt(values[0]) * parseInt(values[1]))
            }



        }

        console.log(sum);
        
    }catch(error){
        console.log(error)
    }
}

part2();