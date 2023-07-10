import holder from '../icon/ImagePlaceholder-light.svg'

const Titles = () => {
    return (
        <div class="mx-60 border-t-2 border-blue
                    xsm:max-lg:mx-6
                    dark:border-white">
            <h2 class="pt-20 text-2xl	text-blue font-bold dark:text-white">Title</h2>
            <p class="py-9">
                Line of copy in here to decribe this section. Line of copy in here to decribe this section. Line of copy in here to decribe this section. Line of copy in here to decribe this section. 
            </p>
            <div class="flex xsm:max-lg:flex-col">
                <img class="card-img " src={holder} alt=""/>
                <div class="ps-10 md:mt-3
                            xsm:max-lg:p-0">
                    <h5 class="text-xl font-bold">Title</h5>
                    <p class="text-base">
                        Leading, implementing and evolving engaging customer experiences and UI foundations for every touch-point across various platforms.
                    </p>
                    <button class="border border-blue 
                                    py-4 px-7 mt-7 text-xs
                                    text-blue rounded-full font-bold
                                    hover:text-white hover:bg-blue
                                    dark:hover:text-black dark:hover:bg-white
                                    dark:text-white dark:border-white
                                    dark:bg-dark-gray">
                                    Button Primary Light
                    </button>
                </div>
            </div>
            <div class="flex mt-9 
                        xsm:max-lg:flex-col-reverse xsm:max-lg: ">
                <div class="pe-10 md:mt-3 ">
                    <h5 class="text-xl font-bold">Title</h5>
                    <p class="text-base">
                        Leading, implementing and evolving engaging customer experiences and UI foundations for every touch-point across various platforms.
                    </p>
                    <button class="border border-blue
                                    py-4 px-7 mt-7 text-xs
                                    text-blue rounded-full font-bold
                                    hover:text-white hover:bg-blue
                                    dark:hover:text-black dark:hover:bg-white
                                    dark:text-white dark:border-white
                                    dark:bg-dark-gray">
                                    Button Primary Light
                    </button>
                </div>
                <img class="card-img " src={holder} alt=""/>
            </div>
        </div>
    )
}

export default Titles