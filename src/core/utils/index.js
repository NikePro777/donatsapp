import moment from 'moment'

export function calculateSumOfNumbers(numbers){
    let numb = 0
    numbers.forEach(num => {
        numb += num
    });
    return numb
}

export  function getFormattedTime (date){
    return moment(date).format('MMMM Do YYYY, h:mm:ss a')
}