let counter = 0;

const btn = document.getElementById("btn");
const number = document.getElementById("counter");

btn.addEventListener("click", () => {
    counter++;

        number.textContent = counter;

            if(counter === 10){
                    alert("🎉 You clicked 10 times!");
                        }
                        });