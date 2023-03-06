import { Component } from '@angular/core';

import { Visitor } from '../visitor';

@Component({
  selector: 'app-visitor-form',
  templateUrl: './visitor-form.component.html',
  styleUrls: ['./visitor-form.component.css']
})
export class VisitorFormComponent {

  powers = ['International Conference on Education and Technology IC-ET',     'Annual Conference on Education and E- Learning ACEE',
  '	International Conference on Arts and Literature ICAL', 
  'International Conference on Philosophy ICPHIL'];

  model = new Visitor(18, 'Name', this.powers[0], 'Email');


  submitted = false;

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  newHero() {
    this.model = new Visitor(42, '', '');
  }

  skyDog(): Visitor {
    let myVisitor =  new Visitor(42, 'SkyDog',
                           'Fetch any object at any distance',
                           'Leslie Rollover');
    console.log('My Visitor is called ' + myVisitor.name); // "My Visitor is called SkyDog"
    return myVisitor;
  }

  //////// NOT SHOWN IN DOCS ////////

  // Reveal in html:
  //   Name via form.controls = {{showFormControls(visitorForm)}}
  showFormControls(form: any) {
    return form && form.controls['name'] &&
    form.controls['name'].value; // Dr. IQ
  }

  /////////////////////////////

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/