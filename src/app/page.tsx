import { faQuestion } from "@fortawesome/free-solid-svg-icons/faQuestion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between gap-5 p-8 md:px-24">
      <h1 className="text-center text-5xl font-medium text-primary sm:text-6xl">
        COVID-19 Status
      </h1>

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
          <h2 className="text-2xl text-primary sm:text-3xl">
            What is COVID-19?
          </h2>
          <p>
            COVID-19 is the disease caused by the SARS-CoV-2 coronavirus. It
            usually spreads between people in close contact.
          </p>
        </div>
      </section>
    </main>
  );
}
