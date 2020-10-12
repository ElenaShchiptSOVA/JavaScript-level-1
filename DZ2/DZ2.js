//#3
function operations() {
    let a = -3;
    let b = -6;
    if ((a >= 0) && (b >= 0)){
        alert(a-b);
    } else if ((a < 0) && (b < 0)){
        alert(a*b);
    } else {
        alert(a+b);
    }
}

//#4
function outputSW() {
    let a = 16;
    switch (a) {
        case 1:
            console.log(a);
            ++a 
        case 2:
            console.log(a);
            ++a 
        case 3:
            console.log(a);
            ++a 
        case 4:
            console.log(a);
            ++a 
        case 5:
            console.log(a);
            ++a 
        case 6:
            console.log(a);
            ++a 
        case 7:
            console.log(a);
            ++a 
        case 8:
            console.log(a);
            ++a 
        case 9:
            console.log(a);
            ++a 
        case 10:
            console.log(a);
            ++a 
        case 11:
            console.log(a);
            ++a 
        case 12:
            console.log(a);
            ++a
        case 13:
            console.log(a);
            ++a 
        case 14:
            console.log(a);
            ++a 
        case 15:
            console.log(a);
            break;
        default:
            console.log('число вне диапазона');  
        break;
    }
}

//#5

function add(a, b){
    a = +prompt ('введите первое число');
    b = +prompt ('введите второе число');
    console.log (a);
    console.log (b);
    alert (a+b);
    console.log (a+b);
}
function subtract(a, b){
    a = +prompt ('введите первое число');
    b = +prompt ('введите второе число');
    console.log (a);
    console.log (b);
    alert (a-b);
    console.log (a-b);
}
function multiply(a, b){
    a = +prompt ('введите первое число');
    b = +prompt ('введите второе число');
    console.log (a);
    console.log (b);
    alert (a*b);
    console.log (a*b);
}
function divide(a, b){
    a = +prompt ('введите первое число');
    b = +prompt ('введите второе число');
    console.log (a);
    console.log (b);
    alert (a/b);
    console.log (a/b);
}

//#6 
function mathOperation(operation) {
    operation = prompt ('введите функцию');
    switch (operation){
        case 'add':
            add()
        break; 
        case 'subtract':
            subtract()
        break; 
        case 'multiply':
            multiply()
        break; 
        case 'divide':
            divide()
        break; 
        default:
            alert('не существующая операция'); 
        break; 
    }
}