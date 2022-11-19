function getPlanetsDetails() {

    fetch("https://swapi.dev/api/planets/").then((resp)=>resp.json()).then((data)=>{

        data.results.forEach(planet=>{
            let tbody = document.getElementById("planets");
            let row = document.createElement('tr');
            let nameCol = document.createElement('td');
            nameCol.innerHTML = planet.name;
            let diameterCol = document.createElement('td');
            diameterCol.innerHTML = planet.diameter;

            //...

            row.appendChild(nameCol);
            row.appendChild(diameterCol);
            tbody.append(row);
        }
        )

    }
    )
}
