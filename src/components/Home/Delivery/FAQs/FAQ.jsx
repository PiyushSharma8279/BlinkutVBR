import { useState } from "react";

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null)


    const items = [
        {
            title: "Who are Blinkit delivery partners?",
            content: "They are independent contractors who partner with Blinkit to pick up grocery items ordered by consumers on the Blinkit app and deliver those items to the convenience of the consumers doorstep. They use their own 2-wheelers to make these deliveries and pick their own schedule",
        },
        {
            title: "Are there any specific requirements I need to meet to become a delivery partner with Blinkit?",
              content: (
      <>
        <p className=" text-xl">
         Yes, here’s a quick list for your reference:
        </p>
        <p className="mt-2">
         # Be 18 years of age or older
        </p>
        <p className="mt-2">
         # Own a two-wheeler
        </p>
        <p className="mt-2">
        # Own an Android phone with an active internet connection
        </p>
        <p className="mt-2">
         # Have a valid driving license, registration certificate (RC), insurance certificate and PAN (Permanent Account Number) card
        </p>
        <p className="mt-2">
         # Have an address proof and active bank account
        </p>
      </>
    ),
            
        },
        {
            title: "When will I start getting the orders to deliver?",
            content: (
                <>
                <p>It’s simple, here are the 2 easy steps to become a Blinkit delivery partner:</p>
                <p className="mt-2">Step 1:   fill the above form</p>
                <p className="mt-2">Step 2:   our team will connect with you for the further process</p>
                
                </>
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


                <div className="p-4 w-[80%]">
                    <h2 className=" font-extrabold text-3xl mb-6">Frequently asked questions</h2>
                    {items.map((item, index) => (
                        <div key={index} className="mb-4">
                            <button className="font-bold mb-1 acordianTitle" onClick={() => handleToggle(index)}>
                                {item.title}
                            </button>
                            {openIndex === index &&
                                <div className="text-gray-900  acordianItem">{item.content}</div>}
                        </div>
                    ))}
                    <h2 className=" my-10">For more information, write to us at <span className=" font-bold">deliveryjob@vbr.com</span></h2>
                </div>
            </div>
        </>
    );
}
