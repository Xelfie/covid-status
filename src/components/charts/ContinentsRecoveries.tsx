"use client";

import { CategoryScale, Chart as ChartJS } from "chart.js/auto";
import { Bar } from "react-chartjs-2";

import useChartThemeColors from "@/hooks/useChartThemeColors";

import SubHeader from "../ui/SubHeader";

import { ContinentStats } from "./types";

interface ContinentsRecoveryProps {
  data: ContinentStats[];
}

export default function ContinentsRecoveries({
  data,
}: ContinentsRecoveryProps) {
  ChartJS.register(CategoryScale);

  const { primaryColor, accentColor } = useChartThemeColors();

  return (
    <div className="flex w-full flex-col gap-4">
      <SubHeader>Recoveries per continent</SubHeader>
      <Bar
        data={{
          labels: data.map((dataPerContinent) => dataPerContinent.continent),
          datasets: [
            {
              label: "Cases",
              data: data.map((dataPerContinent) => dataPerContinent.cases),
              backgroundColor: [`rgb(${primaryColor})`],
              borderRadius: 3,
            },
            {
              label: "Recovered",
              data: data.map((dataPerContinent) => dataPerContinent.recovered),
              backgroundColor: [`rgb(${accentColor})`],
              borderRadius: 3,
            },
          ],
        }}
      />
    </div>
  );
}
