import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { weatherData } from '../models/weather.model';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient)  { }

getUrl(){
  return this.http.get("https://api.openweathermap.org/data/2.5/weather?q=kanpur&appid=11458c101f23d28b337dc7d36ef979ba&units=metric")
}
}
