//library
import { Component, OnInit } from '@angular/core';
//services
import { units } from '../interfaces/interfaceEmpires';
import { HomeServiceService } from '../services/home-service.service';
import { timeoutWith } from 'rxjs/operators';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  unites: units[];
  selctUnit: units;
  array: any = [];

  constructor(
    private _unitservice: HomeServiceService,
  ) { }

  ngOnInit() {
    this.getunites();
  }
  onSelectUnit(unit: units) {
    this.selctUnit = unit;
    console.log(unit);
  }

  getunites() {
    this._unitservice.getUnits().subscribe(res => {
      this.array.push(
        res
      );
      var newData = [];
      this.array.map((item: any) => {
       newData.push(
         ...item["units"]
       );
       this.array = newData;
      });
      console.log(this.array);
      // let resST = JSON.stringify(res);
      // let resJS = JSON.parse(resST);
      // this.unites=Array.of(resJS);
      // console.log("ccc", this.unites);
    });
  }


}