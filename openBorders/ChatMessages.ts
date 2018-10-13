import {Component} from '@angular/core' ;
import { IonicPage, NavController, NavParams} from 'ionic-angular' ; 


@Component({
    selector: 'page-chat' , 
    templateUrl: 'chat.html' ,

})

export class ChatPage {

    username: string = '';
    message: string = '';

    constructor(public db: AngularFireDatabase)
    console.log(this: navParams);
    this.username = this.navParams.get('username')

}

    ionViewDidLoad () ;
        this.db.list('/chat').push (   
         {
            username: this.username,
            message: this.message
        } )
        console.log('ionViewDidLoad ChatPage');
    }

