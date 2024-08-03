import ContinentsRecoveries from "@/components/charts/ContinentsRecoveries";
import Header from "@/components/ui/Header";

export default async function Charts() {
  const response = await fetch("https://disease.sh/v3/covid-19/continents", {
    next: {
      revalidate: 3600,
    },
  });
  const data = await response.json();

  return (
    <>
      <Header>Worldwide stats</Header>

      <ContinentsRecoveries data={data} />
    </>
  );
}
