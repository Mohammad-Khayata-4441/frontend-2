let counter = 0;
const intervalId = setInterval(() => {
    counter++;
    console.log("العدد:", counter);
    if (counter === 5) {
        clearInterval(intervalId); // إيقاف التكرار
    }
}, 1000);