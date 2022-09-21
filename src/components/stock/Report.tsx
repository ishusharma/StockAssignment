import React, { ChangeEvent, useEffect, useState } from "react";
import { Datum } from '../../models/Stock';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import { useRecoilState, useRecoilValue } from "recoil";
import { stocksAtom, stocksSelector } from "../../states/StockState/StockList";
import axios from "axios";


const Report: React.FC = () => {
    const [, setStocks] = useRecoilState(stocksAtom); // global state variable
    const stocks = useRecoilValue(stocksSelector); //global state variable
    const [searchSymbol, setSearchSymbol] = useState(''); // for local state variable
   
    const getData = (param: string) => { //getting param for updating chart as per symbol search
        param=param.toUpperCase();
        if(param)
        {
          //call api service 
        axios.get('http://api.marketstack.com/v1/eod?access_key=3dc53bdf0a3a0a47b62270dae3b28b5b&symbols='+param)
            .then((response) => {
                if (response) {
                    console.log(response.data);
                    const result = response.data;
                    if (result.data && result.data.length) { //verify whether we have data in the API 
                        setStocks(result.data as Datum[]); //set api response data into globally variable
                    }                    
                }
            });
        }        
    }

    //fetch the input data(symbol) and set inti local state varibale
    const onChangeSearchSymbol = (e: ChangeEvent<HTMLInputElement>) => {
        const searchSymbol = e.target.value;
        setSearchSymbol(searchSymbol);       
      };

      //click search button and hit the API for getting new data as per symbol search
      const findBySymbol = () => {
        getData(searchSymbol);   //passing the symbol input field data into getdata function       
      };
      

    return (
        <>
    <div className="col-md-8">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by symbol"
            value={searchSymbol}
            onChange={onChangeSearchSymbol}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary btn btn-success .text-white"
              type="button"
              onClick={findBySymbol}
            >
              Search
            </button>
          </div>
        </div>
      </div>
            <div className="list row">                
                <div className='App s_chart'>
                    <HighchartsReact containerProps={{ style: { height: "100%" } }} highcharts={Highcharts} options={stocks} />
                </div>
            </div>
        </>
    );
};

export default Report;
