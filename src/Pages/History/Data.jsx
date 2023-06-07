import React from 'react'
import { useState } from 'react';
export default function Data({ props }) {
    let transactions = JSON.parse(localStorage.getItem("transactions"));
    const [data, setData] = useState([transactions])
    console.log(setData)
    const credit = {
        backgroundColor: "rgb(22 23 36)",
        borderColor: "#357235"
    }

    const debit = {
        backgroundColor: "rgb(22 23 36)",
        borderColor: "#d13d3d"
    }

    const creditText = {
        color: "#357235"
    }

    const debitText = {
        color: "#d13d3d"
    }

    return (
        <div className=''>
            {
                data[0].map((data, index) => {
                    return (
                        <div key={index} className='border-2 w-[100%] text-[17px] md:text-[22px] h-[45px] my-[15px] px-[10px] py-[40px] font-class md:h-[60px] rounded-[10px] flex justify-between items-center text-white'
                            style={data.status === 'Credited' ? credit : debit}
                        >
                            <div  className='flex w-1/4 text-[23px] md:text-[28px]'>
                                ₹{data.amount ||  "₹00"}
                            </div>

                            <div style={data.status === 'Credited' ? creditText : debitText} className='flex text-center justify-center items-center w-1/4'>
                                {data.status || '-'}
                            </div>

                            <div>
                                <div>
                                    {data.time.slice(4, 16) || '-/-/-'}
                                </div>
                                <div>
                                    {data.time.slice(15, 24) || "00:00:00"}
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
