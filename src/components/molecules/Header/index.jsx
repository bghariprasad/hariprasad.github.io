import portfolio from '../../../assets/images/portfolio.png';

function Header() {

  const handleRoute = () => {
    window.open('https://www.linkedin.com/in/hari-prasad-b-g/', '_blank', 'noopener noreferrer');
  };

  return (
    <header className="sm:px-20 px-5 flex justify-between items-center bg-bgDark h-20 z-10 fixed left-0 right-0">
      <div className="w-2/12">
        <img alt="logo" src={portfolio} className='w-14 h-14' ></img>
      </div>
      <ul className="w-4/12 justify-between md:flex text-text_primary cursor-pointer font-medium hidden">
        <a href="#about">About</a>
        <a href="#skills">Skill</a>
        <a href="#experience">Experience</a>
        <a href="#project">Project</a>
        {/* <a href="#education">Education</a> */}
      </ul>
      <div className="w-2/12 flex justify-end">
        <button onClick={handleRoute} className="rounded bg-button text-text_primary w-24 h-10 hover:bg-buttonHighlight">LinkedIn</button>
      </div>
    </header>
  )
}

export default Header;