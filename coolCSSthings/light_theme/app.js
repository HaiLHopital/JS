const darkButton = document.getElementById('dark');
const lightButton = document.getElementById('light');
const body = document.body;

const theme = localStorage.getItem('theme')
const isSolar = localStorage.getItem('isSolar')

if (theme){
    body.classList.add(theme)
}

darkButton.onclick = () =>{
    body.classList.replace('light','dark');
    localStorage.setItem('theme','dark')
}

lightButton.onclick = () =>{
    body.classList.replace('dark','light');
    localStorage.setItem('theme','light')

}