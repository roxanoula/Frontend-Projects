const totalColors = 100;
const colorsURL = "http://thecolorapi.com/id" + totalColors

async function displayColors(colors) {
    let colorsHtml =``

    colors.forEach(color => {
        colorsHtml += `<div class="my-color" style="background-color:${color}"> </div>`
    })

    document.body.innerHTML =`<div class="my-colors">${colorsHtml}</div>`
}

/* 

    
   
    
    Set the count to 100 colors, update the .my-color class to maintain the grid structure
*/

async function getColors(total=1) {
    try {
        const colorsPromise = await fetch("http://thecolorapi.com/id")
        const data = await colorsPromise.json()
        return data
    }catch (err) {
        return randomHex(total)
    }
    
}

function randomHex(total) {
    const hexMax = 256 * 256 * 256;
    const collorsArray = []

    for (let i=0; i<total; i++)
        collorsArray[i] = '#' + Math.floor(Math.random() * hexMax).toString(16).toUpperCase().padStart(6, '0');
    
    return collorsArray 
  }

  
  let colorsPromise = getColors(totalColors)
    .then(colors => displayColors(colors))
    .catch(err => console.error(err.status))
  