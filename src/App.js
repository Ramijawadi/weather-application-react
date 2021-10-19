import React, { Component } from "react";
import Form from "./components/Form";
import Weather  from "./components/Weather";



const API_KEY = "97656069da79cb55312f6b4da30016a7";

class  App  extends Component {


state = {
 tempreature: '',
 city:'',
 country:'',
 humidity:'',
 description:'',
 error:''

}


getWeather = async (e) => {
  e.preventDefault()

const city = e.target.elements.city.value;
const country= e.target.elements.country.value;
console.log(city,country);

const api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}%2C${country}&appid=${API_KEY}`);
const data = await api.json();


if(city && country){


this.setState({

  
    tempreature:data.main.temp,
    city:data.name,
    country:data.sys.country,
    humidity:data.main.humidity,
    description:data.weather[0].description,
    error:''

  })


}
else {
this.setState({


    tempreature: '',
    city:'',
    country:'',
    humidity:'',
    description:'',
    error:alert("enter data please")
   
})
}
}
render(){


  return (
    <div className="wrapper">
      <div className="form-container">
  
  <Form  getWeather= {this.getWeather}/>
  <Weather
  
  tempreature= {this.state.tempreature}
  city= {this.state.city}
  country= {this.state.country}
  humidity= {this.state.humidity}
  description= {this.state.description}
  error= {this.state.error}
 
 />

    </div>
    </div>
  );
}}

export default App;
