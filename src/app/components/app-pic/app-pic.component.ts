import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../../services/peticiones.service';

@Component({
  selector: 'app-app-pic',
  templateUrl: './app-pic.component.html',
  styleUrls: ['./app-pic.component.css'],
  providers: [PeticionesService]
})
export class AppPicComponent implements OnInit {
  public dailyImg: any;

  constructor(
    private _peticionesServices: PeticionesService
  ) {
    this.dailyImg = {};
  }

  ngOnInit() {
    this.loadDailyImg();
  }

  loadDailyImg() {
    this._peticionesServices.getDailyImg().subscribe(
      result => {
        this.dailyImg = result;
        console.log(result);
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}
