import React from 'react'
import { useState } from 'react';
export default function Data({ props }) {
    let debtData = JSON.parse(localStorage.getItem("debtData")) || [];
    const [data, setData] = useState([debtData])
    const credit = {
        backgroundColor: "rgb(22 23 36)",
        borderColor: "#d13d3d"
    }

    const debit = {
        backgroundColor: "rgb(22 23 36)",
        borderColor: "#357235"
    }

    const creditText = {
        color: "#d13d3d"
    }

    const debitText = {
        color: "#357235"
    }

    return (
        <>
            {
                data[0].map((data, index) => {
                    return (
                        <div key={index} className='border-2 w-[100%] text-[17px] md:text-[22px] h-[45px] my-[15px] px-[10px] py-[40px] font-class md:h-[60px] rounded-[10px] flex justify-between items-center text-white'
                            style={data.status == 'Borrowed' ? credit : debit}
                        >
                            <div className='flex flex-col text-left w-[100%] text-[15px] md:text-[15px]'>
                                <div className='flex justify-between items-center'>
                                    <div className="md:text-[25px] text-[20px]">{data.name || 'name'}</div>
                                    <img src="./assets/cross.png"
                                        className="cross w-[20px] h-[20px] " alt="dd" />
                                </div>
                                <div style={data.status == 'Borrowed' ? creditText : debitText} className="items-center w-1/2 pr-4">
                                    {data.status || '-'}
                                </div>

                                <div className="flex w-[100%] justify-between items-center  " >
                                    <div className='flex w-[100%]'>
                                        <div className=' pr-8'>
                                            {data.dueDate.slice(0, 10) || '-/-/-'}
                                        </div>
                                        <div>
                                            {data.dueDate.slice(11, 16) || "00:00:00"}
                                        </div>
                                    </div>
                                    <div style={data.status == 'Borrowed' ? creditText : debitText}
                                        className=" text-[20px]" >₹{data.amount || "₹00"}</div>

                                </div>

                            </div>


                            <div>
                                <div>
                                    {/* {data.dueDate.slice(4, 16) || '-/-/-'} */}
                                </div>
                                <div>
                                    {/* {data.date.slice(15, 24) || "00:00:00"} */}
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}
