import { assertEquals } from "@std/assert";
import { destinations } from "./reisender_hase.ts";
import { VerlosungsService } from "./absneakender_hase.ts";
import { Preis } from "./gewinnbarer_hase.ts";

Deno.test("Dubi folgt auf Isti", () => {
  const start = destinations.indexOf("Isti");
  const nextStepper = destinations[start + 1];

  assertEquals(nextStepper, "Dubi");
});

Deno.test("Zypi folgt auf Dubi", () => {
  const start = destinations.indexOf("Dubi");
  const nextStepper = destinations[start + 1];

  assertEquals(nextStepper, "Zypi");
});

Deno.test("alle verfügbaren Preise werden verlost", () => {
  const teilnehmer = [
    "A", "B", "C", "D", "E", "F", "G",
    "H", "I", "J", "K", "L", "M", "N",
  ];

  const preise = [
    new Preis("iPhone", 1),
    new Preis("Reise", 1),
    new Preis("Haribo", 2),
    new Preis("PlayStation", 3),
    new Preis("Sneaker", 5),
    new Preis("Gutschein", 2),
  ];

  const gewinner = new VerlosungsService(teilnehmer, preise).loseAus();

  assertEquals(gewinner.size, 14);
});
