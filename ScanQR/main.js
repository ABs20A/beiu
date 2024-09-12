
const apiKey="17a4c2f3e86376da63a1ff1c4343601e";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=HaNoi&units=metric&appid=${apiKey}`
const  search = document.getElementById("search");
search.addEventListener('click', () => {
    const city = document.getElementById("city");
    if(city =='') {
        return;
    }
    
    // fetch(`https://api.openweathermap.org/data/2.5/weather?q={HaNoi}&units=metric&appid=${apiKey}`).then(reponse => reponse.json().then(json => {
        
        // }))
    })
    console.log(apiUrl);