import {Injectable} from "@angular/core";
import {Appareil} from "../model/Appareil";

@Injectable({
  providedIn: 'root'
})

export class AppareilsService{

  appareilList: Appareil[] = [
    {
      name: 'Machine à laver',
      description: [
        'Volume: 6 litres',
        'Temps de lavage: 2 heures',
        'Consomation: 173 kWh/an'
      ],
      isOn: true
    },
    {
      name: 'Télévision',
      description: [
        'Dimensions: 40 pouces',
        'Consomation: 22 kWh/an'
      ],
      isOn: true
    },
    {
      name :'Ordinateur',
      description: [
        'Marque: fait maison',
        'Consomation: 500 kWh/an'
      ],
      isOn: true
    }
  ]
}
