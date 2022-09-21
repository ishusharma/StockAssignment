import { useState } from "react";
import { atom, selector } from "recoil";
import { Datum } from "../../models/Stock";

//declare global state varibale
const stocksAtom = atom({
    key: 'stocks',
    default: [] as Datum[]
});

const stocksSelector = selector({
    key: 'stocksChart',
    get: ({ get }) => {
        const stocks = get(stocksAtom);
//get the global state variable data
        let volume: number[] = [];
        let open: number[] = [];
        let close: number[] = [];
        let high: number[] = [];
        let low: number[] = [];

        //parse the data and put into different different array for showing number of series in highchart
        stocks.forEach(stock => {
            volume.push(stock.volume);
            open.push(stock.open);
            close.push(stock.close);
            high.push(stock.high);
            low.push(stock.low);

        });

        //set highchart options
        return {            
            title: {                
                text: '<span style="font-size: 20px; font-style: oblique">Display Stock Data</span> '             
            },
            chart: {
                backgroundColor: null                
            },
            plotOptions: {
                series: {
                    allowPointSelect: true
                }
            },
            xAxis: {
                categories: volume,
            },
            series: [{
                name: 'open',
                data: open,
            }, {
                name: 'low',
                data: low
            }, {
                name: 'high',
                data: high
            },
            {
                name: 'close',
                data: close
            }],
           
        }

    }
});



export { stocksAtom, stocksSelector };