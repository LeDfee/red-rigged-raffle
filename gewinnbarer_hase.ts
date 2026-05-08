export class Preis{
  constructor(
    private name: string,
    private anzahl: number,
  ) {}

  public get nameDesPreises(): string{
    return this.name;
  }

  public get verfuegbareAnzahl(): number{
    return this.anzahl;
  }

  public set verfuegbareAnzahl(neueAnzahl: number){
    this.anzahl = neueAnzahl;
  } 
}
