import { Component, OnInit } from '@angular/core';
import { ImgInfo } from '../img-info';
import { NasaService } from '../nasa.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-doc-article',
  templateUrl: './doc-article.component.html',
  styleUrls: ['./doc-article.component.css']
})
export class DocArticleComponent implements OnInit {

  public imgInfo: ImgInfo = null;
  public img: string = "";
  private service: NasaService;
  public images: string[];

  constructor(param_nasa_service: NasaService){
    this.imgInfo = new ImgInfo("earth","earth");
    this.service = param_nasa_service;
    this.img = "";
    this.images = [];
  }
  ngOnInit(){
    const obs: Observable<string[]> = this.service.getImages(this.imgInfo.img);
    obs.subscribe((param_images_urls: string[]) => {
      this.images = param_images_urls;
    }

    );
  }

}
