$("#text-div").html("<h1><u>NFL PLAYERS CHARGED WITH PUBLIC INTOXICATION</u></h1><hr>")


//-- Sample JS Object --//
let person = {
    name:"jason",
    age: 33
}

console.log(person)

console.log(JSON.stringify(person))

// //-- Ajax Call to NBA WebAPI

// $.ajax({
//     url:"https://api-nba-v1.p.rapidapi.com/players/firstName/michael",
//     type: "GET",
//     dataType:"json",
//     headers:{
//         "X-RapidAPI-Host": "api-nba-v1.p.rapidapi.com",
//         "X-RapidAPI-Key": "31223a1867msh0cb1ab07ebb60d1p1e5aa3jsnf8d16db8c2dc",
//     },
//     contentType: "application/json; charset=utf8",
//     success: function(result){
//         //-- Call Back function for result --//
//         let players = result.api.players
//         for(let i=0;i< players.length;i++){
//             let firstNames = players[i].firstName
//             let lastNames = players[i].lastName
//             $("#players").append(`<table>
//             <tr><td>${firstNames}</td><td>${lastNames}</td></tr></table>`)
//         }
//         console.log(result.api.players)
//     },
//     error: function(error){
//         console.log(error)
//     },
    
// })


$.ajax({
    url:"https://brianiswu-nflarrest-v1.p.rapidapi.com/crime/arrests/public%20intoxication",
    type: "GET",
    dataType:"json",
    headers:{
        "X-RapidAPI-Host": "brianiswu-nflarrest-v1.p.rapidapi.com",
        "X-RapidAPI-Key": "31223a1867msh0cb1ab07ebb60d1p1e5aa3jsnf8d16db8c2dc",
    },
    contentType: "application/json; charset=utf8",
    success: function(result){
        //-- Call Back function for result --//
        console.log(result)
        for(let i=0; i < result.length;i++){
            let playerName = result[i].Name
            let playerTeam = result[i].Team_preffered_name
            let teamLocation = result[i].Team_Conference_Division
            let playerPosition = result[i].Position
            let arrestDescription = result[i].Description 
            let arrestDate = result[i].Date
            let arrestOutcome = result[i].Outcome
            let crime = result[i].Category
            let crimeCatagory = result[i].Crime_category

            
            $("#heading").append(`<h2>${playerName}(${playerPosition})</h2> 
            <div>
                <img src="http://placehold.it/250x250">
                <table><tr>
                <div>
                    <h3>${playerTeam}</h3>
                    <h4>${teamLocation}</h4>
                </div>

                <td><p><b>Date of Arrest:</b></p>${arrestDate}</td><td><h5>N<br>F<br>L</h5></td>
                <td><p><b>Crime Comitted:</b></p>${crime}</td><td><h5>N<br>F<br>L</h5></td>
                <td><p><b>Charge:</b></p>${crimeCatagory}</td><td><h5>N<br>F<br>L</h5></td>
                <td><p><b>Outcome:</b></p>${arrestOutcome}</td>
                </tr></table>
                <div>
                    <h4>Description of Arrest:</h4>
                    <p>${arrestDescription}</p> 
                </div>
                <hr>
            </div>`)
        }
    },
    error: function(error){
        console.log(error)
    },
})


