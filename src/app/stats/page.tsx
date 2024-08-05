import { Suspense } from "react";

import WorldwideStatistics from "@/components/charts/worldwideStatistics/WorldwideStatistics";
import Header from "@/components/ui/Header";
import Loader from "@/components/ui/Loader";

export default async function Charts() {
  return (
    <>
      <Header>Worldwide Statistics</Header>

      <Suspense fallback={<Loader />}>
        <WorldwideStatistics />
      </Suspense>
    </>
  );
}
