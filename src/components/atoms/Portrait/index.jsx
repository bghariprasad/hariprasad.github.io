import portrait from '../../../assets/images/portrait.jpg';

function Portrait() {
  return (
    <div className="rounded-full overflow-hidden md:w-96 w-10/12 border-yellow-950 border-2 border-primary">
      <img className="object-contain" src={portrait} alt="self-portrait" />
    </div>
  )
}

export default Portrait