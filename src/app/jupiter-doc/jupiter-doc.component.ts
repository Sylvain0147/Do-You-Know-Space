import { Component, OnInit } from '@angular/core';
import { NasaImageService } from "../nasa-image.service";
import { ImgNasa } from "../img-nasa";
import { Observable } from "rxjs";

@Component({
  selector: 'app-jupiter-doc',
  templateUrl: './jupiter-doc.component.html',
  styleUrls: ['./jupiter-doc.component.css']
})
export class JupiterDocComponent implements OnInit {

  public planetImg: ImgNasa = null;

  public img: any = "";
  public images: any[];

  private service: NasaImageService;


  constructor(
    param_nasa_service: NasaImageService
  ) {
    this.planetImg = new ImgNasa("jupiter", "jupiter");
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