import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../countries.service';
import { shouldCallLifecycleInitHook } from '../../../node_modules/@angular/core/src/view';
@Component({
  selector: 'app-flag',
  templateUrl: './flag.component.html',
  styleUrls: ['./flag.component.css','../../../node_modules/flag-icon-css/css/flag-icon.css']
})
export class FlagComponent implements OnInit {


  total;
  code;
  text;
   i;
   option=[];
   count1=0;
   count2=0;
   value;
   a;
  constructor( public cService:CountriesService) { }
  ngOnInit(){}
  
restart()
{
  this.count1=0;
  this.count2=0;
}

  code1()
  {
    
    
      this.i=Math.floor(Math.random()*this.cService.getCountries().length);
      this.code=(this.cService.getCountries()[this.i]["alpha-2"]).toLowerCase();
      console.log(this.code);
      this.text=this.cService.getCountries()[this.i].name;
      for(this.i=0;this.i<4;this.i++)
      {
       this.a=Math.floor(Math.random()*this.cService.getCountries().length);
        this.option.push(this.cService.getCountries()[this.a].name);
      }
      this.a=Math.floor(Math.random()*4);
      this.option[this.a]=this.text;
      this.value="";
      console.log(this.text);
        }
  

  check(n)
  {
    if(this.option[n-1]==this.text)
    {
      this.count1++;
    }
    else
    {
      this.count2++;
    }
    for(this.i=0;this.i<4;this.i++)
    {
      this.option.pop();
    }
    this.code="";
    this.total=this.count1+this.count2;
    if(this.total<=10)
    {
      this.code1();
    }
    if(this.total>10)
    {
      this.restart();
    }
  }
}
