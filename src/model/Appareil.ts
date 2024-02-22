export class Appareil{
  name: string;
  description : string[] |undefined;
  isOn : boolean;

  constructor(name: string) {
    this.name = name;
    this.isOn = false;
  }
}
