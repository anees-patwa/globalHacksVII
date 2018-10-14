import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CompanyInfoPage } from '../company-info/company-info';

import * as firebase from 'firebase';
/**
 * Generated class for the CompanyListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-company-list',
  templateUrl: 'company-list.html',
})
export class CompanyListPage {
  ref = firebase.database().ref("companies");
  companies = [];
  filter = {};
  currentUser = firebase.auth().currentUser;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    if (navParams && navParams.data) {
      this.filter = navParams.data;
    }
  }

  ionViewDidLoad() {
    this.getCompanies();
  }

  getCompanies() {
    this.ref.once('value', resp => {
      this.companies = snapshotToArray(resp, this.filter);
    });
  }

  getCompanyDetail(company) {
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
    this.navCtrl.push(CompanyInfoPage, company);
  }

  likeCompany(event: Event, company) {

    firebase.database().ref("companies/" + company.key + "/votes/" + firebase.auth().currentUser.uid).set(1)
    .then(() => {
      company.upvotes += 1;
      company.ilike = true;
    });

    event.cancelBubble = true;
  }

  unlikeCompany(event: Event, company) {

    firebase.database().ref("companies/" + company.key + "/votes/" + firebase.auth().currentUser.uid).remove()
    .then(() => {
      company.upvotes -= 1;
      company.ilike = false;
    });

    event.cancelBubble = true;
  }


}

// export const getCompanyLikes = company => {

//   console.log(company);

//   let me = firebase.auth().currentUser;

//   var likes;

//   var likeref = firebase.database().ref("votes/" + company.key);

//   if (likeref) {
//     likeref.once('value', likeresp => {

//       likes = likesToArray(likeresp);
//     }).then(() => {

//       console.log(likes);
//       if (likes) {
//         likes.forEach(childLike => function () {
//           if (childLike && childLike.val()) {
//             if (me && (childLike.val() == me.uid)) {
//               console.log("I like it!");
//               company.ilike = true;
//             }
//             console.log("adding upvote");
//             company.upvotes += 1;
//           }
//         });
//       }
//     })
//   }


// }

// export const likesToArray = snapshot => {
//   let returnArr = [];

//   snapshot.forEach(childSnapshot => {
//     returnArr.push(childSnapshot.key);
//   });

//   return returnArr;
// }

export const snapshotToArray = (snapshot, filter) => {
  let returnArr = [];
  let me = firebase.auth().currentUser;

  snapshot.forEach(childSnapshot => {

    let item = childSnapshot.val();

    if (filter.city && (item.city != filter.city)) {
      return false;
    }

    if (filter.state && (item.state != filter.state)) {
      return false;
    }

    if (filter.zip && (item.zip != filter.zip)) {
      return false;
    }

    if (filter.language) {
      var languageMatch = false;

      if (item.languages) {
        item.languages.forEach(language => {
          if (filter.language == language) {
            languageMatch = true;
          }
        });
      }

      if (!languageMatch) {
        return false;
      }
    }

    item.upvotes = 0;
    item.ilike = false;

    if (item.votes) {
      Object.keys(item.votes).forEach(uid => {
        item.upvotes += 1;
        if (me && (uid == me.uid)) {
          item.ilike = true;
        }
      });
    }
    item.key = childSnapshot.key;

    
    returnArr.push(item);


  });

  return returnArr;
};
