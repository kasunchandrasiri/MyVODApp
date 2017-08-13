import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router"


@Component({
  selector: 'app-video  player',
  templateUrl: './videoplayer.component.html',
  styleUrls: ['./videoplayer.component.css']
})
export class VideoplayerComponent implements OnInit {
  videoUrl: string;

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit() {
    let url = decodeURIComponent(this.route.snapshot.params['url']);
    this.videoUrl = url;
    console.log("TEST VIDEO PLAYER, {}", this.videoUrl);
  }

}
