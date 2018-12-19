import { Component } from '@angular/core';
import{ Router} from '@angular/router';
import { AlertController } from '@ionic/angular';

declare var window;
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private alertCtrl: AlertController,
              private router: Router) {
    console.log('home page time');
  } 

  segmentChanged(tab){
    let medQ = document.getElementById('QuestionList')
    let Achievements = document.getElementById('AchievementList')
    let contentValue=tab.detail.value
 console.log(contentValue)
    if(contentValue=="Achievements"){
      console.log("achievement tag is chosen")
      medQ.style.display ='none'
      Achievements.style.display ='block'
    }else if(contentValue=="MedQ"){
      console.log("medQ is chosen")
      Achievements.style.display ='none'
      medQ.style.display ='block'
    }else{
      console.log("something went wrong")
    }
    
  }
 
}


