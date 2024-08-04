"use client";

import { CategoryScale, Chart as ChartJS } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

import useChartThemeColors from "@/hooks/useChartThemeColors";

import { ContinentStats } from "../../types/openDiseaseResponseTypes";
import SubHeader from "../ui/SubHeader";

import ResponsiveChart from "./ResponsiveChart";

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

      <ResponsiveChart className="h-[80vw] max-h-[80vh]">
        <Doughnut
          options={{ maintainAspectRatio: false }}
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
      </ResponsiveChart>
    </div>
  );
}
