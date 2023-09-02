import './styles.css';

function ResumeBtn() {
  return (
    <section className='w-full md:text-left text-center'>
      <a rel="noreferrer" href={'https://drive.google.com/uc?export=download&id=15ELaZkvpbK-q12euz--G4KlyCtK2P6t2'} download="MyExampleDoc">
        <button className="resume-btn">Download Resume</button>
      </a>
    </section>
  )
}

export default ResumeBtn