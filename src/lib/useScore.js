import { useContext } from "react";
import { AnswersContext, SettingsContext } from "./context";

export function useScore(date) {
  const { answers } = useContext(AnswersContext);
  const { settings } = useContext(SettingsContext);
  const ans = answers[date]; // A little messy, but this variable is used so many times, the short name is justified for me

  if (!ans) return null;

  // TODO: write less messy algorithm than whatever this is
  const dietScore = (ans.animalBased * 2 + ans.local + ans.packages * 0.5) / 35;
  const goodsScore =
    (ans.clothes * 3 + ans.bags * 0.5 + ans.papers + ans.other) / 56;
  const commuteScore =
    ((((ans.commuteType === 12 /*12 = car*/
      ? (ans.commuteType * settings.carType) / 6
      : ans.commuteType) *
      ans.commuteLength) /
      12) *
      (100 - settings.carFuel)) /
    50 /
    480; // this is incredibly messy but should™ work
  const appliancesScore =
    (((ans.lights * (100 - settings.houseEnergy)) / 50) * settings.houseSize) /
      600 +
    (ans.washing * 3) / 32;
  const otherScore = (ans.trash * (100 - ans.recycling + 40)) / 140 / 10;

  let finalScore =
    (1 -
      (dietScore +
        goodsScore +
        commuteScore * 1.5 +
        appliancesScore +
        otherScore * 0.5) /
        5 -
      ans.plane / 40) *
    100;
  if (finalScore < 0) finalScore = 0;

  return Math.round(finalScore);
}
