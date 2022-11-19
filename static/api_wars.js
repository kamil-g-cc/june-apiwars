function getPlanetsDetails(input) {

    fetch(input).then((resp)=>resp.json()).then((data)=>{

        data.results.forEach(planet=>{
            let tbody = document.getElementById("planets");
            let row = document.createElement('tr');
            let nameCol = document.createElement('td');
            let diameterCol = document.createElement('td');
            let climateCol = document.createElement('td');
            let terrainCol = document.createElement('td');
            let surfaceWaterCol = document.createElement('td');
            let populationCol = document.createElement('td');

            let diameter;
            diameter = formatNumber(planet.diameter) + " km";
            let population;
            population = formatNumber(planet.population) + " people";
            let surface_water;
            surface_water = planet.surface_water;
            if (surface_water != "unknown") {
                surface_water = surface_water + "%";
            }

            nameCol.innerHTML = planet.name;
            diameterCol.innerHTML = diameter;
            climateCol.innerHTML = planet.climate;
            terrainCol.innerHTML = planet.terrain;
            surfaceWaterCol.innerHTML = surface_water;
            populationCol.innerHTML = population;

            row.appendChild(nameCol);
            row.appendChild(diameterCol);
            row.appendChild(climateCol);
            row.appendChild(terrainCol);
            row.appendChild(surfaceWaterCol);
            row.appendChild(populationCol);
            tbody.append(row);
        }
        )

        if (data.previous != null) {
            let buttonDiv = document.getElementById("buttons");
            let prevButton = document.createElement("button");
            prevButton.classList.add("btn");
            prevButton.classList.add("btn-primary");
            prevButton.innerText = "Previous";
            buttonDiv.appendChild(prevButton);
            prevButton.addEventListener("click", function() {
                input = data.previous;
                let tbody = document.getElementById("planets");
                tbody.innerHTML = "";
                buttonDiv.innerHTML = "";
                getPlanetsDetails(input);
            })
        }

        if (data.next != null) {
            let buttonDiv = document.getElementById("buttons");
            let nextButton = document.createElement("button");
            nextButton.classList.add("btn");
            nextButton.classList.add("btn-primary");
            nextButton.innerText = "Next";
            buttonDiv.appendChild(nextButton);
            nextButton.addEventListener("click", function () {
                input = data.next;
                let tbody = document.getElementById("planets");
                tbody.innerHTML = "";
                buttonDiv.innerHTML = "";
                getPlanetsDetails(input);
            })
        }



    }
    )
}

function formatNumber(number) {

    let newNumber = [...number];
    if (number != "unknown") {
        if (number.length > 3) {
            let i = Math.ceil(number.length / 3);
            for (let j = 1; j < i; j++) {
                newNumber.splice(number.length - 3 * j, 0, ",");
            }
        }
    }
    return newNumber.join('');
}

function showModal(){
    const modal = document.querySelector(".modal");
    const myModal = new bootstrap.Modal(modal)
    myModal.show();
}