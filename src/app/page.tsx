import Link from "next/link";

import Header from "@/components/ui/Header";
import SubHeader from "@/components/ui/SubHeader";
import { faQuestion } from "@fortawesome/free-solid-svg-icons/faQuestion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  return (
    <>
      <Header>COVID-19 Status</Header>

      <section className="flex flex-1 items-center">
        <p className="flex flex-col items-center gap-4 text-center">
          <span className="text-xl sm:text-2xl">
            Worldwide updates on the status of COVID-19
          </span>
          <span>
            Based on{" "}
            <Link
              className="text-primary hover:text-accent"
              href="https://disease.sh"
              target="_blank"
              rel="noopener noreferrer"
            >
              disease.sh - Open Disease Data API
            </Link>
          </span>
        </p>
      </section>

      <section className="mb-2 flex flex-row items-start gap-4 rounded-2xl border border-secondary/50 p-8 sm:items-center">
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
      </section>
    </>
  );
}
