const cards = document.querySelector(".cards")

const createCards = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json()
        console.log(data);
        data.forEach(item => {
            const div = document.createElement("div")
            div.setAttribute("class", "card")

            const title = document.createElement("h2");
            title.setAttribute("class", "cardTitle");
            title.innerText = item.title

            const desc = document.createElement("p");
            desc.setAttribute("class", "cardDesc");
            desc.innerText = item.body

            const img = document.createElement("img")
            img.setAttribute("src", "../images/card.jpg")

            div.append(img, title, desc)
            cards.append(div)
        })
    } catch (e) {
        console.log(e);
    }
}
createCards()
