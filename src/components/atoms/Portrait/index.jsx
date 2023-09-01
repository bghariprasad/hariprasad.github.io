import portrait from '../../../assets/images/portrait.jpg';

function Portrait() {
  return (
    <div className="rounded-full overflow-hidden w-96 h-96 border-yellow-950 border-2 border-primary">
      <img className="object-contain rounded-full scale-150 translate-y-32" src={portrait} alt="self-portrait" />
    </div>
  )
}

export default Portrait