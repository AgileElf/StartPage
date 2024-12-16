"use strict";




count()
setInterval(count, 1000)
function count()
{
    let time = new Date()
    let hours = time.getHours()
    let mins = time.getMinutes()
    let seconds = time.getSeconds()
    let timeStatment = ""
    if (hours > 12)
    {
        hours -= 12;
        timeStatment += " PM"
    } else {
        timeStatment += " AM"
    }
    if(mins < 10)
    {
        mins = "0" + mins
    }
    if(seconds < 10)
        seconds = "0" + seconds
    document.getElementById('time').innerHTML = hours + " : " + mins + " : " + seconds + timeStatment
    
}
document.addEventListener('keydown', (e)=> 
{
    if(e.key == "Enter")
    {
        search()
    }
})
document.getElementById('searchButton').addEventListener('click', search)

function search(){
    let content = document.getElementById('searchBox').value
    let searchWords = content.split(" ");
    let link = "https://www.google.com/search?q="
    for(let x = 0; x < searchWords.length; x++)
    {
        link += searchWords[x] + "+"
    }
    window.location.href = link;
    document.getElementById('searchBox').value = ""
}

document.getElementById('todoAdd').addEventListener('click', ()=>
{
    let todo = document.getElementById('todo').value
    let todo_item = document.createElement("li")
    todo_item.innerHTML = todo;
    todo_item.id = "todoItem"
    todo_item.addEventListener('click', ()=>
    {
        document.getElementById('todoList').removeChild(todo_item)
    })
    document.getElementById('todoList').appendChild(todo_item)
    document.getElementById('todo').value = ""
})
document.getElementById('roll').addEventListener('click', ()=> {
    let sides = parseInt(document.getElementById('diceSides').value)
    let numberRolled = Math.floor(Math.random() * sides)
    document.getElementById('diceInfo').innerHTML = "You rolled a " + numberRolled + " on a " + sides + " sided dice!"
    document.getElementById('diceSides').value = ""
})
let pressed = false;
document.getElementById('body').addEventListener('pointerdown', pointerDown)
function pointerDown(){
    pressed = true;
}
document.getElementById('body').addEventListener('pointerup', pointerUp)
function pointerUp(){
    pressed = false;
}

document.addEventListener('keydown', (e)=>
    {
        if(e.key == "Shift" || pressed == true)
        {
            if(e.target.className == "newLink")
            {
                e.target.remove()
            }
        }
    })



document.getElementById('add').addEventListener('click', addLink)






function addLink(e)
{
const popup = document.getElementById("popup");
popup.classList.remove("hidden");

document.getElementById('closePopup').addEventListener("click", () => {
  popup.classList.add("hidden");
});

document.getElementById('addShortcut').addEventListener('click', createLink)

function createLink()
{
    if(document.getElementById('links').childElementCount < 6)
    {
    let link = document.getElementById('addLink').value
    document.getElementById('addLink').value = ""

    const img = document.createElement('img')
    img.src = "https://www." + link + ".com/favicon.ico"
    img.height = 20

    const anchor = document.createElement('a')
    anchor.href = "https://www." + link + ".com"
    anchor.className = "newLink"

    anchor.appendChild(img)

    document.getElementById('links').insertBefore(anchor, document.getElementById('removeThis'))

    }


    document.getElementById('addShortcut').removeEventListener('click', createLink)
    popup.classList.add("hidden")
}
    
}



