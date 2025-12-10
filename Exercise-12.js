btn = document.body.getElementsByClassName("button")[0]
function createCard(title, cName, views, monthsOld,Duration,thumbnail) {
    document.body.getElementsByClassName("miniBox1")[0].innerHTML = `${title}`

    document.body.getElementsByClassName("cell")[0].innerHTML = `${cName}`

    if (1000 <= views <= 999999) {
        views = views / 1000
        document.body.getElementsByClassName("cell")[1].innerHTML = `${views}K views`
    }

    else if (1000000 <= views <= 999999999) {
        views = views / 1000000
        document.body.getElementsByClassName("cell")[1].innerHTML = `${views}M views`
    }

    else if (1000000000 <= views <= 999999999999) {
        views = views / 1000000000
        document.body.getElementsByClassName("cell")[1].innerHTML = `${views}B views`
    }

    else if (1000000000000 <= views) {
        views = views / 1000000000000
        document.body.getElementsByClassName("cell")[1].innerHTML = `${views}T views`
    }

    else {
        document.body.getElementsByClassName("cell")[1].innerHTML = `${views} views`
    }

    document.body.getElementsByClassName("cell")[2].innerHTML = `${monthsOld} mothns ago`

    document.body.getElementsByClassName("duration")[0].innerHTML = `<b>${Duration}</b>`

    let img = document.createElement("img")
    img.src = `${thumbnail}`
    img.alt = "Thumbnail"
    img.width = 220
    img.height = 112

    document.getElementsByClassName("image")[0].append(img)
}
btn.addEventListener("click", () => {
    createCard("Installing VS Code & How Websites Work | Sigma Web Development Course-Tutorial #1", "CodeWithHarry",727000,2,"31:20","https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDf-xrqgUw55JSfKsoykKVhngkzRA")
})

