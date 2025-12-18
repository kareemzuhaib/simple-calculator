let string = "";

let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach(button => {

    button.addEventListener('click', (e) => {

        if (e.target.innerHTML == '=') {
            string = eval(string);
            document.querySelector('input').value = string;
        }

        else if (e.target.innerHTML == 'AC') {
            string = ""
            document.querySelector('input').value = string;
        }

        else if (e.target.innerHTML == 'C') {
            string = string.substring(0, string.length - 1);
            document.querySelector('input').value = string;
        }

        else {
            let value = e.target.innerHTML;

            if (value === 'X'){
                value = '*';
            }

            string = string + value;
            document.querySelector('input').value = string;
        }

    })
    

})
