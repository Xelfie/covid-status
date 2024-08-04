"use client";

import { CategoryScale, Chart as ChartJS } from "chart.js/auto";
import { Bar } from "react-chartjs-2";

import useChartThemeColors from "@/hooks/useChartThemeColors";

import { ContinentStats } from "../../types/openDiseaseResponseTypes";
import SubHeader from "../ui/SubHeader";

import ResponsiveChart from "./ResponsiveChart";

interface ContinentsRecoveriesProps {
  data: ContinentStats[];
}

export default function ContinentsRecoveries({
  data,
}: ContinentsRecoveriesProps) {
  ChartJS.register(CategoryScale);

  const { primaryColor, accentColor } = useChartThemeColors();

  return (
    <div className="flex w-full flex-col gap-4">
      <SubHeader>Recoveries per Continent</SubHeader>

      <ResponsiveChart className="min-h-80 sm:h-auto">
        <Bar
          options={{ maintainAspectRatio: false }}
          data={{
            labels: data.map((dataPerContinent) => dataPerContinent.continent),
            datasets: [
              {
                label: "Cases",
                data: data.map((dataPerContinent) => dataPerContinent.cases),
                backgroundColor: [`rgb(${primaryColor} / 80%)`],
                hoverBackgroundColor: [`rgb(${primaryColor})`],
                borderRadius: 3,
              },
              {
                label: "Recovered",
                data: data.map(
                  (dataPerContinent) => dataPerContinent.recovered,
                ),
                backgroundColor: [`rgb(${accentColor} / 80%)`],
                hoverBackgroundColor: [`rgb(${accentColor})`],
                borderRadius: 3,
              },
            ],
          }}
        />
      </ResponsiveChart>
    </div>
  );
}
