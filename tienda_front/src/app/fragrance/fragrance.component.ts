import { Component, OnInit } from '@angular/core';
import { Fragrance } from '../fragrance';

@Component({
  selector: 'app-fragrance',
  templateUrl: './fragrance.component.html',
  styleUrls: ['./fragrance.component.css']
})
export class FragranceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getAllFrag():Array<Fragrance>{
    const fragancias:Array<Fragrance> = [];
    return fragancias;
  }
}
