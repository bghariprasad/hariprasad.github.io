import './styles.css';

function ResumeBtn() {
  return (
    <section>
      <a rel="noreferrer" href={'ExampleDoc'} download="MyExampleDoc" target='_blank'>
        <button className="resume-btn">Download Resume</button>
      </a>
    </section>
  )
}

export default ResumeBtn