
var app = new Vue({  
    el: "#app",  
    data:{
        members: [],
        statistics: {

"NumberofDemocrats": [],
"totalRep":0,
"totalDem": 0,
"totalInd": 0,
"totalHouse": 0,
"NumberofRepublicans": [],
"NumberofIndependents": [],
"TotHouse": [],
"AverageVoteswithpartyforDemocrats": 0,
"AverageVoteswithpartyforRepublicans": 0,
"AverageVoteswithpartyforIndependents": 0,
"totAvrgVotes": 0,
"leastEngaged": [],
"mostEngaged": [],
"leastLoyal": [],
"mostLoyal": [],

}
               
    }
}); 

var data = fetch(myRequest = new Request("https://api.propublica.org/congress/v1/113/house/members.json", { 
            method: 'GET',
            headers:  {"X-Api-Key":"FfKy04tEyObdv2FsgOmeSmRU5wVuYxO2gZZkMVvs"}}));

fetch (myRequest).then(response => {
    if(response.json){
        console.log("Test");
        console.log(response.json);
        return response.json();
    }
   
    throw new Error(response.statesText);
    }).then(data => {
        console.log("Test");            
        app.members = data.results[0].members;
        calcular(data.results[0].members);
        calcular2(data.results[0].members);
        calcular3(data.results[0].members);
        calcular4(data.results[0].members);
        calcular5(data.results[0].members);
        calcular6(data.results[0].members);
        console.log(app.members);

    }).catch(function(error) {
        console.log( "Request failed " + error.message);
});

var r = []
function calcular(r)
{

r.forEach(miembros=>{
if(miembros.party=="R"){
   app.statistics.NumberofRepublicans.push(miembros)
        }
if(miembros.party=="D"){
    app.statistics.NumberofDemocrats.push(miembros)
        }
if(miembros.party=="I"){
    app.statistics.NumberofIndependents.push(miembros)
}
 if(miembros.party=="D" || miembros.party=="R" || miembros.party=="I"){
    app.statistics.TotHouse.push(miembros)}
})

console.log("Number of Republicans: " + app.statistics.NumberofRepublicans.length);
console.log("House Total: " + app.statistics.TotHouse.length);  
app.statistics.totalRep=  app.statistics.NumberofRepublicans.length;
app.statistics.totalDem= app.statistics.NumberofDemocrats.length;
app.statistics.totalInd= app.statistics.NumberofIndependents.length;
app.statistics.totalHouse= app.statistics.TotHouse.length;
}

var s = []
function calcular2 (s){

var sumPctD = 0
var sumPctR = 0
var sumPctI = 0
s.forEach(miembros=>{
    if(miembros.party=="D"){
        sumPctD += miembros.votes_with_party_pct
                }
    if(miembros.party=="R"){
        sumPctR += miembros.votes_with_party_pct
    }
    if(miembros.party=="I"){
        sumPctI += miembros.votes_with_party_pct
    }
           })
           app.statistics.AverageVoteswithpartyforDemocrats=(sumPctD/app.statistics.totalDem).toFixed([2])
           app.statistics.AverageVoteswithpartyforRepublicans=(sumPctR/app.statistics.totalRep).toFixed([2])
           app.statistics.AverageVoteswithpartyforIndependents=(sumPctI/app.statistics.totalInd !== 0 ? app.statistics.totalInd: 1).toFixed([2])



           var nmbrParties = (app.statistics.totalInd !== 0 ? nmbrParties: 2)
var totpctparty = (((sumPctI/app.statistics.NumberofIndependents.length !== 0 ? app.statistics.NumberofIndependents.length: 1)+(sumPctR/app.statistics.NumberofRepublicans.length)+
(sumPctD/app.statistics.NumberofDemocrats.length))/nmbrParties).toFixed([2])
app.statistics.totAvrgVotes=totpctparty

console.log("Average Votes Total: " + app.statistics.totAvrgVotes)
console.log("Average Votes with party for Independents: " +  app.statistics.AverageVoteswithpartyforIndependents)
console.log("Number of Independents: " + app.statistics.NumberofIndependents.length)
console.log("% Voted with Party for Independents: " + (sumPctI/app.statistics.NumberofIndependents.length !== 0 ? app.statistics.NumberofIndependents.length: 1))
console.log("Party Percent Total: " + totpctparty)

        }
   

        var t = []
        function calcular3 (t){    
        t.sort((a,b)=>a.votes_with_party_pct-b.votes_with_party_pct)
        
         for(var i=0; i<(Math.trunc((t.length)*0.1)); i++){
            app.statistics.leastLoyal.push(t[i])
        }
        
        console.log(app.statistics.leastLoyal)
        }
         
        var u = []
        function calcular4 (u){    
        u.sort((a,b)=>b.votes_with_party_pct-a.votes_with_party_pct)
           for(var i=0; i<(Math.trunc((u.length)*0.1)); i++){
            app.statistics.mostLoyal.push(u[i])
        }
          console.log(app.statistics.mostLoyal)
        }
        
        
        var v = []
        function calcular5 (v){    
        v.sort((a,b)=>b.missed_votes-a.missed_votes)
           for(var i=0; i<(Math.trunc((v.length)*0.1)); i++){
            app.statistics.leastEngaged.push(v[i])
        }
          console.log(app.statistics.leastEngaged)
        }
        
      
        var w = []
        function calcular6 (w){    
        w.sort((a,b)=>a.missed_votes-b.missed_votes)
           for(var i=0; i<(Math.trunc((w.length)*0.1)); i++){
            app.statistics.mostEngaged.push(w[i])
        }
          console.log(app.statistics.mostEngaged)
        }
      