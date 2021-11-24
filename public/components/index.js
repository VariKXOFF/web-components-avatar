class Avatar extends HTMLElement {
    generateRandomColor() {
        const getNumber = (max=256, min=10) => Math.floor(Math.random() * (max - min) + min)
        let randomColor = `linear-gradient(70deg, rgb(${getNumber()}, ${getNumber()}, ${getNumber()}), rgb(${getNumber()}, ${getNumber()}, ${getNumber()}))`
        return randomColor
    }
    setRandomColor() {
        let avatar = this.querySelectorAll('.avatar')
        for(let i = 0; i < avatar.length; i++){
            avatar[i].style.background = this.generateRandomColor()
        }
    }
    setForm(form) {
        let avatar = this.querySelectorAll('.avatar')
        switch (form) {
            case "square":
                for(let i = 0; i < avatar.length; i++){
                    avatar[i].style.borderRadius = "0";
                }
                this.querySelector('.square').style.borderColor = "blue"
                this.querySelector('.roundness').style.borderColor = "rgb(150, 150, 150)"
                this.querySelector('.circle').style.borderColor = "rgb(150, 150, 150)"
                break
            case "roundness":
                for(let i = 0; i < avatar.length; i++){
                    avatar[i].style.borderRadius = "16px";
                }
                this.querySelector('.roundness').style.borderColor = "blue"
                this.querySelector('.square').style.borderColor = "rgb(150, 150, 150)"
                this.querySelector('.circle').style.borderColor = "rgb(150, 150, 150)"
                break
            case "circle":
                for(let i = 0; i < avatar.length; i++){
                    avatar[i].style.borderRadius = "50%";
                }
                this.querySelector('.circle').style.borderColor = "blue"
                this.querySelector('.square').style.borderColor = "rgb(150, 150, 150)"
                this.querySelector('.roundness').style.borderColor = "rgb(150, 150, 150)"
                break
        }
    }
    connectedCallback() {
        this.innerHTML = `
            <header class="header">
                <h2>Выберите форму</h2>
                <div class="controls">
                    <button class="box square"></button>
                    <button class="box roundness"></button>
                    <button class="box circle"></button>
                </div>
                <input class="word" type="text" maxlength="25" placeholder="Введите текст">
                <input class="randomButton" type="submit" value="Новый цвет">
            </header>
            <div class="avatars"></div>
        `
        for(let i = 0; i < 12; i++){
            this.querySelector('.avatars').innerHTML += '<div class="box avatar"><p class="text"></p></div>'
        }
        this.setRandomColor()
        this.setForm("square")
        this.querySelector('.word').addEventListener("change", e => {
            for(let i = 0; i < this.querySelectorAll('.avatar').length; i++){
                this.querySelectorAll('.avatar')[i].querySelector('.text').innerText = this.querySelector('.word').value;
            }
        })
        this.querySelector('.randomButton').addEventListener("click", e => {
            this.setRandomColor()
        })
        this.querySelector('.square').addEventListener("click", e => {
            this.setForm("square")
        })
        this.querySelector('.roundness').addEventListener("click", e => {
            this.setForm("roundness")
        })
        this.querySelector('.circle').addEventListener("click", e => {
            this.setForm("circle")
        })
    }
    
}
customElements.define("custom-avatar", Avatar)