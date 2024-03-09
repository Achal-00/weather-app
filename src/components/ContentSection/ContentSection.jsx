import SectionOne from "./SectionOne";
import SectionThree from "./SectionThree";
import SectionTwo from "./SectionTwo";

export default function ContentSection() {
  return (
    <div className="flex flex-col gap-4">
      <SectionOne />
      <SectionTwo />
      <SectionThree />
    </div>
  );
}
