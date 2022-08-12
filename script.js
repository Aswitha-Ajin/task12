
const url = fetch("https://restcountries.com/v3.1/all");
url.then((data)=>data.json())
  .then((value)=>{
  console.log(value);
    foo(value);
  })
  .catch((error)=>console.log(error));

function foo(value) {
    var div = document.createElement("div");
    div.setAttribute("class", "container");
    document.body.append(div);

    var row = document.createElement("div");
    row.setAttribute("class", "row");
    div.append(row);
    value.forEach((country) => {
    var column = document.createElement("div");
    column.setAttribute("class", "col-md-4 col-sm-4");
    row.append(column);

    var card = document.createElement("div");
    div.setAttribute("class", "card");
    div.setAttribute("class", "card");
    column.append(card);
    
    var image = document.createElement("img");
    image.setAttribute("class", "flag-img");
    image.setAttribute("src", country.flags.png);
    image.setAttribute("alt", "flag");
    card.append(image);

    var head = document.createElement("header");
    head.setAttribute("class", "card-header");
    head.innerHTML = country.name.common;
    card.append(head);

    var body = document.createElement("div");
    body.setAttribute("class", "card-body");
    card.append(body);

    
    let region = document.createElement("p");
    region.setAttribute("class", "region");
    region.innerHTML = `<br><b>Region:${country.region}</b>`;
    body.append(region);

    let capital = document.createElement("p");
    capital.setAttribute("class", "capital");
    capital.innerHTML = `<br><b>Capital:</b>${country.capital[0]}`;
    body.append(capital);

    let lat = document.createElement("p");
    lat.setAttribute("class", "lat");
    lat.innerHTML = `<br> <b>Latitude</b>:  ${country.latlng[0]}`;
    body.append(lat);
    let long = document.createElement("p");
    long.setAttribute("class", "long");
    long.innerHTML = `<br> <b>Longitud</b>:  ${country.latlng[1]}`;
    body.append(long);
    
    let code = document.createElement("p");
    code.setAttribute("class", "code");
    code.innerHTML = `<br> <b>Country Code</b>:  ${country.fifa}`;
    body.append(code);

   
    let weather = document.createElement("button");
    weather.setAttribute("class", "btn btn-primary");
    weather.innerText = " Click for weather";
    weather.addEventListener("click",function(){
        weather.innerText ="";
        console.log(country.latlng[0], country.latlng[1])
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${country.latlng[0]}&lon=${country.latlng[1]}&appid=8a1aebf6f8ca462a49f5430600ef3890`)
        .then((data)=>data.json()).then((value)=>{
            console.log(value);
            let para = document.createElement("div");
        para.innerHTML = `<p>Temperature:${value.main.temp};</p>
        <p>Max-temp:${value.main.temp_max}</p>
        <p>Min-temp:${value.main.temp_min}</p>
        <p>Feels like :${value.main.feels_like}</P`
        weather.append(para);
    }).catch((error)=>{console.log(error)});
    })
    body.appendChild(weather);
  });
}