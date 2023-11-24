'use client'
import React from 'react';
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
import { Line } from 'react-chartjs-2';
import { useState } from 'react';


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

export interface MunHomma {
    price: number,
    startDate: string,
    endDate: string
}
const tempData:MunHomma[] = [
    {"price":-50,"startDate":"2023-11-24T22:00:00.000Z","endDate":"2023-11-24T23:00:00.000Z"},
    {"price":-50,"startDate":"2023-11-24T21:00:00.000Z","endDate":"2023-11-24T22:00:00.000Z"},
    {"price":-50,"startDate":"2023-11-24T20:00:00.000Z","endDate":"2023-11-24T21:00:00.000Z"},
    {"price":-50,"startDate":"2023-11-24T19:00:00.000Z","endDate":"2023-11-24T20:00:00.000Z"},
    {"price":-50,"startDate":"2023-11-24T18:00:00.000Z","endDate":"2023-11-24T19:00:00.000Z"},
    {"price":-50,"startDate":"2023-11-24T17:00:00.000Z","endDate":"2023-11-24T18:00:00.000Z"},
    {"price":-50,"startDate":"2023-11-24T16:00:00.000Z","endDate":"2023-11-24T17:00:00.000Z"},
    {"price":-50,"startDate":"2023-11-24T15:00:00.000Z","endDate":"2023-11-24T16:00:00.000Z"},
    {"price":-50,"startDate":"2023-11-24T14:00:00.000Z","endDate":"2023-11-24T15:00:00.000Z"},
    {"price":-50,"startDate":"2023-11-24T13:00:00.000Z","endDate":"2023-11-24T14:00:00.000Z"},
    {"price":-1,"startDate":"2023-11-24T12:00:00.000Z","endDate":"2023-11-24T13:00:00.000Z"},
    {"price":0.001,"startDate":"2023-11-24T11:00:00.000Z","endDate":"2023-11-24T12:00:00.000Z"},
    {"price":2.604,"startDate":"2023-11-24T10:00:00.000Z","endDate":"2023-11-24T11:00:00.000Z"},
    {"price":2.683,"startDate":"2023-11-24T09:00:00.000Z","endDate":"2023-11-24T10:00:00.000Z"},
    {"price":2.587,"startDate":"2023-11-24T08:00:00.000Z","endDate":"2023-11-24T09:00:00.000Z"},
    {"price":2.574,"startDate":"2023-11-24T07:00:00.000Z","endDate":"2023-11-24T08:00:00.000Z"},
    {"price":2.484,"startDate":"2023-11-24T06:00:00.000Z","endDate":"2023-11-24T07:00:00.000Z"},
    {"price":1.995,"startDate":"2023-11-24T05:00:00.000Z","endDate":"2023-11-24T06:00:00.000Z"},
    {"price":0.549,"startDate":"2023-11-24T04:00:00.000Z","endDate":"2023-11-24T05:00:00.000Z"},
    {"price":0.192,"startDate":"2023-11-24T03:00:00.000Z","endDate":"2023-11-24T04:00:00.000Z"},
    {"price":0.042,"startDate":"2023-11-24T02:00:00.000Z","endDate":"2023-11-24T03:00:00.000Z"},
    {"price":0.015,"startDate":"2023-11-24T01:00:00.000Z","endDate":"2023-11-24T02:00:00.000Z"},
    {"price":0.012,"startDate":"2023-11-24T00:00:00.000Z","endDate":"2023-11-24T01:00:00.000Z"},
    {"price":0.184,"startDate":"2023-11-23T23:00:00.000Z","endDate":"2023-11-24T00:00:00.000Z"},
    {"price":3.101,"startDate":"2023-11-23T22:00:00.000Z","endDate":"2023-11-23T23:00:00.000Z"},
    {"price":3.112,"startDate":"2023-11-23T21:00:00.000Z","endDate":"2023-11-23T22:00:00.000Z"},
    {"price":6.999,"startDate":"2023-11-23T20:00:00.000Z","endDate":"2023-11-23T21:00:00.000Z"},
    {"price":8.059,"startDate":"2023-11-23T19:00:00.000Z","endDate":"2023-11-23T20:00:00.000Z"},
    {"price":10.861,"startDate":"2023-11-23T18:00:00.000Z","endDate":"2023-11-23T19:00:00.000Z"},
    {"price":10.826,"startDate":"2023-11-23T17:00:00.000Z","endDate":"2023-11-23T18:00:00.000Z"},
    {"price":10.819,"startDate":"2023-11-23T16:00:00.000Z","endDate":"2023-11-23T17:00:00.000Z"},
    {"price":10.843,"startDate":"2023-11-23T15:00:00.000Z","endDate":"2023-11-23T16:00:00.000Z"},
    {"price":10.835,"startDate":"2023-11-23T14:00:00.000Z","endDate":"2023-11-23T15:00:00.000Z"},
    {"price":10.59,"startDate":"2023-11-23T13:00:00.000Z","endDate":"2023-11-23T14:00:00.000Z"},
    {"price":10.809,"startDate":"2023-11-23T12:00:00.000Z","endDate":"2023-11-23T13:00:00.000Z"},
    {"price":10.912,"startDate":"2023-11-23T11:00:00.000Z","endDate":"2023-11-23T12:00:00.000Z"},
    {"price":10.932,"startDate":"2023-11-23T10:00:00.000Z","endDate":"2023-11-23T11:00:00.000Z"},
    {"price":10.86,"startDate":"2023-11-23T09:00:00.000Z","endDate":"2023-11-23T10:00:00.000Z"},
    {"price":10.871,"startDate":"2023-11-23T08:00:00.000Z","endDate":"2023-11-23T09:00:00.000Z"},
    {"price":10.781,"startDate":"2023-11-23T07:00:00.000Z","endDate":"2023-11-23T08:00:00.000Z"},
    {"price":10.635,"startDate":"2023-11-23T06:00:00.000Z","endDate":"2023-11-23T07:00:00.000Z"},
    {"price":7.228,"startDate":"2023-11-23T05:00:00.000Z","endDate":"2023-11-23T06:00:00.000Z"},
    {"price":2.036,"startDate":"2023-11-23T04:00:00.000Z","endDate":"2023-11-23T05:00:00.000Z"},
    {"price":1.462,"startDate":"2023-11-23T03:00:00.000Z","endDate":"2023-11-23T04:00:00.000Z"},
    {"price":1.247,"startDate":"2023-11-23T02:00:00.000Z","endDate":"2023-11-23T03:00:00.000Z"},
    {"price":1.242,"startDate":"2023-11-23T01:00:00.000Z","endDate":"2023-11-23T02:00:00.000Z"},
    {"price":1.19,"startDate":"2023-11-23T00:00:00.000Z","endDate":"2023-11-23T01:00:00.000Z"},
    {"price":0.625,"startDate":"2023-11-22T23:00:00.000Z","endDate":"2023-11-23T00:00:00.000Z"}
];

function TempPopulateNumlist(numArr:number[]) {
    tempData.forEach(item => {
      numArr.push(item.price);
    });
    return numArr;
}
function TempPopulateStringlist(stringArr:string[]) {
    tempData.forEach(item => {
      stringArr.push(item.startDate.slice(11,13) + "-" + item.endDate.slice(11,13));
    });
    return stringArr;
}


export default function Chartti() {
    const labels:string[] = [];
    var arr1:number[] = [];
    TempPopulateNumlist(arr1);
    TempPopulateStringlist(labels);
    const data = {
      labels,
      datasets: [
         {
          label: 'Hinta snt/kwh',
          data: arr1,
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        }
      ],
    };
    return(
        <>
          <div className='w-3/5 max-h-fit p-2 m-auto bg-white shadow-md shadow-black'>
            <Line className='w-auto h-auto' options={options} data={data} />
          </div>
        </>
    );
}