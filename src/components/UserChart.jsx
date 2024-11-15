import arrowIcon from '../images/ArrowDown.svg'
import upArrowIcon from '../images/ArrowUp.svg'
import { Line } from "react-chartjs-2";
import { 
  Chart as ChartJS, 
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import SummaryCard from './SummaryCard'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const UserChart = ({history}) => {  
  const dateLabels = history.slice(0, 6).map((hist) => `${hist.month.substring(0, 3)}, ${hist.year}`).reverse()
  
  const systolicBPs = history.slice(0, 6).map(hist => hist.blood_pressure.systolic.value).reverse()

  // both systolic and diastolic BP match so skewd skew data to potray seperate graph -- index (7, 13) had the best match.
  const diastolicBPs = history.slice(7, 13).map(hist => hist.blood_pressure.systolic.value).reverse()

  // get max systolic and min diastolic BP
  const highestBP = Math.max(...systolicBPs)
  const lowestBP = Math.min(...diastolicBPs)
  
  const chartData = {
    labels: dateLabels,
    datasets: [
      {
        label: "Systolic",
        data: systolicBPs,
        borderColor: "#E66FD2"
      },
      {
        label: "Diastolic",
        data: diastolicBPs,
        borderColor: "#8C6FE6"
      },
    ]
  }  

  const options = {
    responsiveness: true,
    plugins: {
      title: {
        display: true,
        text: "Blood Pressure"
      },  
      legend: {
        display: false
      },
    }, 
    elements: {
      line: {
        tension: 0.45,
      },
      point: {
        pointStyle: 'circle',
        borderWidth: 5
      }
    }
  }
  
  return (
    <div className='diag-container'>
      <div className="chart-container">
        <div className="linechart">
          <Line
            data={chartData}
            options={options}
            className="canvas"
          />
        </div>
        <div className="summary">
          <div className="systolic">
            <span className='sys-icon'></span>
            <small>Systolic</small>
            <p>{highestBP}</p>
            <small className='text-span'>
            <span><img src={upArrowIcon} alt="arrow" className='arrow' /></span>
            Higher than Average
          </small>
          </div>
          <div className='summary-line'></div>
          <div className="diastolic">
            <span className='dia-icon'></span>
            <small>Diastolic</small>
            <p>{lowestBP}</p>
            <small className='text-span'>
            <span><img src={arrowIcon} alt="arrow" className='arrow' /></span>
            Lower than Average
          </small>
          </div>
        </div>
      </div>
      <SummaryCard history={history} />
    </div>
  )
}

export default UserChart