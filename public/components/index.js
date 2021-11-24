class Avatar extends HTMLElement {
    generateRandomColor() {
        const getNumber = (max=256, min=10) => Math.floor(Math.random() * (max - min) + min)
        let randomColor = `linear-gradient(70deg, rgb(${getNumber()}, ${getNumber()}, ${getNumber()}), rgb(${getNumber()}, ${getNumber()}, ${getNumber()}))`
        return randomColor
    }
    setRandomColor() {
        let avatar = this.querySelector('.avatar')
        avatar.style.background = this.generateRandomColor()
    }
    connectedCallback() {
        this.innerHTML = `
            <div class="controls">
                <button></button>
                <button></button>
            </div>
            <div class="avatar"></div>
            <input class="randomButton" type="submit" value="Создать новую">
        `
        this.setRandomColor()
        this.querySelector('.randomButton').addEventListener("click", e => {
            this.setRandomColor()
        })
    }
    
}
customElements.define("custom-avatar", Avatar)