import avatar from '../icon/Avatar.png'

const Home = () => {
    return (
        <div class="mx-60 mt-12 mb-20 
                    xsm:max-lg:mx-6">
            <img class="w-25 h-25 rounded-full" src={avatar} alt=""/> 
                <h1 class="pt-10 font-bold	text-7xl mb-20 text-blue font-EBGaramond dark:text-white">
                Hello.
                <hr class="border-none"/>
                My name is Kevin.
                </h1>
            <hr class="mb-20 w-3/12 border-l-4 border-blue dark:border-white"></hr>
            <p>
                I'm a Digital Product and UI Designer – creating digital experiences that are intuitive for real people and making complex processes easy to use.
                <hr class="border-none"/>
                Right now, I'm Design Lead at Holiday Extras, covering all our digital platforms across a whole load of brands – leading a great team across design, UI engineering, accessibility and customer experience. I'm lucky to be part of a great team of designers, writers, engineers, PMs and data specialists – amongst others – testing, iterating and optimising our platforms and products.
                <hr class="border-none"/>
                I've got some work on Dribbble, some previous work at Saga and you can find me over on twitter and sometimes on Medium too. I also take too many photos.
            </p>
            <p class="mt-11 bg-gray-200 p-5 rounded-xl w-4/6
                        xsm:max-md:w-auto">
                Available for work and general design goodness – say hello
            </p>

        </div>
    )
}

export default Home