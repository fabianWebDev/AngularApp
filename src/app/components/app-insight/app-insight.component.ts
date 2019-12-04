import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../../services/peticiones.service';

@Component({
  selector: 'app-insight',
  templateUrl: './app-insight.component.html',
  styleUrls: ['./app-insight.component.css'],
  providers: [PeticionesService]
})

export class AppInsightComponent implements OnInit {

  public wheather: any;
  /*Tempeture*/
  public minTempeture: any;
  public maxTempeture: any;
  /*Pressure*/
  public maxPressure: any;
  public minPressure: any;
  /*Wind Speed*/
  public maxWindSpeed: any;
  public minWindSpeed: any;
  /*Mars Sols*/
  public sol: any;
  public solKey: any;

  constructor(
    private _peticionesServices: PeticionesService
  ) {
    this.wheather = {};
    /*Tempeture*/
    this.minTempeture = '';
    this.maxTempeture = '';
    /*Pressure*/
    this.maxPressure = '';
    this.minPressure = '';
    /*Wind Speed*/
    this.maxWindSpeed = '';
    this.minWindSpeed = '';
    this.solKey = [];
    this.sol = 6;
  }

  ngOnInit() {
    this.loadMarsWeather();
  }

  solBtnUp() {
    if (this.sol >= 0 && this.sol <= 5) {
      this.sol = this.sol + 1;
    }
    this.loadMarsWeather();
  }

  solBtnDown() {
    if (this.sol > 0 && this.sol <= 6) {
      this.sol = this.sol - 1;
    }
    this.loadMarsWeather();
  }

  getMesures(data: any) {
    this.wheather = data;
    this.solKey = this.wheather.sol_keys;
    /*Getting Tempeture*/
    this.minTempeture = parseInt(this.wheather[this.solKey[this.sol]].AT.mn);
    this.maxTempeture = parseInt(this.wheather[this.solKey[this.sol]].AT.mx);
    /*Getting Pressure*/
    this.minPressure = parseInt(this.wheather[this.solKey[this.sol]].PRE.mn);
    this.maxPressure = parseInt(this.wheather[this.solKey[this.sol]].PRE.mx);
    /*Getting Wind Speed*/
    this.minWindSpeed = parseInt(this.wheather[this.solKey[this.sol]].HWS.mn);
    this.maxWindSpeed = parseInt(this.wheather[this.solKey[this.sol]].HWS.mx);
    console.log(data);
  }

  loadMarsWeather() {
    this._peticionesServices.getMarsWeather().subscribe(
      result => {
        this.getMesures(result);
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}
