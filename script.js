let string = "";
let statement = '';
const buttons = document.querySelectorAll('.button');
const statementbox = document.querySelector('.statement');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            document.querySelector('input').value = string;
            statementbox.innerHTML = statement;
        } 
        else if (e.target.innerHTML == 'C') {
            string='';
            document.querySelector('input').value = string;
            statementbox.innerHTML = '';
        } 
        else if (e.target.innerHTML == '⯇') {
            string = string.slice(0, string.length - 1);;
            document.querySelector('input').value = string;
        }
        else {
            string = string + e.target.innerHTML;
            statement = string;
            document.querySelector('input').value = string;
        }
    })
})