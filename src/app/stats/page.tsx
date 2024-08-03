import { Suspense } from "react";

import CasesToPopulationRatio from "@/components/charts/CasesToPopulationRatio";
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
      <Header>Worldwide Statistics</Header>

      {/* TODO: Make is so the suspense is wrapping an ASYNC server component */}
      <Suspense
        fallback={<div className="flex w-full flex-col gap-4">Loading...</div>}
      >
        <ContinentsRecoveries data={data} />
        <CasesToPopulationRatio data={data} />
      </Suspense>
    </>
  );
}
