import CasesToPopulationRatio from "./CasesToPopulationRatio";
import CompareContinents from "./CompareContinents";
import ContinentsRecoveries from "./ContinentsRecoveries";

export default async function WorldwideStatistics() {
  const response = await fetch("https://disease.sh/v3/covid-19/continents", {
    next: {
      revalidate: 3600,
    },
  });
  const data = await response.json();

  return (
    <>
      <CasesToPopulationRatio data={data} />
      <ContinentsRecoveries data={data} />
      <CompareContinents data={data} />
    </>
  );
}
