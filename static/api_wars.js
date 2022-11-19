function getPlanetsDetails() {
    fetch("https://swapi.dev/api/planets/").then((resp)=>resp.json()).then((data)=>{

        data.results.forEach(planet=>{
            let tbody = document.getElementById('planets');
            let row = document.createElement('tr');
            let nameCol = document.createElement('td')
            nameCol.innerHTML = planet.name;
            let diameterCol = document.createElement('td');
            diameterCol.innerHTML = planet.diameter;
            let climateCol = document.createElement('td');
            climateCol.innerHTML = planet.climate;
            let terrainCol = document.createElement('td');
            terrainCol.innerHTML = planet.terrain;
            let surfaceWaterCol = document.createElement('td');
            surfaceWaterCol.innerHTML = planet.surface_water;
            let populationCol = document.createElement('td');
            populationCol.innerHTML = planet.population;

            //...

            row.append(nameCol);
            row.append(diameterCol);
            row.append(climateCol);
            row.append(terrainCol);
            row.append(surfaceWaterCol);
            row.append(populationCol);
            tbody.append(row);
        }
        )
    }
    )
}
