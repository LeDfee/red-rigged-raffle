import { VerlosungsService } from "./absneakender_hase.ts";
import { Preis } from "./gewinnbarer_hase.ts";

export class Verlosung {
  public main() {
    const teilnehmer = [
      "@Gangsta2007",
      "@LockeDerBoss",
      "@MiiMiiSeinBruder",
      "@AlphaKevin",
      "@RedSoldier499",
      "@Louisa12",
      "@Drachenlord",
      "@Tanzverbot",
      "@tiger10ab",
      "@kaesekrokette99",
      "@fortnite4ever",
      "@ColdplayFan",
      "@Sören2013",
      "@MichiJackson",
      "@WBSLegal",
      "@Ronaldo7",
      "@Timmmäääh",
      "@SonGoku2011",
      "@NarutoBoy2000",
      "@Diggah69",
      "@roflomat",
      "@waifu_weeb",
      "@derp",
      "@MaxPower9000",
      "@MikrowellenPizza2006",
      "@MeddlFan",
      "@SpecialNeedChild37",
      "@LeonMachere",
      "@LeonMachere",
      "@LeonMachere",
      "@LeonMachere",
      "@LeonMachere",
      "@LeonMachere",
      "@LeonMachere",
      "@LeonMachere",
      "@LeonMachere",
      "@LeonMachere",
      "@LeonMachere",
      "@LeonMachere",
      "@SimonDesue",
      "@SimonDesue",
      "@SimonDesue",
      "@SimonDesue",
      "@SimonDesue",
      "@SimonDesue",
      "@PrinzPuma",
      "@PrinzPuma",
      "@PrinzPuma",
      "@PrinzPuma",
    ];

    const preise = [
      new Preis("iPhone 17 Pro", 1),
      new Preis("Trip nach Dubi", 1),
      new Preis("Stepper nach Isti", 1),
      new Preis("Flug nach Zypi", 1),
      new Preis("10 kg Haribo", 2),
      new Preis("PlayStation 5 Slim", 3),
      new Preis("gebrauchte Sneaker", 5),
    ];

    const gewinner = new VerlosungsService(teilnehmer, preise).loseAus();

    for (const [teilnehmer, preis] of gewinner.entries()) {
      console.log(`${teilnehmer} gewinnt ${preis}`);
    }
  }
}

new Verlosung().main();