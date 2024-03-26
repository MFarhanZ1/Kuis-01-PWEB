const btn1 = document.querySelector('#btn-content-01');
const btn2 = document.querySelector('#btn-content-02');
const btn3 = document.querySelector('#btn-content-03');

btn1.addEventListener('click', function() {
    document.title = "Kuis 1 PWEB (Kuning)";
    document.body.style.backgroundColor = 'yellow';
})
btn2.addEventListener('click', function() {
    document.title = "Kuis 1 PWEB (Merah)";
    document.body.style.backgroundColor = 'red';
})
btn3.addEventListener('click', function() {
    document.title = "Kuis 1 PWEB (Magenta))";
    document.body.style.backgroundColor = 'magenta';
})