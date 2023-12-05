'use client'
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import { Line } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Päivän viimeisimmät hinnat',
    },
  },
};



export default function Chartti( {dataa}:{dataa:{labels:string[], datasets:{label:string, data:number[], borderColor:string, backgroundColor:string}[]}} ) {
    return(
        <>
          <div className='w-3/5 max-h-fit p-2 m-auto bg-white shadow-md shadow-black'>
            <Line className='w-auto h-auto' options={options} data={dataa} />
          </div>
        </>
    );
}