import Image from "next/image";

export default function AppBar() {
    return (
        <div className="border-b bg-white border-gray-100 py-4 flex items-center justify-center w-full sticky top-0">
            <div className="w-full max-w-5xl flex justify-between">
                <div className="flex">
                    <Image
                        src="/testvalley-logo.svg"
                        alt="Testvalley Logo"
                        className="mr-4"
                        width={128}
                        height={25}
                        priority
                    />
                    <div className="flex items-center cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 16 16" className="text-[#00D094] mr-1">
                            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.75 12.25h10.5m-10.5-4h10.5m-10.5-4h10.5" />
                        </svg>
                        <p>Category</p>
                    </div>
                </div>

                <div className="flex items-center border border-gray-200 rounded px-3 py-2.5 max-w-96 w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5 text-gray-800">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input type="text" placeholder="If you're wondering whether to buy it or not, search for it!" className="ml-3 focus:outline-none w-full text-sm" />
                </div>

                <div className="flex items-center divide-x space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none" className="cursor-pointer">
                        <link type="text/css" rel="stylesheet" id="dark-mode-custom-link" />
                        <link type="text/css" rel="stylesheet" id="dark-mode-general-link" />
                        <style lang="en" type="text/css" id="dark-mode-custom-style" />
                        <style lang="en" type="text/css" id="dark-mode-native-style" />
                        <style lang="en" type="text/css" id="dark-mode-native-sheet" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.19155 4.66665C5.19155 3.50685 6.13175 2.56665 7.29155 2.56665H20.7082C21.868 2.56665 22.8082 3.50685 22.8082 4.66665V14.9196H24.303C26.3555 14.9196 27.1891 17.5611 25.5084 18.7392L15.2053 25.9615C14.4817 26.4687 13.5181 26.4687 12.7945 25.9615L2.49134 18.7392C0.810655 17.5611 1.64424 14.9196 3.69674 14.9196H5.19155V4.66665ZM7.29155 4.43332C7.16268 4.43332 7.05822 4.53778 7.05822 4.66665V16.7863H3.69674C3.62086 16.7863 3.58019 16.8077 3.55437 16.8279C3.52268 16.8527 3.4917 16.894 3.47422 16.9494C3.45674 17.0048 3.4584 17.0564 3.47014 17.0948C3.4797 17.1262 3.50068 17.1671 3.56281 17.2107L13.866 24.433C13.9463 24.4893 14.0534 24.4893 14.1338 24.433L24.437 17.2107C24.4991 17.1671 24.5201 17.1262 24.5296 17.0948C24.5414 17.0564 24.543 17.0048 24.5255 16.9494C24.5081 16.894 24.4771 16.8527 24.4454 16.8279C24.4196 16.8077 24.3789 16.7863 24.303 16.7863H20.9416V4.66665C20.9416 4.53778 20.8371 4.43332 20.7082 4.43332H7.29155ZM17.3147 7.87499C17.1249 7.87499 16.947 7.96729 16.8378 8.12243L9.93577 17.9224C9.66359 18.3089 9.94 18.8417 10.4127 18.8417H10.9305C11.1202 18.8417 11.2981 18.7494 11.4074 18.5942L18.3094 8.79421C18.5816 8.40775 18.3052 7.87499 17.8325 7.87499H17.3147ZM9.14734 10.052C9.14734 11.3308 10.1804 12.3958 11.5063 12.3958C12.7996 12.3958 13.8653 11.3484 13.8653 10.052C13.8653 8.74043 12.7844 7.69299 11.5063 7.69299C10.2291 7.69299 9.14734 8.72447 9.14734 10.052ZM12.2717 10.052C12.2717 10.4729 11.9387 10.8173 11.5063 10.8173C11.091 10.8173 10.7562 10.4747 10.7562 10.052C10.7562 9.61223 11.0928 9.27149 11.5063 9.27149C11.9369 9.27149 12.2717 9.61412 12.2717 10.052ZM14.1372 16.6798C14.1372 17.9587 15.1702 19.0237 16.4962 19.0237C17.7894 19.0237 18.8552 17.9762 18.8552 16.6798C18.8552 15.3683 17.7742 14.3208 16.4962 14.3208C15.2189 14.3208 14.1372 15.3523 14.1372 16.6798ZM17.2463 16.6798C17.2463 17.1026 16.9115 17.4452 16.4962 17.4452C16.0638 17.4452 15.7308 17.1007 15.7308 16.6798C15.7308 16.2553 16.0674 15.8993 16.4962 15.8993C16.9079 15.8993 17.2463 16.2534 17.2463 16.6798Z" fill="#424242" />
                    </svg>
                    <p className="pl-2 cursor-pointer">Login / Sign up</p>
                </div>
            </div>
        </div>
    );
}
