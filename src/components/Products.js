import holder from '../icon/ImagePlaceholder-light.svg'

const Products = () => {
    return (
        <div class="mx-60 mt-12 mb-20 
                    xsm:max-lg:mt-6
                    xsm:max-lg:mx-6">
            <h5 class="text-xl text-blue align-text-top mb-9 font-bold dark:text-white">Title</h5>
            <p>
            Line of copy in here to decribe this section. Line of copy in here to decribe this section. Line of copy in here to decribe this section. Line of copy in here to decribe this section. Line of copy in here to decribe this section.         
            </p>
            <div class="flex mt-20 
                xsm:max-md:flex-col">
                <img class="placeholder-img
                        xsm:max-md:mx-auto" 
                src={holder} alt=""/>
                <div class="ms-9 xsm:max-md:mt-3 xsm:max-md:ms-0 ">
                    <h5 class="text-xl font-bold title">Title</h5>
                    <label for="title" class="text-sm">Subhead in here</label>
                    <p class="mt-4">
                    Leading, implementing and evolving engaging customer experiences and UI foundations for every touch-point across various platforms. Leading, implementing and evolving engaging customer experiences and UI foundations for every touch-point across various platforms. Leading, implementing and evolving engaging customer experiences and UI foundations for every touch-point across various platforms.
                    </p>
                </div>
            </div>
            <div class="flex mt-20 
                xsm:max-md:flex-col">
                <img class="placeholder-img
                        xsm:max-md:mx-auto" 
                src={holder} alt=""/>
                <div class="ms-9 xsm:max-md:mt-3 xsm:max-md:ms-0">
                    <h5 class="text-xl font-bold title">Title</h5>
                    <label for="title" class="text-sm">Subhead in here</label>
                    <p class="mt-4">
                    Leading, implementing and evolving engaging customer experiences and UI foundations for every touch-point across various platforms. Leading, implementing and evolving engaging customer experiences and UI foundations for every touch-point across various platforms. Leading, implementing and evolving engaging customer experiences and UI foundations for every touch-point across various platforms.
                    </p>
                </div>
            </div>
            <div class="flex mt-20 
                xsm:max-md:flex-col">
                <img class="placeholder-img
                        xsm:max-md:mx-auto" 
                src={holder} alt=""/>
                <div class="ms-9 xsm:max-md:mt-3 xsm:max-md:ms-0">
                    <h5 class="text-xl font-bold title">Title</h5>
                    <label for="title" class="text-sm">Subhead in here</label>
                    <p class="mt-4">
                    Leading, implementing and evolving engaging customer experiences and UI foundations for every touch-point across various platforms. Leading, implementing and evolving engaging customer experiences and UI foundations for every touch-point across various platforms. Leading, implementing and evolving engaging customer experiences and UI foundations for every touch-point across various platforms.
                    </p>
                </div>
            </div>
        </div>
    )
}
 export default Products