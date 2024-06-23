

let main = document.getElementsByTagName('main')
// console.log(main);

let fetching = async () => {
    let resp = await fetch(` https://restcountries.com/v3.1/all`)
    let data = await resp.json();
    // console.log(data);
    data.map((value) => {
        // console.log(value);
        display(value)
    })
}

let display = (value) => {

    let div = document.createElement('div');
    // div.setAttribute
  div.innerHTML = `
     <section class="section1">
            <div><h1>Country Name</h1>${value.name.common}</div>
           <img src="${value.flags.png}" alt="" srcset="">
        </section>

        <section class="section2">
            <div><h3>Capital</h3>${value.capital}</div>
            <div><h3>Location</h3><a href="${value.maps.googleMaps}">Country Location</a></div>
            <div><h3>Area</h3>${value.area}</div>
            <div><h3>Continents</h3>${value.continents}</div>
            <div><h3>Population</h3>${value.population}</div>
        </section>`

 main[0].append(div)
}

fetching()

