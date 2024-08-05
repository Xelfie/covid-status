import Link from "next/link";

import Header from "@/components/ui/Header";
import SubHeader from "@/components/ui/SubHeader";
import { faQuestion } from "@fortawesome/free-solid-svg-icons/faQuestion";
import { faVirusCovid } from "@fortawesome/free-solid-svg-icons/faVirusCovid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  return (
    <>
      <section className="flex flex-1 flex-col items-center justify-center gap-10">
        <Header className="-mb-9 mt-5 flex-col gap-5">
          <span className="text-[calc(1rem+1vw)] text-textPrimary">
            Worldwide updates on the status of
          </span>
          <span>
            C
            <span className="m-1 animate-pulse">
              <FontAwesomeIcon icon={faVirusCovid} />
            </span>
            VID-19
          </span>
        </Header>

        <p className="text-center">
          Based on{" "}
          <Link
            className="text-primary hover:text-accent"
            href="https://disease.sh"
            target="_blank"
            rel="noopener noreferrer"
          >
            disease.sh - Open Disease Data API
          </Link>
        </p>
      </section>

      <section>
        <Link
          href="/stats"
          className="flex items-center justify-center rounded-full border border-primary px-4 py-1 text-lg text-textPrimary hover:border-accent hover:text-accent"
        >
          View Statistics
        </Link>
      </section>

      <section className="mb-2 flex flex-1 items-center justify-center">
        <div className="flex flex-row items-start gap-4 rounded-2xl border border-secondary/50 p-8 sm:items-center">
          <div>
            <FontAwesomeIcon
              className="text-9xl text-primary sm:text-8xl"
              icon={faQuestion}
            />
          </div>
          <div className="max-w-lg">
            <SubHeader>What is COVID-19?</SubHeader>
            <p>
              COVID-19 is the disease caused by the SARS-CoV-2 coronavirus. It
              usually spreads between people in close contact.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
