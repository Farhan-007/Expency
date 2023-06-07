import { useEffect, useState } from 'react';
import Data from './Data';
import './Style.css'
let debtData = JSON.parse(localStorage.getItem("debtData")) || [];
const Borrow = () => {


    const [name, setName] = useState();
    const [contact, setContact] = useState();
    const [mail, setMail] = useState();
    const [amount, setAmount] = useState();
    const [date, setDate] = useState();
    const [input, setInput] = useState();



    const handleNameChange = (event) => {
        setName(event.target.value)
    }

    const handleAmountChange = (event) => {
        setAmount(event.target.value)
    }

    const handleMailChange = (event) => {
        setMail(event.target.value)
    }

    const handleContactChange = (event) => {
        setContact(event.target.value)
        console.log(contact)
    }


    const handleDateChange = (event) => {
        setDate(event.target.value)
        console.log(date)
    }


    useEffect(() => {

        console.log(date);
        

    }, [debtData])


    const borrow = () => {
        setInput('');
        var dateC = new Date();
        debtData.unshift({
            name: name,
            amount: amount,
            mail: mail,
            contact: contact,
            currentDate: `${dateC}`,
            dueDate: date,
            status: "Borrowed"
        });
        localStorage.setItem("debtData", JSON.stringify(debtData));
        setTimeout(() => {
            window.location.reload()
        }, 100)

    }

    const lend = () => {
        setInput('');
        var dateD = new Date();
        debtData.unshift({
            name: name,
            amount: amount,
            mail: mail,
            contact: contact,
            currentDate: `${dateD}`,
            dueDate: date,
            status: "Lent"
        });
        localStorage.setItem("debtData", JSON.stringify(debtData));
        setTimeout(() => {
            window.location.reload()
        }, 100)
    }

    return (
        <>
            <div className="text-white text-center pt-8 flex flex-col md:flex-row justify-center items-center ">
                
                <div className=" left-0 w-[100%] mt-20 md:w-1/2 h-[80vh] flex justify-center items-center">
                    <div className=" left-0 w-[100%] md:fixed md:w-1/2 h-[80vh] flex justify-center items-center ">
                        <form className='flex flex-col justify-around items-center h-full w-[90%] md:w-[65%] input-field'>
                            <div className="w-full flex justify-center items-center">
                                <input onChange={handleNameChange} className='inputs' placeholder='Name' type="text" value={input} name="" id="" />
                            </div>

                            <div className="w-full flex justify-center items-center">
                                <input className='inputs' onChange={handleAmountChange} placeholder='Amount' type="number" value={input} name="" id="" />
                            </div>

                            <div className="w-full flex justify-center items-center">
                                <input onChange={handleMailChange} className='inputs' placeholder='Mail' type="email" value={input} name="" id="" />
                            </div>



                            <div className="w-full flex justify-center items-center">
                                <input className='inputs' onChange={handleContactChange} placeholder='Contact Number' value={input} type="tel" name="" id="" />
                            </div>

                            <div className="w-full flex flex-col justify-center items-center">
                                <div className='date flex justify-left items-left w-[80%]'>
                                    Due Date
                                </div>
                                <input onChange={handleDateChange} className='inputs' value={input} type="datetime-local" placeholder='Due Date' name="" id="" />
                            </div>


                            <div className="actionButton flex justify-evenly w-full">
                                <button onClick={borrow} className="actionButtons w-1/4 bg-red-500">
                                    Borrowed
                                </button>

                                <button onClick={lend} className="actionButtons w-1/4 bg-green-500">
                                    Lent
                                </button>
                            </div>


                        </form>
                    </div>
                </div>






                <div className='md:pt-12 left w-[90%] md:w-1/2 m-auto mt-4   z-[-1]'>
                    <div className="w-[90%] h-[70vh] m-auto">
                        <Data />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Borrow;