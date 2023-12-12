let url = "https://kontests.net/api/v1/all";
let response = fetch(url);
response.then((value) => {
    return value.json();
}).then((contest) => {

    console.log(contest);
    ihtml = "";
    const a= ["python","javascript","php","Kotlin","Swift","Ruby","html","css","bootstrap","c#"]
    let itr = 0;
    for (item in contest) {
        console.log(contest[item]);
        ihtml += `
            <div class="card mx-2 my-2 px-0" style="width: 18rem;">
            <img class="card-img-top" src="https://source.unsplash.com/200x200/?coding,${a[itr]}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${contest[item].name.substr(0,20)}...</h5>
               
                    <p>contest site: ${contest[item].site} </p>
                    <p>contest Duration: ${contest[item].duration} </p>
                    <p>Starts at: ${contest[item].start_time} </p>
                    <p>End at: ${contest[item].end_time} </p>

                <a href="${contest[item].url}" target="_blank" class="btn btn-primary">Vist Page</a>
            </div>
        </div>
        `
        itr++;
        if(itr==a.length)
        itr = 0;
    }
    cardContainer.innerHTML = ihtml;
})