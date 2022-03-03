const apiKey = `b947aad3704de4ab96bbf7e1adff6bb6
`;
const searchTemp = () => {
   const city = document.getElementById('city-name').value ;
   const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
   fetch(url)
   .then(res => res.json())
   .then(data => displayTemp(data))
}
const setInnerText = (id, text) => {
   document.getElementById(id).innerText = text;
}
const displayTemp = temp => {
   setInnerText('city', temp.name);
   setInnerText('temp', temp.main.temp);
   setInnerText('weather', temp.weather[0].main);
   
   // set icon 
   const url = `http://openweathermap.org/img/wn/${temp.weather[0].icon}@2x.png`;
   const imgIcon = document.getElementById('icon');
   imgIcon.setAttribute('src', url);
}