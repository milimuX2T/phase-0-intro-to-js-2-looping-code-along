function countDown (num){
    let current = num;
    while (current > -1) {
        console.log(current);
        current = current - 1
    }

}
countDown (num)

function writeCards(name, event) {
    const result = [];
    for (let i = 0; i < name.length; i++){
    result.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`)
    }
    return result;  
}
