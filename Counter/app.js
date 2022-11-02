let count = 0;

const value = document.querySelector('#value');


const btns = document.querySelectorAll('.btn');

btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const styles = e.currentTarget.classList;
        if(styles.contains('btn-danger')){
            count--;
        }
        else if(styles.contains('btn-primary')){
            count = 0;

        }
        else if(styles.contains('btn-success')){
            count++;
        }
        if(count == 0){
            value.style.color = 'green';
        }
        if(count > 0){
            value.style.color = 'blue';
        }
        if(count < 0){
            value.style.color = 'red';
        }
        value.textContent = count;

    })
});