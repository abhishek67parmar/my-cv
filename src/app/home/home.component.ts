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
      var pos = $('.pic').offset();
      // console.log(pos.top);
      var h = $('img.pic').innerHeight();
      // console.log(h)

      var lln_top = pos.top + (0.15 * h);
      var rln_top = pos.top + (0.82 * h);

      // console.log(rln_top);

      $('.lln1').css({ 'top': lln_top });
      $('.round').css({ 'top': lln_top-4 });

      $('.rln1').css({ 'top': rln_top });
      $('.round2').css({ 'top': rln_top-4 });


      $('.lln1').animate({ left: '0%' }, 2000);
      $('.round').animate({ left: '79.8%' }, 2000);


      $('.rln1').animate({ right: '0%' }, 2000);
      $('.round2').animate({ right: '79.8%' }, 2000);
    });
  }
  test() {



  }

}
