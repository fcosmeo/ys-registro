import { Component } from '@angular/core';

import { PersonService } from './services/person.service';
import { Person } from './models/person';
import { GLOBAL } from './services/global';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PersonService]
})
export class AppComponent {
  public title: string;
  public person: Person;

  constructor(
    private _personService: PersonService
  ) {
    this.person = new Person(0, '', '', '', '', '', '', 1, 1);
  }

  ngOnInit() {
    console.log('app.component.ts cargado...');
  }

  onSubmit() {
    console.log(this.person);
    this.saveProducto();
  }

  saveProducto() {
    this._personService.addPerson(this.person).subscribe(
      response => {
        if (response.code == 200) {
          console.log('app.component.ts cargado...');
        }else {
          console.log(response);
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }
}

