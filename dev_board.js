let allMessege = 

document.getElementById('cmplt-1-btn')
    .addEventListener('click', function () {
        alert("hello world")
        const btnEl = document.getElementById('cmplt-1-btn');


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

    document.getElementById('cmplt-2-btn')
    .addEventListener('click', function () {
        alert("hello world")
        const btnEl = document.getElementById('cmplt-2-btn');


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

