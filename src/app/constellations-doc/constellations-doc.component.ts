import { Component, OnInit } from '@angular/core';
import { NasaImageService } from "../nasa-image.service";
import { ImgNasa } from "../img-nasa";
import { Observable } from "rxjs";

@Component({
  selector: 'app-constellations-doc',
  templateUrl: './constellations-doc.component.html',
  styleUrls: ['./constellations-doc.component.css']
})
export class ConstellationsDocComponent implements OnInit {

  public planetImg: ImgNasa = null;

  public img: string = "";
  public images: string[];

  private service: NasaImageService;


  constructor(
    param_nasa_service: NasaImageService
  ) {
    this.planetImg = new ImgNasa("taurus", "taurus");
    this.service = param_nasa_service;
    this.img = "";
    this.images = [];
  }

  ngOnInit() {

    const obs: Observable<string[]> = this.service.getPlanetImage(this.planetImg.planet);
    obs.subscribe(
      (param_images_urls: string[]) => {

        this.images = param_images_urls;

      }
    );
  }
}