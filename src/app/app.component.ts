import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { weatherData } from './models/weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'weather_App';
  weatherApp:any;
  summ:string= '';
  temp:string='';
  temp_min:number=0;
  temp_max:number=0;
  humidity:number=0;
  speed :number=0;
constructor(private weatherService:WeatherService){}
weatherData?:weatherData;
 ngOnInit(){
  this.weatherService.getUrl().subscribe({
    next:(app) => {console.log(app);
    this.weatherApp = app;
    this.summ = this.weatherApp.weather[0].main;
    this.temp =  this.weatherApp.main.temp;
    this.temp_min =  this.weatherApp.main.temp_min;
    this.temp_max =  this.weatherApp.main.temp_max;
    this.humidity  =  this.weatherApp.main.humidity;
    this.speed = this.weatherApp.wind.speed;

  },
  error:(err) =>console.log(err.message),
  complete:() =>console.info('api completed')

  })
      }


 }




