import Header from "@/components/ui/Header";
import SubHeader from "@/components/ui/SubHeader";
import { faQuestion } from "@fortawesome/free-solid-svg-icons/faQuestion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  return (
    <>
      <Header>COVID-19 Status</Header>

      <section>
        <p className="flex flex-col items-center gap-4 text-center">
          <span className="text-xl sm:text-2xl">
            Worldwide updates on the status of COVID-19
          </span>
          <span>
            Based on{" "}
            <a className="text-primary" href="https://disease.sh">
              disease.sh - Open Disease Data API
            </a>
          </span>
        </p>
      </section>

      <section className="flex flex-row items-start gap-4 sm:items-center">
        <div>
          <FontAwesomeIcon
            className="text-9xl text-primary sm:text-8xl"
            icon={faQuestion}
          />
        </div>
        <div>
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
