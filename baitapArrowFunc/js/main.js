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

document.querySelector('.lavender').onclick = () => {
    doiMauNgoiNha('lavender')
}

const doiMauNgoiNha = (color) => {
    for (const value of colorList) {
        if (value === color) {
            document.querySelector(`.${value}`).className = `color-button ${value} active`
            document.querySelector('#house').className = `house ${value}`;
        }
    }
}