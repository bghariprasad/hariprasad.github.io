import Designation from "../../atoms/Designation"
import Portrait from "../../atoms/Portrait"
import ResumeBtn from "../../atoms/ResumeBtn"
import ShortMe from "../../atoms/ShortMe"
import SummaryMe from "../../atoms/SummaryMe"


function About() {
  return (
      <main id="about" className="pt-20 md:px-20 px-10 bg-card_light min-h-screen text-text_primary flex items-center flex-col-reverse sm:flex-row">
        <div className="w-full md:w-7/12 flex items-center flex-col md:items-start">
          <ShortMe />
          <Designation />
          <SummaryMe />
          <ResumeBtn />
        </div>
        <div className="w-full md:w-5/12 flex justify-center">
          <Portrait />
        </div>
      </main>
  )
}

export default About