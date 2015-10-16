//import {computedFrom} from 'aurelia-framework';

export class Welcome{
  heading = 'Welcome to PartyRock!';
  eMail = '';
  previousValue = this.eMail;

  //Getters can't be directly observed, so they must be dirty checked.
  //However, if you tell Aurelia the dependencies, it no longer needs to dirty check the property.
  //To optimize by declaring the properties that this getter is computed from, uncomment the line below
  //as well as the corrresponding import above.
  //@computedFrom('eMail', 'lastName')
  get usereMail(){
    return `${this.eMail} `;
  }

  submit(){
    this.previousValue = this.usereMail;
    alert(`Welcome, ${this.usereMail}!`);
  }

  canDeactivate() {
    if (this.usereMail !== this.previousValue) {
      return confirm('Are you sure you want to leave?');
    }
  }
}

export class LowerValueConverter {
  toView(value){
    return value && value.toLowerCase();
  }
}
