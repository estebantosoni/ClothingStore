import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-us',
  templateUrl: './us.component.html',
  styleUrls: ['./us.component.css']
})
export class UsComponent implements OnInit {

  constructor(){}

  ngOnInit():void{}

  // initMap():void{
  //   const ubi:google.maps.LatLngLiteral = {
  //     lat: -33.15785511845507,
  //     lng: -60.50076368576211
  //   };
  //   const mapOptions = {
  //     zoom: 8,
  //     center: ubi,
  //     mapTypeId: google.maps.MapTypeId.ROADMAP
  //   };
  //   this.map = new google.maps.Map(document.getElementById("map") as HTMLElement,mapOptions);
  // }
}