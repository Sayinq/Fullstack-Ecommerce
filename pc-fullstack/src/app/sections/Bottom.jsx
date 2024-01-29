import React from 'react'

const Bottom = () => {
    return (
        <section className="flex flex-col relative w-screen h-auto">
            {/* Header */}
            <header className="w-full h-auto text-center text-white font-black text">
                <h2 className="hyphens-auto text-center mx-auto text-[1.875rem] font-black text-headline">What Others Say</h2>
            </header>
            {/* Reviews */}
            <div className="grid grid-cols-1 grid-rows-2 w-full h-auto gap-y-4 mt-12 p-8">
                <div className="flex flex-col w-full h-[300px] justify-evenly items-center rounded-lg bg-[#d2d2d2] p-8">
                    <h2 className="hyphens-auto text-center mx-auto text-[1.25rem] font-black text-headline">Reviewer</h2>
                    <p>
                        "Offering real-world performance data is a great idea, and makes the process of ordering a pc much less abstract for newcomers."
                    </p>
                </div>
                <div className="flex flex-col w-full h-[300px] justify-evenly items-center rounded-lg bg-[#d2d2d2] p-8">
                    <h2 className="hyphens-auto text-center mx-auto text-[1.25rem] font-black text-headline">Reviewer</h2>
                    <p>
                        "There's something lovely about having a PC that comes with a set of guaranteed predicted frames per-second target for the games I plan to play."
                    </p>
                </div>
                <div className="flex flex-col w-full h-[300px] justify-evenly items-center rounded-lg bg-[#d2d2d2] p-8">
                    <h2 className="hyphens-auto text-center mx-auto text-[1.25rem] font-black text-headline">Reviewer</h2>
                    <p>
                        "This is certainly a very near idea, and the company is putting it's money where it's mouth is regarding frame-rate estimations."
                    </p>
                </div>
            </div>
            
            {/* Shop Banner */}
            <div className="flex flex-col justify-center items-center w-screen h-[800px] bg-indigo-600 p-8">
                <p>PLACEHOLDER NAME</p>
                <h2 className="hyphens-auto text-center mx-auto text-[1.25rem] font-black text-headline">Fast Prebuilt Power</h2>
                <button className="w-full h-[50px] p-2 text-white border-2 border-white rounded-lg">Shop Prebuilt PCs</button>
            </div>

            {/* Mockup Newsletter */}
            <div className="w-screen h-fit p-8">
                <header className="flex flex-col w-fit h-fit text-white">
                    <h2 className="hyphens-auto text-[1.25rem] font-black text-headline">Stay in Touch</h2>
                    <p>Stay up to date on PLACEHOLDER product news and offers.</p>
                </header>
                <div className="flex flex-col w-full h-auto">

                    <label for="helper-text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                    <input type="email" id="helper-text" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="your@email.com" />
                    <p id="helper-text-explanation" class="mt-2 text-sm text-gray-500 dark:text-gray-400">We’ll never share your details. Read our <a href="#" class="font-medium text-blue-600 hover:underline dark:text-blue-500">Privacy Policy</a>.</p>

                </div>
            </div>
        </section>
    )
}

export default Bottom