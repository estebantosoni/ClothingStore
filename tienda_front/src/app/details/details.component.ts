import { Token } from '@angular/compiler';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Dress } from '../models/dress';
import { Fragrance } from '../models/fragrance';
import { DressService } from '../services/dress.service';
import { FraganceService } from '../services/fragrance.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  form:FormGroup;
  //id: string = '';
  itemF$:Observable<(Fragrance)[]> = of([]);
  itemD$:Observable<(Dress)[]> = of([]);
  checkId:boolean = false;

  constructor(
    private servF:FraganceService,
    private servD:DressService,
    private builder: FormBuilder,
    private route: ActivatedRoute
    ) {
    this.form = this.builder.group({
      name:[''],
      cellphone:[''],
      query:['']
    });

    const id = this.route.snapshot.paramMap.get('id');
    //console.log(id);

    if(id?.length == 4){                      //fragrance
      this.itemF$ = this.servF.getObj(id);
      this.checkId = true;
    }
    else if(id?.length == 7){                 //dress
      this.itemD$ = this.servD.getObj(id);
      this.checkId = false;
    }

  }

  ngOnInit(): void {
    
  }

  send():void{
    const name = this.form.get('name')?.value;
    const phone = this.form.get('cellphone')?.value;
    const query = this.form.get('query')?.value;
  }

}