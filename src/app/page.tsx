import Link from "next/link";

import Header from "@/components/ui/Header";
import SubHeader from "@/components/ui/SubHeader";
import { faMaskFace } from "@fortawesome/free-solid-svg-icons/faMaskFace";
import { faQuestion } from "@fortawesome/free-solid-svg-icons/faQuestion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  return (
    <>
      <section className="flex flex-1 flex-col items-center justify-center gap-10">
        <Header className="-mb-5 mt-5 flex-col gap-5">
          <span className="text-[calc(1rem+1vw)] text-slate-50">
            Worldwide updates on the status of COVID-19
          </span>
          <FontAwesomeIcon icon={faMaskFace} size="4x" />
        </Header>

        <p>
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
