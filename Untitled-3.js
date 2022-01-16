// variables
const button=document.querySelector("button")
const input=document.querySelector("input")
const list = document.querySelector(".ajax-section .cities");
const msg=document.querySelector(".msg")
button.addEventListener("click",submiting)
const apikey= "edc228562ac0a8aa3116d41c0687cf56"


// function and fetch API
function submiting(event){
    event.preventDefault();
let inputval=input.value
    console.log(inputval)
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${apikey}&units=metric`
    
    fetch(url)
    .then(response=>response.json()
    .then(data=>{
        const{main,name,sys,weather}=data
        const icon=`https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0]["icon"]}.svg`
        console.log(icon)
        const li=document.createElement("li")
        li.classList.add("city")
        const markup=`
        <h2><span class="span">${name},<span class="span2">${sys.country}</span></span>
        </h2>
    <div class="main">${Math.round(main.temp)}<span class="span4">°</span><span class="C">C</span></div>
    
    
    <img class=""img src='${icon}'></img>
    <span class="span3">${weather[0].description}</span>
        `

        li.innerHTML=markup
        list.appendChild(li)
        input.value=""
        msg.innerText=""

    })
.catch(()=>{
            msg.innerText="*search for a valid city*"
})
    )
}
