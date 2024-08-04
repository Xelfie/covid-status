import { faVirusCovid } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Loader() {
  return (
    <div className="flex size-full flex-1 items-center justify-center">
      <FontAwesomeIcon
        className="flex grow animate-pulse text-primary sm:text-8xl"
        icon={faVirusCovid}
        size="7x"
      />
    </div>
  );
}
