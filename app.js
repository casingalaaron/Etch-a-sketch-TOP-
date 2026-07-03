function createDiv(){
    const body = document.querySelector('body')
    const container = document.createElement("div")
    container.className = "container"
    
    body.appendChild(container)
    for(let i=0; i <16; i++){
        const rowContainer = document.createElement("div")
        container.appendChild(rowContainer)
        rowContainer.className = "container row-container"

        for(let j=0; j<16; j++){
            const gridBox = document.createElement('div')
            gridBox.className = "grid"
            rowContainer.appendChild(gridBox)
        }
    }
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

createDiv()
hoverGrid()