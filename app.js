
// set initial count
let count = 0;

// select value and buttons

const value = document.getElementById('value');
const btns = document.querySelectorAll('.btn');

btns.forEach(function(btn){
    btn.addEventListener('click',function(e){

        const styles = e.currentTarget.classList;

        if(styles.contains('decrease')){
            count--;
        } else if (styles.contains('increase')){
            count++;
        } else {
            count = 0;
        };

        if(count > 0){
            value.style.color = 'green';
        }else if (count < 0){
            value.style.color = 'red';
        } else if (count === 0){
            value.style.color = '#222';
        }
        value.textContent = count;


        // if(btn.classList.contains('decrease')){
        //     value.textContent = count;
        //     count--;
        // }else if(btn.classList.contains('increase')){
        //     value.textContent = count;
        //     count++;
        // } else {
        //     count = 0;
        //     value.textContent = count;
        // }

    })
})