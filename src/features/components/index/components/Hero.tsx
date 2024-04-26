import { FC, FormEvent, ReactElement } from 'react';

const Hero: FC = (): ReactElement => {
  return (
    <div className="relative bg-white pb-20 pt-40 dark:bg-gray-900 lg:pt-44">
      <div className="relative m-auto px-6 xl:container md:px-12 lg:px-6">
        <h3 className="mb-4 mt-4 max-w-2xl pb-2 text-center text-2xl font-normal dark:text-white lg:text-left"></h3>
        <h1 className="text-center text-4xl font-black text-blue-900 dark:text-white sm:mx-auto sm:w-10/12 sm:text-5xl md:w-10/12 md:text-5xl lg:w-auto lg:text-left xl:text-7xl">
        Conéctate, colabora y crea grandes amistades en Yebaam <br className="hidden lg:block" />{' '}
          <span className="relative bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent dark:from-blue-400 dark:to-cyan-300">
          con una comunidad vibrante
          </span>
          .
        </h1>
        <div className="lg:flex">
          <div className="relative mt-8 space-y-8 text-center sm:mx-auto sm:w-10/12 md:mt-16 md:w-2/3 lg:ml-0 lg:mr-auto lg:w-7/12 lg:text-left">
            <p className="text-gray-700 dark:text-gray-300 sm:text-lg lg:w-11/12">
            </p>

            <div className="flex w-full justify-between gap-6 lg:gap-12">
              <form
                className="mx-auto flex w-full items-center bg-white"
                onSubmit={(event: FormEvent) => {
                  event.preventDefault();
                }}
              ></form>
            </div>
          </div>
          <div className="-right-10 hidden lg:col-span-2 lg:mt-0 lg:flex">
            <div className="relative w-full">
              <img
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
                className="relative w-full"
                alt=""
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
