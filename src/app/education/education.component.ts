import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function(){
			let w=$('.eimg').width();
			$('.eimg').css({ 'height': w });
		

			let h=$('.eimg').height();
			let he=$('.e-name').height();

			let total = h + he + 40;

			$('.flip-card-inner').css({ 'height': total });
			$('.flip-card-front').css({ 'height': total });
			$('.flip-card-back').css({ 'height': total });
			$('.flip-card').css({ 'height': total });
    });
    
    $(window).on("load", function () {
      $('.card1').css( {'margin-left' :'-300%'} );
      $('.card1').animate({ 'margin-left': '0%' },2000);
      $('.card2').css( {'margin-top' :'300%'} );
      $('.card2').animate({ 'margin-top': '20px' },2000);
      $('.card3').css( {'margin-left' :'300%'} ); 
      $('.card3').animate({ 'margin-left': '0%' },2000);
    });

  }


}
