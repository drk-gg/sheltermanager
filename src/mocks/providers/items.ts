import { Injectable } from '@angular/core';

import { Item } from '../../models/item';

@Injectable()
export class Items {
  items: Item[] = [];

  defaultItem: any = {
    "name": "Burt Bear",
    "profilePic": "assets/img/speakers/bear.jpg",
    "about": "Burt is a Bear.",
  };


  constructor() {
    let items = [
      {
        "firstname": "Burt",
        "lastname": "Bear",
        "dateOfBirth": "01.01.1900",
        "gender": "male",
        "residence": "Groß-Gerau",
        "nationality": "deutsch",
        "street": "Im Wald rechts",
        "profession": "Jäger",
        "emergencyShelter": "Beispielunterkunkft 1",
        "transferTo": null,
        "dateOfShelter": "2018-01-12",
        "dateOfTransfer": null,
        "profilePic": "assets/img/speakers/bear.jpg"
      },
      {
        "firstname": "Charlie",
        "lastname": "Cheetah",
        "dateOfBirth": "01.01.1900",
        "gender": "male",
        "residence": "Groß-Gerau",
        "nationality": "deutsch",
        "street": "Im dunklen Eck 13",
        "profession": "Barkeeper",
        "emergencyShelter": "Beispielunterkunkft 1",
        "transferTo": null,
        "dateOfShelter": "2018-01-12",
        "dateOfTransfer": null,
        "profilePic": "assets/img/speakers/cheetah.jpg"
      },
      {
        "firstname": "Donald",
        "lastname": "Duck",
        "dateOfBirth": "01.01.1900",
        "gender": "male",
        "residence": "Groß-Gerau",
        "nationality": "deutsch",
        "street": "Im Teich 9",
        "profession": "Fischer",
        "emergencyShelter": "Beispielunterkunkft 1",
        "transferTo": null,
        "dateOfShelter": "2018-01-12",
        "dateOfTransfer": null,
        "profilePic": "assets/img/speakers/duck.jpg"
      },
      {
        "firstname": "Eva",
        "lastname": "Eagle",
        "dateOfBirth": "01.01.1900",
        "gender": "female",
        "residence": "Groß-Gerau",
        "nationality": "deutsch",
        "street": "Auf der Kirchturmspitze 1",
        "profession": "Pilot",
        "emergencyShelter": "Beispielunterkunkft 1",
        "transferTo": null,
        "dateOfShelter": "2018-01-12",
        "dateOfTransfer": null,
        "profilePic": "assets/img/speakers/eagle.jpg"
      },
      {
        "firstname": "Ellie",
        "lastname": "Elephant",
        "dateOfBirth": "01.01.1900",
        "gender": "female",
        "residence": "Groß-Gerau",
        "nationality": "deutsch",
        "street": "Am Wasserloch 4",
        "profession": "Ingineur für Wasserwirtschaft",
        "emergencyShelter": "Beispielunterkunkft 1",
        "transferTo": null,
        "dateOfShelter": "2018-01-12",
        "dateOfTransfer": null,
        "profilePic": "assets/img/speakers/elephant.jpg"
      },
      {
        "firstname": "Molly",
        "lastname": "Mouse",
        "dateOfBirth": "01.01.1900",
        "gender": "female",
        "residence": "Groß-Gerau",
        "nationality": "deutsch",
        "street": "Im dunklen Eck 2",
        "profession": "Gärtner",
        "emergencyShelter": "Beispielunterkunkft 1",
        "transferTo": null,
        "dateOfShelter": "2018-01-12",
        "dateOfTransfer": null,
        "profilePic": "assets/img/speakers/mouse.jpg"
      },
      {
        "firstname": "Paul",
        "lastname": "Puppy",
        "dateOfBirth": "01.01.1900",
        "gender": "male",
        "residence": "Groß-Gerau",
        "nationality": "deutsch",
        "street": "Im dunklen Eck 21",
        "profession": "Kindergärtner",
        "emergencyShelter": "Beispielunterkunkft 1",
        "transferTo": null,
        "dateOfShelter": "2018-01-12",
        "dateOfTransfer": null,
        "profilePic": "assets/img/speakers/puppy.jpg"
      }
    ];

    for (let item of items) {
      this.items.push(new Item(item));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.items;
    }

    return this.items.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  add(item: Item) {
    this.items.push(item);
  }

  delete(item: Item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
