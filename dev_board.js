
// rendom color section 
document.getElementById('rendom-color')
    .addEventListener('click', function () {
console.log('button clicked')        // const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        // document.body.style.backgroundColor = randomColor;
    });









document.getElementById('side-bur-messege-1').style.display = "none";

document.getElementById('cmplt-1-btn')
    .addEventListener('click', function () {
        alert("hello world")
        const btnEl = document.getElementById('cmplt-1-btn');

        document.getElementById('side-bur-messege-1').style.display = "block";


        const pointNumber5 = document.getElementById('point-number-5').innerText;
        const pointNumber23 = document.getElementById('point-number-23').innerText;
        // console.log(typeof pointNumber23);

        // converted string to number 
        const convertedPointNumber5 = parseInt(pointNumber5);
        const convertedPointNumber23 = parseInt(pointNumber23);

        if (convertedPointNumber5 > 0) {
            const sum = convertedPointNumber5 - 1;
            const sum2 = convertedPointNumber23 + 1;
            document.getElementById('point-number-5').innerText = sum;
            document.getElementById('point-number-23').innerText = sum2;
            btnEl.disabled = true;
        }

        else {
            alert('not count your number');
        }


    });


// button 2
document.getElementById('side-bur-messege-2').style.display = "none";

document.getElementById('cmplt-2-btn')
    .addEventListener('click', function () {
        alert("hello world")
        const btnEl = document.getElementById('cmplt-2-btn');

        document.getElementById('side-bur-messege-2').style.display = "block";

        const pointNumber5 = document.getElementById('point-number-5').innerText;
        const pointNumber23 = document.getElementById('point-number-23').innerText;
        // console.log(typeof pointNumber23);

        // converted string to number 
        const convertedPointNumber5 = parseInt(pointNumber5);
        const convertedPointNumber23 = parseInt(pointNumber23);

        if (convertedPointNumber5 > 0) {
            const sum = convertedPointNumber5 - 1;
            const sum2 = convertedPointNumber23 + 1;
            document.getElementById('point-number-5').innerText = sum;
            document.getElementById('point-number-23').innerText = sum2;
            btnEl.disabled = true;
        }

        else {
            alert('not count your number');
        }


    });

// button 3
document.getElementById('side-bur-messege-3').style.display = "none";

document.getElementById('cmplt-3-btn')
    .addEventListener('click', function () {
        alert("hello world")
        const btnEl = document.getElementById('cmplt-3-btn');

        document.getElementById('side-bur-messege-3').style.display = "block";

        const pointNumber5 = document.getElementById('point-number-5').innerText;
        const pointNumber23 = document.getElementById('point-number-23').innerText;
        // console.log(typeof pointNumber23);

        // converted string to number 
        const convertedPointNumber5 = parseInt(pointNumber5);
        const convertedPointNumber23 = parseInt(pointNumber23);

        if (convertedPointNumber5 > 0) {
            const sum = convertedPointNumber5 - 1;
            const sum2 = convertedPointNumber23 + 1;
            document.getElementById('point-number-5').innerText = sum;
            document.getElementById('point-number-23').innerText = sum2;
            btnEl.disabled = true;
        }

        else {
            alert('not count your number');
        }


    });

// button 4
document.getElementById('side-bur-messege-4').style.display = "none";


document.getElementById('cmplt-4-btn')
    .addEventListener('click', function () {
        alert("hello world")
        const btnEl = document.getElementById('cmplt-4-btn');

        document.getElementById('side-bur-messege-4').style.display = "block";

        const pointNumber5 = document.getElementById('point-number-5').innerText;
        const pointNumber23 = document.getElementById('point-number-23').innerText;
        // console.log(typeof pointNumber23);

        // converted string to number 
        const convertedPointNumber5 = parseInt(pointNumber5);
        const convertedPointNumber23 = parseInt(pointNumber23);

        if (convertedPointNumber5 > 0) {
            const sum = convertedPointNumber5 - 1;
            const sum2 = convertedPointNumber23 + 1;
            document.getElementById('point-number-5').innerText = sum;
            document.getElementById('point-number-23').innerText = sum2;
            btnEl.disabled = true;
        }

        else {
            alert('not count your number');
        }


    });

// button 5
document.getElementById('side-bur-messege-5').style.display = "none";


document.getElementById('cmplt-5-btn')
    .addEventListener('click', function () {
        alert("hello world")
        const btnEl = document.getElementById('cmplt-5-btn');

        document.getElementById('side-bur-messege-5').style.display = "block";

        const pointNumber5 = document.getElementById('point-number-5').innerText;
        const pointNumber23 = document.getElementById('point-number-23').innerText;
        // console.log(typeof pointNumber23);

        // converted string to number 
        const convertedPointNumber5 = parseInt(pointNumber5);
        const convertedPointNumber23 = parseInt(pointNumber23);

        if (convertedPointNumber5 > 0) {
            const sum = convertedPointNumber5 - 1;
            const sum2 = convertedPointNumber23 + 1;
            document.getElementById('point-number-5').innerText = sum;
            document.getElementById('point-number-23').innerText = sum2;
            btnEl.disabled = true;
        }

        else {
            alert('not count your number');
        }


    });

// button 6
document.getElementById('side-bur-messege-6').style.display = "none";


document.getElementById('cmplt-6-btn')
    .addEventListener('click', function () {
        alert("hello world")
        const btnEl = document.getElementById('cmplt-6-btn');

        document.getElementById('side-bur-messege-6').style.display = "block";

        const pointNumber5 = document.getElementById('point-number-5').innerText;
        const pointNumber23 = document.getElementById('point-number-23').innerText;
        // console.log(typeof pointNumber23);

        // converted string to number 
        const convertedPointNumber5 = parseInt(pointNumber5);
        const convertedPointNumber23 = parseInt(pointNumber23);

        if (convertedPointNumber5 > 0) {
            const sum = convertedPointNumber5 - 1;
            const sum2 = convertedPointNumber23 + 1;
            document.getElementById('point-number-5').innerText = sum;
            document.getElementById('point-number-23').innerText = sum2;
            btnEl.disabled = true;
        }

        else {
            alert('not count your number');
        }


    });


// clear hestory button 

document.getElementById('clear-hestory')
    .addEventListener('click', function () {
        document.getElementById('all-messege').style.display = "none"
        alert("clear all hestory");
    })



