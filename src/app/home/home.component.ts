import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(window).on("load", function () {
      $(".lln1").animate({left:'0%'},2000);
      $(".lln2").animate({left:'10%'},2000);
      $(".lln3").animate({left:'20%'},2000);
      $(".lln4").animate({left:'30%'},2000);
      $(".lln5").animate({left:'40%'},2000);
      $(".lln6").animate({left:'50%'},2000);
      $(".lln7").animate({left:'60%'},2000);
      $(".lln8").animate({left:'70%'},2000);
      $(".round").animate({left:'79.8%'},2000);
    });
  }

}
