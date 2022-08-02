const colorList = ['pallet', 'viridian', 'pewter', 'cerulean', 'vermillion', 'lavender', 'celadon', 'saffron', 'fuschia', 'cinnabar']

// window.onload = () => {
//     renderCacOMau();
//     document.querySelector('.lavender').onclick = () => {
//         doiMauNgoiNha('lavender')
//     }
// }

const renderCacOMau = () => {
    html = '';
    for (const value of colorList) {
        if (value === 'pallet') {
            html += `
        <button class="color-button ${value} active"></button>
        `
        } else {
            html += `
        <button class="color-button ${value}"></button>
        `
        }
    }
    document.querySelector('#colorContainer').innerHTML = html;
}

renderCacOMau()

document.querySelector('.pallet').onclick = () => {
    doiMauNgoiNha('pallet');
    xoaIcon('pallet');
}

document.querySelector('.viridian').onclick = () => {
    doiMauNgoiNha('viridian');
    xoaIcon('viridian');
}

document.querySelector('.pewter').onclick = () => {
    doiMauNgoiNha('pewter');
    xoaIcon('pewter');
}

document.querySelector('.cerulean').onclick = () => {
    doiMauNgoiNha('cerulean');
    xoaIcon('cerulean');
}

document.querySelector('.vermillion').onclick = () => {
    doiMauNgoiNha('vermillion');
    xoaIcon('vermillion');
}

document.querySelector('.lavender').onclick = () => {
    doiMauNgoiNha('lavender');
    xoaIcon('lavender');
}

document.querySelector('.celadon').onclick = () => {
    doiMauNgoiNha('celadon');
    xoaIcon('celadon');
}

document.querySelector('.saffron').onclick = () => {
    doiMauNgoiNha('saffron');
    xoaIcon('saffron');
}

document.querySelector('.fuschia').onclick = () => {
    doiMauNgoiNha('fuschia');
    xoaIcon('fuschia');
}

document.querySelector('.cinnabar').onclick = () => {
    doiMauNgoiNha('cinnabar');
    xoaIcon('cinnabar');
}


const doiMauNgoiNha = (color) => {
    for (const value of colorList) {
        if (value === color) {
            document.querySelector(`.${value}`).className = `color-button ${value} active`
            document.querySelector('#house').className = `house ${value}`;
        }
    }
}

const xoaIcon = (color) => {
    for (const index in colorList) {
        if (colorList[index] !== color) {
            document.querySelector(`.${colorList[index]}`).className = `color-button ${colorList[index]}`
        }
    }
}