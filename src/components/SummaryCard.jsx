import lungIcon from '../images/respiratory rate.svg'
import temperatureIcon from '../images/temperature.svg'
import heartRateIcon from '../images/HeartBPM.svg'
import arrowIcon from '../images/ArrowDown.svg'

const SummaryCard = ({history}) => {
      // get most recent data
    const heartRate = history[0].heart_rate
    const respiratoryRate = history[0].respiratory_rate
    const temperature = history[0].temperature

    return (
    <div className="lower-summary">
        <div className="card blue">
        <img src={lungIcon} alt="card-icon" />
        <p>Respiratory Rate <br /> 
            <span>{respiratoryRate.value} bpm</span>
        </p>
        <small>{respiratoryRate.levels}</small>
        </div>
        <div className="card orange">
        <img src={temperatureIcon} alt="card-icon" />
        <p>Temperature <br /> 
            <span>{temperature.value}°F</span>
        </p>
        <small>{temperature.levels}</small>
        </div>
        <div className="card pink">
        <img src={heartRateIcon} alt="card-icon" />
        <p>Heart Rate <br /> 
            <span>{heartRate.value} bpm</span>
        </p>
        <small>
            <span><img src={arrowIcon} alt="arrow" className='arrow' /></span>
            {heartRate.levels}
        </small>
        </div>
    </div>  )
}

export default SummaryCard