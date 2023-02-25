function fun()
{
    let city=document.getElementById('city').value
    fetch(`https://api.openweathermap.org/data/2.5/weather/?q=${city}&appid=<apikey>&units=metric`)
    .then(response=>response.json())
    .then(response=>
     {
         console.log(response)
         document.getElementById('fig').src=`http://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png`;
        document.getElementById('temp').innerHTML="Temp: "+response.main.temp+"°C";
        document.getElementById('feels').innerHTML="Feels like:"+response.main.feels_like+"°C";
        document.getElementById('min').innerHTML="Min_temp: "+response.main.temp_min+"°C";
        document.getElementById('max').innerHTML="Max_temp: "+response.main.temp_max+"°C";

        

     })
    fetch(`https://api.openweathermap.org/data/2.5/forecast/?q=${city}&appid=<apikey>&units=metric`)
    .then(response=>response.json())
    .then(response=>{
        const data=response.list;
        // console.log(response)
        display(data);
    })

}
function display(data)
{
    let date=[];
    let dis=[];
    let temp=[];
    let img=[];
    date=data.map((cast)=>(cast.dt_txt))
    temp=data.map((cast)=>(cast.main.temp))
    dis=data.map((cast)=>(cast.weather[0].description))
    img=data.map((cast)=>(cast.weather[0].icon))
    // console.log(date)
    // console.log(dis)
    // console.log(temp)
    // console.log(img);
    let list = document.getElementById("myList");
 
temp.forEach((item)=>{
  let li = document.createElement("ol");
  li.innerText = item+" °C";
  list.appendChild(li);
})
let dat = document.getElementById("date");
date.forEach((item)=>{
    let li = document.createElement("ol");
    li.innerText = item;
    dat.appendChild(li);
  })
  let disc = document.getElementById("disc");
dis.forEach((item)=>{
    let li = document.createElement("ol");
    li.innerText = item;
    disc.appendChild(li);
  })

  let mai = document.getElementById("mai");
  img.forEach((item)=>{
    var img = new Image();
    img.src =
`http://openweathermap.org/img/wn/${item}@2x.png`;
    document.getElementById('ic').appendChild(img);
    // mai.appendChild()
  })

}
