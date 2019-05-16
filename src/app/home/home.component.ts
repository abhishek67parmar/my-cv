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
      let pos = $('.pic').offset();
      // console.log(pos.top);
      let h = $('img.pic').innerHeight();
      // console.log(h)

      let lln_top = pos.top + (0.15 * h);
      let rln_top = pos.top + (0.82 * h);

      // console.log(rln_top);

      $('.lln1').css({ 'top': lln_top });
      $('.round').css({ 'top': lln_top-4 });

      $('.rln1').css({ 'top': rln_top });
      $('.round2').css({ 'top': rln_top-4 });


      $('.lln1').animate({ width: '80%' }, 2000);
      $('.round').animate({ left: '79.8%' }, 2000);


      $('.rln1').animate({ width: '80%' }, 2000);
      $('.round2').animate({ right: '79.8%' }, 2000);
    });
  }

}
