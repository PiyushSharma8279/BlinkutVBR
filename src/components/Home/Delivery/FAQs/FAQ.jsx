import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null)


    const items = [
        {
            title: "Who are Blinkit delivery partners?",
            content: "They are independent contractors who partner with Blinkit to pick up grocery items ordered by consumers on the Blinkit app and deliver those items to the convenience of the consumers doorstep. They use their own 2-wheelers to make these deliveries and pick their own schedule",
        },
        {
            title: "Are there any specific requirements to become a delivery partner?",
            content: (
                <div className="text-sm sm:text-base">
                    <p>Yes, here’s a quick list:</p>
                    <ul className="list-disc ml-6 mt-2 space-y-1">
                        <li>Be 18 years or older</li>
                        <li>Own a two-wheeler</li>
                        <li>Have an Android phone with internet</li>
                        <li>Valid DL, RC, insurance & PAN card</li>
                        <li>Proof of address and active bank account</li>
                    </ul>
                </div>
            ),
        },
        {
            title: "When will I start getting orders to deliver?",
            content: (
                <div className="text-sm sm:text-base space-y-1">
                    <p>It’s simple, follow these 2 steps:</p>
                    <p>Step 1: Fill out the above form</p>
                    <p>Step 2: Our team will contact you</p>
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

                <div className="w-[80%] my-10">
                    <h2 className=" font-extrabold text-xl mb-6 lg:text-3xl">Frequently asked questions</h2>
                    <div className="space-y-4">
                        {items.map((item, index) => (
                            <div
                                key={index}
                                className="border-y border-gray-100 rounded-xl overflow-hidden py-3  "
                            >
                                <button
                                    onClick={() => handleToggle(index)}
                                    className="w-full flex justify-between items-center p-4 text-left bg-gray-50 cursor-pointer"
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
                    <h2 className=" my-10">For more information, write to us at <span className=" font-bold">deliveryjob@vbr.com</span></h2>
                </div>
            </div>
        </>
    );
}
