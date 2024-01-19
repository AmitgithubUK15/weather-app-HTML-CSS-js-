const input = document.getElementById("inpubox");
const Search = document.getElementById("button")
Search.addEventListener("click", Handlereq);

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '7e57b8f0d2msh79692790ac4fa1fp1f7c4ajsnb626322a46f9',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

async function Handlereq() {

    const contenor = document.getElementById("contenor");
    const imgsource = document.getElementById("weatherimg");
    const pervious = document.getElementById("title");
    const para = document.getElementById("fortemep");
    const locationicon = document.getElementById("locationid")
    const dropicon = document.getElementById("dropicon");
    const feellike = document.getElementById("feellike");
    const wind = document.getElementById("wind");

    const req = await fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${input.value}`, options)
    if (!req.ok) {
        throw Error("not found");
    }
    else {
        pervious.style.display = "none";

        const data = await req.json();
        const result = data;

        if (para.innerHTML !== " ") {
            para.innerHTML = " ";
            const detailwrp = document.createElement("div");
            detailwrp.style.width = "100%";
            detailwrp.style.height = "166px";
            detailwrp.style.backgroundColor = "rgb(208 208 222 / 7%)";
            detailwrp.style.borderRadius = "6px";


            let h2div = document.createElement("div");
            h2div.style.width = "100%";
            h2div.style.height = "40px";
            h2div.style.display = "flex";

            let h2 = document.createElement("div");
            h2.style.width = "50%";
            h2.style.textAlign = "right";
            h2.style.height = "38px";

            let span = document.createElement("span");
            span.style.fontSize = "30px";

            h2.appendChild(span);
            // h2.appendChild(h6);
            h2div.appendChild(h2);

            let rigthside = document.createElement("div");
            rigthside.style.width = "50%";
            rigthside.style.height = "38px";

            let degree = document.createElement("span");
            degree.style.fontSize = "17px";
            degree.style.display = "inline-block";
            degree.style.margin = "0 4px";

            let c = document.createElement("span");
            c.style.fontSize = "15px";
            c.style.fontWeight = "600";


            rigthside.appendChild(degree);
            rigthside.appendChild(c);
            h2div.appendChild(rigthside);

            let citynm = document.createElement("div");
            citynm.style.width = "100%";
            citynm.style.height = "40px";
            citynm.style.textAlign = "center";


            let nm = document.createElement('h2');
            nm.style.fontSize = "22px";
            nm.style.display = "inline-block";

            locationicon.style.display = "inline-block";
            locationicon.style.margin = "0  10px";
            citynm.appendChild(locationicon);
            citynm.appendChild(nm);

            let lastwrper = document.createElement("div");
            lastwrper.style.width = "100%";
            lastwrper.style.height = "80px";
            lastwrper.style.display = "flex";
            lastwrper.style.justifyContent = "space-around";
          
            detailwrp.appendChild(h2div);
            detailwrp.appendChild(citynm);
            detailwrp.appendChild(lastwrper);
            para.appendChild(detailwrp);

            if (result.temp < 20) {

                contenor.style.backgroundColor = "rgb(39, 42, 46)";
                // contenor.style.backgroundColor ="linear-gradient(to bottom right, blue, black)";

                imgsource.src = "23702-1-weather-transparent.png";

                span.innerText = result.temp;
                degree.innerText = "o";
                c.innerText = "C";

                let cityn = input.value;
                nm.innerText = cityn.charAt(0).toUpperCase() + cityn.slice(1);

                let wea_data = [result.humidity,result.feels_like,result.wind_speed]
                let texttile = ["Humidity","Feels","Wind"]

                const iconarr = [dropicon,feellike,wind]

                for (let i = 0; i <= 2; i++) {
                    const div1 = document.createElement("div");
                    div1.style.width = "24%";
                    div1.style.height = "80px";
                    
                    div1.style.display = "flex";

                    for(let j = 0 ; j<=1; j++){
                        let wrp = document.createElement("div");
                        wrp.style.width = "40%";
                        // wrp.style.display = "inline-block";
                        wrp.style.height = "79px";
                        
                        if(j === 0){
                            iconarr[i].style.display = "block";
                            iconarr[i].style.margin = "29px 11px";
                            iconarr[i].style.fontSize = '20px';
                            wrp.appendChild(iconarr[i])
                        }
                        else if(j ===1){
                            for(let k = 0; k<=1; k++){
                                let text = document.createElement("div");
                                
                                if(k ===0){
                                    text.style.width = "100%";
                                    text.style.height = "27px";
                                    
                                    let h3 = document.createElement("h3");
                                    h3.style.marginTop = "21px";
                                    if(i === 2){
                                    h3.innerText = wea_data[i];     
                                    }
                                    else{
                                        h3.innerText = wea_data[i] + " " + "%";
                                    }

                                    text.appendChild(h3);
                                }
                                else{
                                    let we_text = document.createElement("div");
                                    we_text.style.width = "100%";
                                    we_text.style.height = "20px";

                                    let weh7 = document.createElement("h7");
                                    weh7.innerText = texttile[i];
                                    
                                    we_text.appendChild(weh7);
                                    text.appendChild(we_text);
                                }

                                wrp.appendChild(text);
                            }
                        }
                        div1.appendChild(wrp);
                    }
                    lastwrper.appendChild(div1);

                }

                console.log(result);
            }
            if (result.temp > 20) {
                const time = new Date();
                const hour = time.getHours();
                 console.log(hour)
                if( time > 18 || time < 6){
                    contenor.style.backgroundColor = "rgb(15 23 42)";
                    imgsource.src = "86910-weather-water-forecasting-computer-icons-download-hq-png.png";
                }
                else{
                    contenor.style.backgroundColor = "rgb(41 92 212 / 83%)";
                    imgsource.src = "23698-6-weather-transparent-background.png";
                }
                // contenor.style.backgroundColor ="linear-gradient(to bottom right, blue, black)";

                

                span.innerText = result.temp;
                degree.innerText = "o";
                c.innerText = "C";

                let cityn = input.value;
                nm.innerText = cityn.charAt(0).toUpperCase() + cityn.slice(1);

                let wea_data = [result.humidity,result.feels_like,result.wind_speed]
                let texttile = ["Humidity","Feels","Wind"]

                const iconarr = [dropicon,feellike,wind]

                for (let i = 0; i <= 2; i++) {
                    const div1 = document.createElement("div");
                    div1.style.width = "24%";
                    div1.style.height = "80px";
                    
                    div1.style.display = "flex";

                    for(let j = 0 ; j<=1; j++){
                        let wrp = document.createElement("div");
                        wrp.style.width = "40%";
                        // wrp.style.display = "inline-block";
                        wrp.style.height = "79px";
                        
                        if(j === 0){
                            iconarr[i].style.display = "block";
                            iconarr[i].style.margin = "29px 11px";
                            iconarr[i].style.fontSize = '20px';
                            wrp.appendChild(iconarr[i])
                        }
                        else if(j ===1){
                            for(let k = 0; k<=1; k++){
                                let text = document.createElement("div");
                                
                                if(k ===0){
                                    text.style.width = "100%";
                                    text.style.height = "27px";
                                    
                                    let h3 = document.createElement("h3");
                                    h3.style.marginTop = "21px";
                                    if(i === 2){
                                    h3.innerText = wea_data[i];     
                                    }
                                    else{
                                        h3.innerText = wea_data[i] + " " + "%";
                                    }

                                    text.appendChild(h3);
                                }
                                else{
                                    let we_text = document.createElement("div");
                                    we_text.style.width = "100%";
                                    we_text.style.height = "20px";

                                    let weh7 = document.createElement("h7");
                                    weh7.innerText = texttile[i];
                                    
                                    we_text.appendChild(weh7);
                                    text.appendChild(we_text);
                                }

                                wrp.appendChild(text);
                            }
                        }
                        div1.appendChild(wrp);
                    }
                    lastwrper.appendChild(div1);

                }

                console.log(result);
            }

        }

    }
}
