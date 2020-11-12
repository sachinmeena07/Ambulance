import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ambulance';
  images = [ 
    {
      image :'../assets/image1.jpg',
      title:'image1'
    } ,
    {
      image :'../assets/image2.jpg',
      title:'image2'
    } ,
    {
      image :'../assets/image3.jpg',
      title:'image3'
    } ,
    {
      image :'../assets/image4.jpg',
      title:'image4'
    } ,
    {
      image :'../assets/image5.jpg',
      title:'image5'
    } ,
  ]
  
  slideConfig = {  
    "slidesToShow": 3,  
    "slidesToScroll": 3,  
    "dots": true,  
    "infinite": true  
  };  

}
