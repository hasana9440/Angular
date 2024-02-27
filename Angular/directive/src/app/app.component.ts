import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'directive';
  name = "Hasan Ahammad";
  age = 25;
  food = [
    {
      name:'momoj', 
      price : 50,
      url :'https://img.freepik.com/free-vector/realistic-dumplings-set-vareniki-pierogi-ravioli-khinkali-pelmeni-manti-momo-tortellini_33099-124.jpg?t=st=1708934479~exp=1708938079~hmac=e6f8c77a4fb8ce589946f1d7c1bb53a32a9589f26fc8be17fd0231b99515a591&w=740'
    }
  ]
  movie = [{
    name:'Vikings',
    director:'viking',
    url:'https://img.freepik.com/free-psd/viking-video-game-3d-text-style-effect_1389-1570.jpg?t=st=1708935246~exp=1708938846~hmac=8715c982292ccbc6dd9cac9cf2c4cc022f8979492a0952447b1931ea4aa99780&w=1060'
  }]
 
}
