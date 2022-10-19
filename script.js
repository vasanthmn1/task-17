// let container = document.createElement("div")
// container.classList.add("conatiner")

let main = document.createElement("div")
main.setAttribute("id", "classback")
document.body.append(main)

let result = document.querySelector("#classback")
result.innerHTML = 10

setTimeout(() => {
    result.innerHTML = 10
    setTimeout(() => {
        result.innerHTML = 9
        setTimeout(() => {
            result.innerHTML = 8
            setTimeout(() => {
                result.innerHTML = 7
                setTimeout(() => {
                    result.innerHTML = 6
                    setTimeout(() => {
                        result.innerHTML = 5
                        setTimeout(() => {
                            result.innerHTML = 4
                            setTimeout(() => {
                                result.innerHTML = 3
                                setTimeout(() => {
                                    result.innerHTML = 2
                                    setTimeout(() => {
                                        result.innerHTML = 1
                                        setTimeout(() => {
                                            result.innerHTML = "Happy Independence Day"
                                        })
                                    }, 1000)
                                }, 1000)
                            }, 1000)
                        }, 1000)
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)
}, 1000)
