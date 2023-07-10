import holder from '../icon/ImagePlaceholder-light.svg'

const Description = () => {
    return (
        <div class="my-20 bg-gray py-24 items-center flex 
                    xsm:max-lg:py-3 xsm:max-lg:h-full
                    dark:bg-dark-gray">
            <div class="flex xsm:max-lg:flex-col">
                <img class="card-img ms-15
                            xsm:max-lg:mx-auto"
                src={holder} alt=""/>
                <div class="ps-10 me-56 
                            xsm:max-lg:me-10
                            xsm:max-lg:mt-3">
                    <h5 class="text-xl text-blue align-text-top mb-9 font-bold dark:text-white">Title</h5>
                    <p class="text-base mb-9
                                xsm:max-lg:mb-0">
                        Line of copy in here to decribe this section. Line of copy in here to decribe this section. Line of copy in here to decribe this section. Line of copy in here to decribe this section. 
                        Line of copy in here to decribe this section. Line of copy in here to decribe this section. Line of copy in here to decribe this section. Line of copy in here to decribe this section. 
                        Line of copy in here to decribe this section. Line of copy in here to decribe this section.        
                    </p>
                    <button class="border bg-white font-bold
                                border-blue py-4 px-7 mt-7
                                text-xs text-blue rounded-full
                                hover:text-white hover:bg-blue
                                xsm:max-lg:mt-2
                                dark:hover:text-black dark:hover:bg-white
                                dark:text-white dark:border-white
                                dark:bg-dark-gray">
                        Sign up to our newsletter
                    </button>
                </div>
            </div>                                      
        </div>
    )
}

export default Description