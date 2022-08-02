import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {

  where:string|null = null;

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.where = this.route.snapshot.paramMap.get('where');
  }

}
