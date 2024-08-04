"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { Radar } from "react-chartjs-2";

import useChartThemeColors from "@/hooks/useChartThemeColors";
import { ContinentStats } from "@/types/openDiseaseResponseTypes";

import SubHeader from "../ui/SubHeader";

import ResponsiveChart from "./ResponsiveChart";

interface CompareContinentsProps {
  data: ContinentStats[];
}

interface ContinentDropdownProps extends CompareContinentsProps {
  defaultValue: string;
  setContinent: Dispatch<SetStateAction<ContinentStats>>;
}

function ContinentDropdown({
  data,
  defaultValue,
  setContinent,
}: ContinentDropdownProps) {
  return (
    <select
      className="bg-backgroundDropdown rounded-md px-2 text-textPrimary"
      defaultValue={defaultValue}
      onChange={(e) => {
        const selectedContinentData = data.find(
          (continentData) => continentData.continent === e.target.value,
        );
        if (selectedContinentData) setContinent(selectedContinentData);
      }}
    >
      {data.map(({ continent }) => (
        <option key={continent} value={continent}>
          {continent}
        </option>
      ))}
    </select>
  );
}

export default function CompareContinents({ data }: CompareContinentsProps) {
  const { primaryColor, secondaryColor, accentColor } = useChartThemeColors();
  const [firstContinent, setFirstContinent] = useState(data[0]);
  const [secondContinent, setSecondContinent] = useState(data[3]);

  return (
    <div className="flex w-full flex-col gap-6 lg:relative">
      <SubHeader>Compare COVID-19 cases between continents</SubHeader>

      <div className="flex flex-col justify-center gap-4 sm:flex-row lg:absolute lg:right-0 lg:top-24 lg:z-10 lg:max-w-48 lg:flex-col lg:rounded-md lg:border lg:border-secondary/50 lg:bg-backgroundStart/30 lg:p-4 lg:text-center">
        <span>Compare</span>
        <ContinentDropdown
          data={data}
          defaultValue={firstContinent.continent}
          setContinent={setFirstContinent}
        />
        <span>with</span>
        <ContinentDropdown
          data={data}
          defaultValue={secondContinent.continent}
          setContinent={setSecondContinent}
        />
      </div>

      <ResponsiveChart className="h-[80vw] max-h-[80vh]">
        <Radar
          options={{
            maintainAspectRatio: false,
            scales: {
              r: {
                grid: {
                  color: `rgb(${secondaryColor} / 40%)`,
                },
                angleLines: {
                  color: `rgb(${secondaryColor} / 40%)`,
                },
              },
            },
          }}
          data={{
            labels: ["Population", "Cases", "Recoveries", "Deaths"],
            datasets: [
              {
                label: firstContinent.continent,
                data: [
                  firstContinent.population,
                  firstContinent.cases,
                  firstContinent.recovered,
                  firstContinent.deaths,
                ],
                backgroundColor: [`rgb(${primaryColor} / 30%)`],
                borderColor: [`rgb(${primaryColor})`],
                borderWidth: 1,
              },
              {
                label: secondContinent.continent,
                data: [
                  secondContinent.population,
                  secondContinent.cases,
                  secondContinent.recovered,
                  secondContinent.deaths,
                ],
                backgroundColor: [`rgb(${accentColor} / 50%)`],
                borderColor: [`rgb(${accentColor})`],
                borderWidth: 1,
              },
            ],
          }}
        />
      </ResponsiveChart>
    </div>
  );
}
