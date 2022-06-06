import { Component, OnInit } from '@angular/core';
import { Fragancia } from '../fragancia';

@Component({
  selector: 'app-fragancia',
  templateUrl: './fragancia.component.html',
  styleUrls: ['./fragancia.component.css']
})
export class FraganciaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getAllFrag():Array<Fragancia>{
    const fragancias:Array<Fragancia> = [];
    return fragancias;
  }
}
