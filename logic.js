let cards = ["😂", "🥰", "🤔", "🙂", "😍", "😎", "🤩", "😃", "😂", "🥰", "🤔", "🙂", "😍", "😎", "🤩", "😃"]
let temp
let temp2
let tempnum1
let tempnum2
let tempbreak
let guessedcorrectly = 0
randomize()
createpexeso()

function createpexeso() {
    let outerdiv = document.getElementById("outerdivid")
    for (let i = 0; i < cards.length; i++) {
        let div = document.createElement("div")
        div.id = "pexeso" + i
        div.innerHTML += "<h1>" + cards[i] + "</h1>"
        div.innerHTML += "<h1 class='firstrow' id='hidden'>" + " " + "</h1>"
        outerdiv.appendChild(div)
    }
    document.body.appendChild(outerdiv)

    for (let i = 0; i < cards.length; i++) {
        let test = document.getElementById("hidden")
        test.id = i
    }
    check()
}

function check() {
    let count = 0
    for (let i = 0; i < cards.length; i++) {
        document.getElementById(i).addEventListener("click", function clicked() {
            document.getElementById(i).style.display = "none"
            count++
            if (count === 1) {
                temp = cards[i]
                tempnum1 = i
            }
            if (count === 2) {
                temp2 = cards[i]
                tempnum2 = i
                if (temp === temp2) {
                    tempbreak = true
                    guessedcorrectly++
                    if (guessedcorrectly === 8) {
                        winner()
                    }
                }
                count = 0
                setTimeout(timeout, 1000)
            }
        })

        function timeout() {
            for (let j = 0; j < cards.length; j++) {
                if (tempbreak === true) {
                    tempbreak = false
                    break
                }
                document.getElementById(tempnum1).style.display = "block"
                document.getElementById(tempnum2).style.display = "block"
            }
        }
    }
}

function randomize() {
    for (let i = cards.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1))
        let temp = cards[i]
        cards[i] = cards[j]
        cards[j] = temp
    }
}

function winner() {
    document.getElementById("win").style.display = "block"
}