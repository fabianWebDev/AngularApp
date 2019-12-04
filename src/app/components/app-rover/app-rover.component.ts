import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../../services/peticiones.service';

@Component({
  selector: 'app-rover',
  templateUrl: './app-rover.component.html',
  styleUrls: ['./app-rover.component.css'],
  providers: [PeticionesService]
})
export class AppRoverComponent implements OnInit {


  public frontCamPictures: any;
  public backCamPictures: any;
  public cam: any;
  public panCam: any;
  public camSol: any;
  public camSolTwo: any;
  public dateFront: any;
  public solFront: any;
  public dateBack: any;
  public solBack: any;

  constructor(
    private _peticionesService: PeticionesService
  ) {
    this.frontCamPictures = {};
    this.backCamPictures = {};
    this.cam = {};
    this.camSol = 355;
    this.camSolTwo = 355;
    this.dateFront = "";
    this.solFront = "";
    this.dateBack = "";
    this.solBack = "";
  }

  ngOnInit() {
    this.loadMarsRoverFrontPictures();
    this.loadMarsRoverBackPictures();
  }

  nextFront() {
    this.camSol = this.camSol + 1;
    this.loadMarsRoverFrontPictures();
  }

  backFront() {
    this.camSol = this.camSol - 1;
    this.loadMarsRoverFrontPictures();
  }

  nextRear() {
    this.camSolTwo = this.camSolTwo + 1;
    this.loadMarsRoverBackPictures();
  }

  backRear() {
    this.camSolTwo = this.camSolTwo - 1;
    this.loadMarsRoverBackPictures();
  }

  loadMarsRoverFrontPictures() {
    this.cam = 'fhaz';
    this._peticionesService.getMarsRoverPic(this.camSol, this.cam).subscribe(
      result => {
        this.frontCamPictures = result['photos'][0]['img_src'];
        this.dateFront = result['photos'][0]['earth_date'];
        this.solFront = result['photos'][0]['sol'];
        console.log(result);
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  loadMarsRoverBackPictures() {
    this.cam = 'rhaz';
    this._peticionesService.getMarsRoverPic(this.camSolTwo, this.cam).subscribe(
      result => {
        this.backCamPictures = result['photos'][0]['img_src'];
        this.dateBack = result['photos'][0]['earth_date'];
        this.solBack = result['photos'][0]['sol'];
        console.log(result);
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}
