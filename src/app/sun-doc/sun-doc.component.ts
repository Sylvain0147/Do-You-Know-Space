import { Component, OnInit } from '@angular/core';
import { NasaImageService } from "../nasa-image.service";
import { ImgNasa } from "../img-nasa";
import { Observable } from "rxjs";

@Component({
  selector: 'app-sun-doc',
  templateUrl: './sun-doc.component.html',
  styleUrls: ['./sun-doc.component.css']
})
export class SunDocComponent implements OnInit {

  public planetImg: ImgNasa = null;

  public img: string = "";
  public images: any[];

  private service: NasaImageService;


  constructor(
    param_nasa_service: NasaImageService
  ) {
    this.planetImg = new ImgNasa("sun", "sun");
    this.service = param_nasa_service;
    this.img = "";
    this.images = [];
  }

  ngOnInit() {

    const obs: Observable<any[]> = this.service.getPlanetImageInfo(this.planetImg.planet);
    obs.subscribe(
      (param_images_urls: any[]) => {

        this.images = param_images_urls;

      }
    );
  }
}
