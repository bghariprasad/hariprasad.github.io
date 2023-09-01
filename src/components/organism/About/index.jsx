import Designation from "../../atoms/Designation"
import Portrait from "../../atoms/Portrait"
import ResumeBtn from "../../atoms/ResumeBtn"
import ShortMe from "../../atoms/ShortMe"
import SummaryMe from "../../atoms/SummaryMe"


function About() {
  return (
      <main id="about" className="pt-20 px-20 bg-card_light min-h-screen text-text_primary flex items-center">
        <div className="w-7/12">
          <ShortMe />
          <Designation />
          <SummaryMe />
          <ResumeBtn />
        </div>
        <div className="w-5/12 flex justify-center">
          <Portrait />
        </div>
      </main>
  )
}

export default About