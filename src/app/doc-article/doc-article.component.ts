import { Component, OnInit } from '@angular/core';
import { NasaImageService } from "../nasa-image.service";
import { ImgNasa } from "../img-nasa";
import { Observable } from "rxjs";

@Component({
  selector: 'app-doc-article',
  templateUrl: './doc-article.component.html',
  styleUrls: ['./doc-article.component.css']
})
export class DocArticleComponent implements OnInit {

  public planetImg: ImgNasa = null;

  public img: string = "";
  public images: any[];

  private service: NasaImageService;
 


  constructor(
    param_nasa_service: NasaImageService
  ) {
    this.planetImg = new ImgNasa("earth", "earth");
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
