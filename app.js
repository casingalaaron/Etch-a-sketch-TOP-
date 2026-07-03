function createGrid(size=16){
    const body = document.querySelector('body')
    const container = document.createElement("div")
    container.className = "container"
    
    body.appendChild(container)
    for(let i=0; i <size; i++){
        const rowContainer = document.createElement("div")
        container.appendChild(rowContainer)
        rowContainer.className = "container row-container"

        for(let j=0; j<size; j++){
            const gridBox = document.createElement('div')
            gridBox.className = "grid"
            rowContainer.appendChild(gridBox)
        }
    }
    const gridCount = document.querySelectorAll('.grid').length
    console.log(gridCount)
}
function hoverGrid(){
    const gridBoxes = document.querySelectorAll('.grid')

    gridBoxes.forEach((grid) => {
        grid.addEventListener('mouseenter', (event) => {
            grid.style.backgroundColor = changeColor()
        })
    })

}

function changeColor(){
    return "#" + Math.round(Math.random() * 1000000)
}

function enterButton(){
    const button = document.createElement('button')
    const body = document.querySelector('body')

    button.textContent = "Change Size"
    button.className = "changeSizeBtn"
    body.appendChild(button)
    button.addEventListener('click', () => {
        const size = prompt("Maximum size is 100x100\n\nEnter size:")
        if(size){
            console.log(size)
            const container = document.querySelector(".container")
            const rowContainer = document.querySelectorAll(".row-container")
            container.remove()
            createGrid(size)
            hoverGrid()
        }
    })
}

function removeGrid(){

}
enterButton()
createGrid()
hoverGrid()
