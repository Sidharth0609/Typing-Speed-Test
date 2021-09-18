const setOfWords = ["My name is Sidharth and I am working hard to excel",
            "Good morning have a nice day and work hard towards your goal",
            "I am an engineer and engineers help the society"];

        const msg = document.getElementById('msg');
        const typeWords = document.getElementById('mywords');
        const btn = document.getElementById('btn');
        let startTime, endTime;

        const playGame = () => {
            let randomNumber = Math.floor(Math.random() * setOfWords.length);
            msg.innerText = setOfWords[randomNumber];
            let date = new Date();
            startTime = date.getTime();
            btn.innerText = "Done";
        }
        const endPlay = () => {
            let date = new Date();

            endTime = date.getTime();

            let totalTime = ((endTime - startTime) / 1000);

            let totalStr = typeWords.value;

            let wordCount = wordCounter(totalStr);

            let speed = Math.round((wordCount / totalTime) * 60);

            let finalMsg = "You typed total at " + speed + " Words per minutes ";

            finalMsg += compareWords(msg.innerText, totalStr);
            msg.innerText = finalMsg;
        };
        const compareWords = (str1, str2) => {
            let words1 = str1.split(" ");
            let words2 = str2.split(" ");
            let cnt = 0;
            words1.forEach(function (item, index) {
                if (item == words2[index]) {
                    cnt++;
                }
            })
            let errorWords = (words1.length - cnt);
            let efficiency = (((words1.length - errorWords) / words1.length) * 100);
            var n = efficiency.toFixed(2);
            return (cnt + " correct out of " + words1.length + " words and the total number of error are " + errorWords + " with efficiency of " + n + "%.")
        }
        const wordCounter = (str) => {
            let response = str.split(" ").length;
            return response;
        }
        btn.addEventListener('click', function () {
            if (this.innerText == 'Start') {
                typeWords.disabled = false;
                playGame();
            } else if (this.innerText == "Done") {
                typeWords.disabled = true;
                btn.innerText = "Start";
                endPlay();
            }
        }) 