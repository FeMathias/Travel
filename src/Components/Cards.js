import tic from '../Images/tic.png'

export default function Cards({country, map, location, date, description, image}) {
  return (
    <section id="card">
      <div>
        <img src={image} alt='avatar' className='BigImage'></img>
      </div>
      <div id='Info'>
        <div id='upperInfo'>
          <img src={tic} alt='tic'></img>
          <h2>{country}</h2>
          <h3><a href={map} tartget='_blank'>View on Google Maps</a></h3>
        </div>
        <div id='lowerInfo'>
          <h1>{location}</h1>
          <h2>{date}</h2>
          <p>{description}</p>
        </div>
      </div>
    </section>
  )
}