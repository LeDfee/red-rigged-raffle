import { Preis } from "./gewinnbarer_hase.ts";

export class VerlosungsService {
  constructor(
    private teilnehmer: string[],
    private preise: Preis[],
  ) {}

  public loseAus(): Map<string, string> {
    const zufälligeTeilnehmer = this.mischeTeilnehmer();
    return this.verteilePreise(zufälligeTeilnehmer);
  }

  private mischeTeilnehmer(): string[] {
    const gemischteTeilnehmer: string[] = [];

    while (this.teilnehmer.length > 0) {
      const zufälligerIndex = Math.floor(Math.random() * this.teilnehmer.length);
      const [ausgewählterTeilnehmer] = this.teilnehmer.splice(zufälligerIndex, 1);

      gemischteTeilnehmer.push(ausgewählterTeilnehmer);
    }

    return gemischteTeilnehmer;
  }

  private verteilePreise(zufälligeTeilnehmer: string[]): Map<string, string> {
    const gewinner = new Map<string, string>();

    while (this.preise.length > 0 && zufälligeTeilnehmer.length > 0) {
      const aktuellerPreis = this.preise[0];
      const aktuellerGewinner = zufälligeTeilnehmer.shift() ?? "";

      gewinner.set(aktuellerGewinner, aktuellerPreis.nameDesPreises);

      aktuellerPreis.verfuegbareAnzahl--;

      if (aktuellerPreis.verfuegbareAnzahl <= 0) {
        this.preise.shift();
      }
    }

    return gewinner;
  }
}