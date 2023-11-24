import React from "react";

const Footer = () => {
  return (
    <footer className="flex justify-between p-10 bg-gray-900">
      <div className=" text-green-600 mr-10 font-bold font-serif">
        <h1 className="text-4xl">FARMART</h1>
        <div className="flex justify-between p-2 text-4xl mt-6">
          <div className="m-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              strokeLinejoin="round"
              strokeMiterlimit="2"
              clipRule="evenodd"
              viewBox="0 0 600 600"
              width="60"
            >
              <g fillRule="nonzero">
                <path
                  fill="#FFFFFF"
                  d="M251.921.159c-68.418 0-76.997.29-103.867 1.516-26.814 1.224-45.127 5.482-61.152 11.71-16.566 6.438-30.615 15.052-44.62 29.057-14.005 14.005-22.619 28.054-29.057 44.62-6.228 16.024-10.486 34.337-11.71 61.151C.289 175.083 0 183.662 0 252.08c0 68.417.289 76.996 1.515 103.866 1.224 26.814 5.482 45.127 11.71 61.151 6.438 16.566 15.052 30.615 29.057 44.621 14.005 14.005 28.054 22.619 44.62 29.057 16.025 6.227 34.338 10.486 61.152 11.709 26.87 1.226 35.449 1.516 103.867 1.516 68.417 0 76.996-.29 103.866-1.516 26.814-1.223 45.127-5.482 61.151-11.709 16.566-6.438 30.615-15.052 44.621-29.057 14.005-14.006 22.619-28.055 29.057-44.621 6.227-16.024 10.486-34.337 11.709-61.151 1.226-26.87 1.516-35.449 1.516-103.866 0-68.418-.29-76.997-1.516-103.867-1.223-26.814-5.482-45.127-11.709-61.151-6.438-16.566-15.052-30.615-29.057-44.62-14.006-14.005-28.055-22.619-44.621-29.057-16.024-6.228-34.337-10.486-61.151-11.71C328.917.449 320.338.159 251.921.159zm0 45.392c67.265 0 75.233.256 101.797 1.468 24.562 1.121 37.901 5.225 46.778 8.674 11.759 4.57 20.151 10.03 28.966 18.845 8.816 8.815 14.275 17.208 18.845 28.966 3.45 8.877 7.554 22.216 8.674 46.778 1.212 26.564 1.469 34.532 1.469 101.798 0 67.265-.257 75.233-1.469 101.797-1.12 24.562-5.224 37.901-8.674 46.778-4.57 11.759-10.029 20.151-18.845 28.966-8.815 8.816-17.207 14.275-28.966 18.845-8.877 3.45-22.216 7.554-46.778 8.674-26.56 1.212-34.527 1.469-101.797 1.469-67.271 0-75.237-.257-101.798-1.469-24.562-1.12-37.901-5.224-46.778-8.674-11.759-4.57-20.151-10.029-28.967-18.845-8.815-8.815-14.275-17.207-18.844-28.966-3.45-8.877-7.554-22.216-8.675-46.778-1.212-26.564-1.468-34.532-1.468-101.797 0-67.266.256-75.234 1.468-101.798 1.121-24.562 5.225-37.901 8.675-46.778 4.569-11.758 10.029-20.151 18.844-28.966 8.816-8.815 17.208-14.275 28.967-18.845 8.877-3.449 22.216-7.553 46.778-8.674 26.564-1.212 34.532-1.468 101.798-1.468z"
                  transform="translate(44 43.838) scale(1.01619)"
                ></path>
                <path
                  fill="#FFFFFF"
                  d="M251.921 336.053c-46.378 0-83.974-37.596-83.974-83.973 0-46.378 37.596-83.974 83.974-83.974 46.377 0 83.973 37.596 83.973 83.974 0 46.377-37.596 83.973-83.973 83.973zm0-213.338c-71.447 0-129.365 57.918-129.365 129.365 0 71.446 57.918 129.364 129.365 129.364 71.446 0 129.364-57.918 129.364-129.364 0-71.447-57.918-129.365-129.364-129.365zM416.627 117.604c0 16.696-13.535 30.23-30.231 30.23-16.695 0-30.23-13.534-30.23-30.23 0-16.696 13.535-30.23 30.23-30.23 16.696 0 30.231 13.534 30.231 30.23z"
                  transform="translate(44 43.838) scale(1.01619)"
                ></path>
              </g>
            </svg>
          </div>
          <div className="m-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              viewBox="0 0 512 512"
              xmlSpace="preserve"
              width="60"
            >
              <path
                fill="#FFFFFF"
                d="M4 440.5c55.6 5 105.7-9 151.3-43.2-47.7-4.2-79.6-28-97.4-72.6 15.6 1.9 30.2 2.4 45.7-1.8-51.4-16-78.8-49.6-82.5-103.8 15.4 7.2 29.9 12.4 47 12.6-30.5-22.9-46.1-52.6-45.5-90 .3-17.2 4.9-33.4 14-48.7C93.1 159.1 164 195.7 251.3 201.8c-.5-3.8-.8-6.8-1.2-9.9-7.2-55.4 28.8-105.8 83.8-116.3 34.5-6.6 65 2.5 90.8 26.3 4 3.6 7.4 4.4 12.4 3.1 20.1-5.1 39.2-12.5 57.7-22.5-7.1 23.4-21.7 41-41.5 55.8 4.5-.8 9.1-1.4 13.6-2.3 4.7-1 9.4-2.1 14.1-3.4 4.5-1.2 8.9-2.6 13.3-4.1 4.5-1.5 9-3.2 14.3-4.1-2.6 3.6-5.1 7.4-7.9 10.9-11.6 14.7-25 27.6-39.7 39.1-1.5 1.2-2.8 3.8-2.7 5.6.8 35.5-4.2 70.1-15.7 103.7-22.6 66.2-62 119.8-121.1 158.1-29.2 18.9-61.1 31.3-95.2 38.5-33.8 7.1-67.8 8.4-101.9 4.4-34.2-4-66.7-14.1-97.3-29.9-8.1-4.1-15.9-8.7-23.8-13.1.3-.4.5-.8.7-1.2z"
              ></path>
            </svg>
          </div>
          <div className="m-2">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="56.693"
              height="56.693"
              version="1.1"
              viewBox="0 0 56.693 56.693"
              xmlSpace="preserve"
            >
              <path
                fill="#FFFFFF"
                d="M40.43 21.739h-7.645v-5.014c0-1.883 1.248-2.322 2.127-2.322h5.395V6.125l-7.43-.029c-8.248 0-10.125 6.174-10.125 10.125v5.518h-4.77v8.53h4.77v24.137h10.033V30.269h6.77l.875-8.53z"
              ></path>
            </svg>
          </div>
          <div className="m-2">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="65"
              height="65"
              viewBox="0 0 60 60"
            >
              <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
                <g>
                  <path
                    fill="#FFF"
                    d="M41.717 28.846H18.283c-3.725 0-6.745 2.75-6.745 6.451v6.46c0 3.702 3.02 6.705 6.745 6.705h23.434c3.724 0 6.745-3.003 6.745-6.705v-6.409c0-3.702-3.02-6.502-6.745-6.502zM22.878 34.1h-2.26v10.442h-2.183V34.1h-2.26v-1.777h6.703V34.1zm5.788 10.888H26.73V44c-.36.366-.73.644-1.119.833a2.472 2.472 0 01-1.126.288c-.45 0-.783-.133-1.013-.403-.225-.27-.34-.669-.34-1.208v-7.537h1.937v6.916c0 .213.042.367.12.461.084.099.217.143.399.143.14 0 .322-.062.54-.188.22-.128.418-.289.6-.485v-6.847h1.938v9.015h.001zm8.119-2.109c0 .637-.152 1.126-.456 1.468-.302.34-.743.757-1.316.757-.382 0-1.263-.064-1.558-.196a2.457 2.457 0 01-.829-.61v.69h-1.96V32.52h1.96v4.183c.262-.273.54-.483.83-.625.296-.145 1.137-.215 1.438-.215.614 0 1.082-.058 1.405.327.325.385.485.948.485 1.685v5.003zm7.047-2.33h-3.706v1.698c0 .474.061.804.188.988.13.184.349.274.657.274.322 0 .547-.078.675-.234.126-.157.193-.497.193-1.028v-.41h1.994v.462c0 .924-.241 1.62-.731 2.09-.483.464-1.209.696-2.175.696-.868 0-1.553-.246-2.05-.742-.497-.492-.75-1.175-.75-2.044v-4.05c0-.779.276-1.42.825-1.911.549-.492 1.252-.737 2.121-.737.888 0 1.57.228 2.046.683.476.457.714 1.112.714 1.966v2.299zm-2.842-3.371c-.31 0-.529.08-.664.25-.136.157-.2.429-.2.807v.911h1.713v-.911c0-.378-.07-.65-.205-.808-.131-.168-.35-.25-.644-.25zm-7.553.118c-.138 0-.276.027-.411.087a1.42 1.42 0 00-.4.276v5.616c.156.145.31.256.46.32.15.063.303.098.467.098.239 0 .956-.064 1.068-.193.11-.128.167-.332.167-.62v-4.657c0-.306-.066-.536-.203-.694-.141-.155-.887-.233-1.148-.233zm2.434-10.69c.394 0 .8-.113 1.22-.332.421-.221.825-.546 1.21-.97v1.15h2.104v-10.39H38.3v7.888a2.86 2.86 0 01-.646.559c-.238.146-.434.218-.588.218-.198 0-.342-.055-.427-.167-.088-.11-.137-.287-.137-.531v-7.967h-2.1v8.685c0 .619.125 1.082.369 1.389.247.31.61.469 1.1.469zm-6.19.112c.956 0 1.706-.254 2.253-.76.543-.508.815-1.201.815-2.09v-5.37c0-.79-.279-1.442-.83-1.944-.56-.5-1.272-.753-2.142-.753-.956 0-1.718.239-2.283.715-.566.477-.848 1.116-.848 1.924v5.386c0 .884.276 1.583.827 2.107.551.522 1.288.785 2.208.785zm-.872-8.358c0-.226.08-.408.24-.55.162-.14.37-.209.625-.209.28 0 .504.069.676.208.17.143.256.325.256.551v5.662c0 .277-.084.497-.253.657-.168.16-.394.238-.68.238-.277 0-.491-.076-.64-.235-.15-.156-.224-.375-.224-.66V18.36zm-7.458 8.095h2.368v-6.673l2.755-8.244h-2.406l-1.465 5.632h-.15l-1.537-5.632h-2.385l2.82 8.507v6.41z"
                  ></path>
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className="font-serif">
        <h1 className="mb-4 text-green-600 text-4xl font-bold">About Us</h1>
        <p className="text-white">
          Farm-Mart has been developed by five individuals with the sole purpose
          of improving the profit margins for farmers and offering quality
          agricultural produce and products to customers by offering a platform
          where farmers can sell their goods at the best price.
        </p>
        <div className="flex mt-4 ">
          <div className="mr-24">
            <h1 className="text-green-600 text-4xl font-bold">GET IN TOUCH</h1>
            <p className="text-white">Nairobi, Kenya</p>
            <p className="text-white">Email: farmart@gmail.com</p>
            <p className="text-white">Contact: +254798765431</p>
          </div>
          <div>
            <h1 className="text-green-600  text-4xl font-bold">
              ABOUT FARM MART
            </h1>
            <p className="text-white">Pressroom</p>
            <p className="text-white">Careers</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;