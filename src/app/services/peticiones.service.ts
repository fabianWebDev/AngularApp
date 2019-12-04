import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/observable';

@Injectable()

export class PeticionesService {

    public urlDailyImg: string;
    public apiKey: string;
    public urlMarsWeather: string;
    public nearEarthObjects: string;
    public marsRoverPic: string;

    constructor(public _http: HttpClient) {
        this.urlDailyImg = 'https://api.nasa.gov/planetary/apod?';
        this.apiKey = 'api_key=I01AZmzSaVQF0CN8uB3nvaXEN1n1fY0tGWwyQsG5';
        this.urlMarsWeather = 'https://api.nasa.gov/insight_weather/?api_key=I01AZmzSaVQF0CN8uB3nvaXEN1n1fY0tGWwyQsG5&feedtype=json&ver=1.0';
        this.nearEarthObjects = 'https://api.nasa.gov/neo/rest/v1/feed?start_date=2019-08-01&end_date=2019-08-05&';
        this.marsRoverPic = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos';
    }

    getDailyImg(): Observable<any> {
        return this._http.get(this.urlDailyImg + this.apiKey);
    }

    getMarsWeather(): Observable<any> {
        return this._http.get(this.urlMarsWeather);
    }

    getNearObjects(): Observable<any> {
        return this._http.get(this.nearEarthObjects + this.apiKey);
    }
    getMarsRoverPic(sol: any, camera: any): Observable<any> {
        return this._http.get(this.marsRoverPic + '?sol=' + sol + '&camera=' + camera + '&' + this.apiKey);
    }
}