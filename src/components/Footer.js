const Footer = () => {
    return (
        <footer class="mx-60 mt-12 mb-20 p-10
                    bg-gray rounded-xl shadow-2xl
                    xsm:max-lg:mx-6
                    xsm:max-lg:p-10
                    dark:bg-dark-gray">
            <h4 class="font-bold">
            Come say ‘hello’  👋  we’d really to talk about your project!   
            </h4>
            <button class="border bg-white me-1
                    border-blue py-4 px-7 mt-9 font-bold
                    text-xs text-blue rounded-full
                    xsm:max-lg:py-2  xsm:max-lg:px-2
                    hover:text-white  hover:bg-blue
                    dark:hover:text-black dark:hover:bg-white
                    dark:text-white dark:border-white
                    dark:bg-dark-gray">
                    Email us
            </button>
            <button class="border bg-white
                        border-blue py-4 px-7 mt-9 font-bold
                        text-xs text-blue rounded-full
                        xsm:max-lg:py-2
                        xsm:max-lg:px-2
                        xsm:max-lg:mt-2
                        hover:text-white
                        hover:bg-blue
                        dark:hover:text-black dark:hover:bg-white
                        dark:text-white dark:border-white
                        dark:bg-dark-gray">
                @  us on Twitter
            </button>
        </footer>
    )
}

export  default Footer