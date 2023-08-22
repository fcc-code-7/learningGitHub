// Switch

var days;
days=prompt('Enter any Day:');
switch(days){
    case 'Monday':
        console.log('Working Day 1');
        break;   
    case 'Tuesday':
         console.log('Working Day 2');
        break;
    case 'Wednesday':
        console.log('Working Day 3');
        break;
    case 'Thursday':
        console.log('Working Day 4');
        break;
    case 'Friday':
        console.log('Working Day 5');
        break;
    case 'Saturday':
        console.log('Holidays');
        break;
    case 'Sunday':
        console.log('Holidays');
        break;
    default:
        console.log("Write correct day.")
}