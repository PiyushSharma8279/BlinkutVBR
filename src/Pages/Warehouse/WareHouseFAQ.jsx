import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function WareHouseFAQ() {
    const [openIndex, setOpenIndex] = useState(null)


    const items = [
        {
            title: "Are there any specific requirements to become a VBR warehouse partner?",
            content:(
                <div className="text-sm sm:text-base">
                    <p>Yes, here’s a quick list:</p>
                    <ul className="list-disc ml-6 mt-2 space-y-1">
                        <li>You must be at least 18 years old</li>
                        <li>minimum education qualification – 10th pass certificate</li>
                        <li>basic English reading/writing skills</li>
                        <li>copy of Aadhaar card & PAN card </li>
                        <li>valid bank account</li>
                    </ul>
                </div>

            )
        },
        {
            title: "What are the benefits of working in a Blinkit warehouse?",
            content: (
                <p>In addition to earning upto ₹25000 per month, you also get one nutritious meal per shift, medical insurance coverage, plus Provident Fund in addition to the salary. We also offer 14 days paid leave for Covid</p>
            ),
        },
        {
            title: "What is the duration of the work-shifts?",
            content: (
                <div className="text-sm sm:text-base space-y-1">
                    We operate through two work shifts, day and night, each of which has a 9-hour work duration
                </div>
            ),
        },
        {
            title: "Do I get any bonuses?",
            content: "The working hours are flexible and you have an option to choose your own slots. We are happy to share more information at the time of your interview",
        },
        {
            title: "Is there any joining fees to get on-board as a Blinkit delivery partner?",
            content: "The working hours are flexible and you have an option to choose your own slots. We are happy to share more information at the time of your interview",
        },
        {
            title: "How much can I earn?",
            content: "The working hours are flexible and you have an option to choose your own slots. We are happy to share more information at the time of your interview",
        },
        {
            title: "How can a delivery partner report their grievances or issues?",
            content: "The working hours are flexible and you have an option to choose your own slots. We are happy to share more information at the time of your interview",
        },


    ];
    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index)


    }
    return (
        <>
            <div className="flex justify-center">

                <div className="w-[70%] my-10 max-w-[1200px]">
                    <h2 className=" font-extrabold text-xl mb-6 lg:text-3xl">Frequently asked questions</h2>
                    <div className="space-y-4">
                        {items.map((item, index) => (
                            <div
                                key={index}
                                className="border-y border-gray-100 rounded-xl overflow-hidden py-3 bg-[#e9eef1]   "
                            >
                                <button
                                    onClick={() => handleToggle(index)}
                                    className="w-full flex justify-between items-center p-4 text-left  cursor-pointer bg-[#e9eef1] "
                                >
                                    <span className="font-bold text-[#333] text-[20px] sm:text-base  ">
                                        {item.title}
                                    </span>
                                    {openIndex === index ? (
                                        <FaChevronUp className="text-gray-600" />
                                    ) : (
                                        <FaChevronDown className="text-gray-600" />
                                    )}
                                </button>

                                {openIndex === index && (
                                    <div className="px-4 pb-4 text-[#1F1F1F] text-[16px] sm:text-base">
                                        {item.content}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                    <h2 className=" my-10">For more information, write to us at <span className=" font-bold">warehousejob@vbr.com</span></h2>
                </div>
            </div>
        </>
    );
}
