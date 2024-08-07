import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Check } from "lucide-react";
import Image from "next/image";


export default function Home() {
  return (
    <div className="bg-slate-50">
      <section>
        <MaxWidthWrapper
          className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52"
        >
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="absolute w-28 left-0 -top-20 hidden lg:block">
                <img src="/snake-1.png" className="w-full" />


              </div>
              <h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-green-900 text-5xl md:text-6xl lg:text-7xl">
                Your Image on a <span className="bg-green-600 px-2 text-white">
                  Custom
                </span> Phone Case
              </h1>
              <p className="mt-8 text-lg lg:pr-10 max-w-prose text-center">
                Capture your favorite memories with your own, {' '}
                <span className="font-semibold">one-of-one</span> phone case.
                CaseCobra allows you to protect your memories, not just not just your phone case.
              </p>
              <ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start">
                <div className="space-y-2">
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-green-600">
                    </Check>
                    High-quality, durable material
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-green-600">
                    </Check>
                    5 year print guarantee
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-green-600">
                    </Check>
                    Modern IPhone models supported
                  </li>

                </div>
              </ul>
              <div className="mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5">
                <div className="flex -space-x-4">
                  <img src="users/user-1.png" alt="" className="inline-block w-10 h-10 rounded-full ring-2 rign-slate-100" />
                  <img src="users/user-2.png" alt="" className="inline-block w-10 h-10 rounded-full ring-2 rign-slate-100" />
                  <img src="users/user-3.png" alt="" className="inline-block w-10 h-10 rounded-full ring-2 rign-slate-100" />
                  <img src="users/user-4.jpg" alt="" className="inline-block w-10 h-10 rounded-full ring-2 rign-slate-100" />
                  <img src="users/user-5.jpg" alt="" className="inline-block object-cover w-10 h-10 rounded-full ring-2 rign-slate-100" />
                </div>
                
              </div>

            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
