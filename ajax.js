var box=document.getElementById("box");
var button=document.getElementById("button");
var request = new XMLHttpRequest();

function clickButton(){
    var search = document.getElementById("search");
    var gettingdata="";
    gettingdata=search.value;
    request.addEventListener('load',dataElement);
    request.open('GET', 'https://api.themoviedb.org/3/search/movie?api_key=8318c431b4fc8a2c4762bf2a52c351ee&query='+gettingdata);
    request.send();
}

button.addEventListener("click",clickButton);

function dataElement() {
    var data = JSON.parse(request.responseText); 
    showdata(data.results);
}

function showdata(data){
    data.forEach((item)=>{
        box.innerHTML=`<p>Title : ${item.title}</p>
        <p>Release Date :  ${item.release_date}</p>
        <p>Vote Average : ${item.vote_average}</p>`   
    });
}
