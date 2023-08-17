import Image from "next/image";
import Link from "next/link";
import ErrorPageSvg from "../public/images/404.svg";
import { useRouter } from 'next/router'

export default function NotFoundPage() {
    const router = useRouter()

    return (
        <>
            <section className=" dark:bg-gray-900 ">
                <div className="container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12">
                    <div className="wf-ull lg:w-1/2">

                        <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">Page not found</h1>
                        <p className="mt-4 text-gray-500 dark:text-gray-400">Sorry, the page you are looking for doesn't exist.Here are some helpful links:</p>

                        <div className="flex items-center mt-6 gap-3">
                            <button className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-500 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 rtl:rotate-180">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                                </svg>


                                <button type="button" onClick={() => router.back()}>Go back</button>
                            </button>

                            <Link href='/' className="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600">
                                Take me home
                            </Link>
                        </div>
                    </div>

                    <div className="relative w-full mt-12 lg:w-1/2 lg:mt-0">
                        <Image className="w-max max-w-lg lg:mx-auto" width={400} height={400} src={ErrorPageSvg} alt="alt" />
                    </div>
                </div>
            </section>
        </>
    )
}
