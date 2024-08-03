"use client";

import { CategoryScale, Chart as ChartJS } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

import useChartThemeColors from "@/hooks/useChartThemeColors";

import SubHeader from "../ui/SubHeader";

import { ContinentStats } from "./types";

interface CasesToPopulationRatioProps {
  data: ContinentStats[];
}

export default function CasesToPopulationRatio({
  data,
}: CasesToPopulationRatioProps) {
  ChartJS.register(CategoryScale);

  const { primaryColor, accentColor } = useChartThemeColors();

  const totalCases = data.reduce(
    (accumulator, continentStats) => accumulator + continentStats.cases,
    0,
  );

  const totalPopulation = data.reduce(
    (accumulator, continentStats) => accumulator + continentStats.population,
    0,
  );

  return (
    <div className="flex w-full flex-col gap-4">
      <SubHeader>Reported Cases to Population Ratio</SubHeader>

      <Doughnut
        className="min-h-80 w-full min-w-80" // this doesnt work very well...
        data={{
          labels: ["Worldwide population", "Total reported cases"],
          datasets: [
            {
              label: "Total",
              data: [totalPopulation, totalCases],
              backgroundColor: [
                `rgb(${primaryColor} / 80%)`,
                `rgb(${accentColor} / 80%)`,
              ],
              hoverBackgroundColor: [
                `rgb(${primaryColor})`,
                `rgb(${accentColor})`,
              ],
              borderColor: [`rgb(${primaryColor})`, `rgb(${accentColor})`],
              borderWidth: 0,
              borderRadius: 0,
            },
          ],
        }}
      />
    </div>
  );
}
