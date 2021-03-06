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
    checkBox() {
        let choiceBox = this.querySelector('.choice-box')
        choiceBox.addEventListener("click", e => {
            let image = this.querySelectorAll('.image')
            if(e.target.classList.contains('image1')){
                for(let i = 0; i < this.querySelectorAll('.avatar').length; i++){
                    this.querySelectorAll('.avatar')[i].innerHTML = `<img class="image-avatars" src="/image/1.png">`
                }
                for(let i = 0; i < image.length; i++){
                    image[i].parentNode.style.borderColor = "rgb(150, 150, 150)"
                }
                e.target.parentNode.style.borderColor = "blue"
            }
            if(e.target.classList.contains('image2')){
                for(let i = 0; i < this.querySelectorAll('.avatar').length; i++){
                    this.querySelectorAll('.avatar')[i].innerHTML = `<img class="image-avatars" src="/image/2.png">`
                }
                for(let i = 0; i < image.length; i++){
                    image[i].parentNode.style.borderColor = "rgb(150, 150, 150)"
                }
                e.target.parentNode.style.borderColor = "blue"
            }
            if(e.target.classList.contains('image3')){
                for(let i = 0; i < this.querySelectorAll('.avatar').length; i++){
                    this.querySelectorAll('.avatar')[i].innerHTML = `<img class="image-avatars" src="/image/3.png">`
                }
                for(let i = 0; i < image.length; i++){
                    image[i].parentNode.style.borderColor = "rgb(150, 150, 150)"
                }
                e.target.parentNode.style.borderColor = "blue"
            }
            if(e.target.classList.contains('image4')){
                for(let i = 0; i < this.querySelectorAll('.avatar').length; i++){
                    this.querySelectorAll('.avatar')[i].innerHTML = `<img class="image-avatars" src="/image/4.png">`
                }
                for(let i = 0; i < image.length; i++){
                    image[i].parentNode.style.borderColor = "rgb(150, 150, 150)"
                }
                e.target.parentNode.style.borderColor = "blue"
            }
            if(e.target.classList.contains('image5')){
                for(let i = 0; i < this.querySelectorAll('.avatar').length; i++){
                    this.querySelectorAll('.avatar')[i].innerHTML = `<img class="image-avatars" src="/image/5.png">`
                }
                for(let i = 0; i < image.length; i++){
                    image[i].parentNode.style.borderColor = "rgb(150, 150, 150)"
                }
                e.target.parentNode.style.borderColor = "blue"
            }
            if(e.target.classList.contains('word')){
                this.querySelector('.word').addEventListener("change", e => {
                    for(let i = 0; i < this.querySelectorAll('.avatar').length; i++){
                        this.querySelectorAll('.avatar')[i].innerHTML = `<p class="text">${this.querySelector('.word').value}</p>`;
                    }
                })
            }
        })
    }
    setImage() {
        let choiceImage = this.querySelector(".choice__image")
        let choiceText = this.querySelector(".choice__text")
        let choiceBox = this.querySelector('.choice-box')
        choiceImage.addEventListener("click", e => {
            choiceImage.style.borderColor = "blue"
            choiceText.style.borderColor = "rgb(150, 150, 150)"
            choiceBox.innerHTML = ""
            for(let i = 1; i <= 5; i++){
                choiceBox.innerHTML += `<div class="box"><img class="image image${i}" src="/image/${i}.png"></div>`
            }
        })
        this.checkBox()
    }
    setText() {
        let choiceImage = this.querySelector(".choice__image")
        let choiceText = this.querySelector(".choice__text")
        let choiceBox = this.querySelector('.choice-box')

        choiceText.addEventListener("click", e => {
            choiceText.style.borderColor = "blue"
            choiceImage.style.borderColor = "rgb(150, 150, 150)"
            choiceBox.innerHTML = `<input class="word" type="text" maxlength="25" placeholder="?????????????? ??????????">`
        })

        this.querySelector(".choice__text").addEventListener("click", e => {
            this.querySelector(".choice__text").style.borderColor = "blue"
            this.querySelector(".choice__image").style.borderColor = "rgb(150, 150, 150)"

        })
        this.checkBox()
    }
    connectedCallback() {
        this.innerHTML = `
            <header class="header">
                <h2>???????????????? ??????????</h2>
                <div class="controls">
                    <button class="box square"></button>
                    <button class="box roundness"></button>
                    <button class="box circle"></button>
                </div>
                <div class="choice">
                    <button class="button choice__image">????????????????</button>
                    <button class="button choice__text">??????????</button>
                </div>
                <div class="choice-box"></div>
                <button class="button randomButton" type="submit">?????????? ????????</button>
            </header>
            <div class="avatars"></div>
        `

        for(let i = 0; i < 12; i++){
            this.querySelector('.avatars').innerHTML += '<div class="box avatar"></div>'
        }
        
        this.setRandomColor()
        this.setForm("square")
        this.setImage()
        this.setText()

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
// <input class="word" type="text" maxlength="25" placeholder="?????????????? ??????????">
