import Heading from "./Heading";
import SearchSection from "./SearchSection";

export default function Header() {
  return (
    <div className="grid gap-8">
      <SearchSection />
      <Heading />
    </div>
  );
}
