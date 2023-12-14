import React from 'react';
import Free from '../data/Free';
import Prem from '../data/Prem';

function App() {
    return (
        <section>
            <div className="w-[1440px] h-[1024px] relative bg-white font-sans">
                <div className="w-[188.84px] h-[52px] left-[165px] top-[80px] absolute">
                    <img className="cursor-pointer" src="images/logo.png" alt="" srcset="" />
                </div>
                <div className="w-[50px] h-[50px] left-[70px] top-[81px] absolute">
                    <img className="cursor-pointer" src="images/Back.png" alt="" />
                </div>
                <div className="w-[900px] h-[716px] left-[270px] top-[193px] absolute">
                    <div className="w-[900px] h-[125px] left-0 top-0 absolute">
                        <div className="left-0 top-0 absolute text-black text-[45px] font-bold font-sans">Plans & Pricing</div>
                        <div className="w-[506px] left-0 top-[77px] absolute opacity-70 text-black text-base font-medium leading-normal">Whether your time-saving automation needs are large or small, we’re here to help you scale.</div>
                        <div className="w-[220px] h-11 left-[680px] top-[79px] absolute">
                            <div className="w-[220px] h-11 left-0 top-0 absolute bg-white bg-opacity-5 rounded-[10px] border border-purple-600" />
                            <div className="w-[113px] h-11 px-7 py-3.5 left-0 top-0 absolute bg-purple-600 rounded-[10px] shadow justify-start items-start gap-2.5 inline-flex cursor-pointer">
                                <div className="text-center text-white text-xs font-medium font-sans tracking-wide">MONTHLY</div>
                            </div>
                            <div className="w-[98px] h-[41px] px-6 py-[13px] left-[110px] top-0 absolute justify-center items-center gap-2.5 inline-flex cursor-pointer">
                                <div className="text-center text-black text-xs font-medium tracking-wide">YEARLY</div>
                            </div>
                        </div>
                    </div>

                    <div className="w-[900px] h-[550px] left-0 top-[185px] absolute">
                        <div className="w-[420px] h-[550px] p-2 left-0 top-0 absolute bg-white rounded-lg shadow border border-slate-200 flex-col justify-start items-start gap-2.5 inline-flex">
                            <div className="self-stretch h-[252px] px-6 py-8 bg-gray-100 rounded-lg shadow border border-slate-200 flex-col justify-start items-start flex">
                                <div className="self-stretch text-black text-lg font-semibold leading-normal">Free</div>
                                <div className="w-4 h-4 opacity-0 justify-center items-center inline-flex">
                                    <div className="w-4 h-4 bg-gray-100 border border-slate-500" />
                                </div>
                                <div className="self-stretch justify-start items-center gap-1.5 inline-flex">
                                    <div className="text-black text-4xl font-semibold leading-10">$0</div>
                                    <div className="opacity-70 text-black text-base font-semibold leading-snug">/monthly</div>
                                </div>
                                <div className="w-6 h-6 relative opacity-0">
                                    <div className="w-6 h-6 left-0 top-0 absolute bg-gray-100 border border-slate-500" />

                                </div>
                                <div className="self-stretch opacity-70 text-black text-base font-normal leading-normal my-3">Dictum aliquet arcu egestas massa sed tellus sed arcu velit tincidunt orci.</div>
                                <div className="w-6 h-6 relative opacity-0">
                                    <div className="w-6 h-6 left-0 top-0 absolute bg-gray-100 border border-slate-500" />

                                </div>
                                <div className="self-stretch h-[50px] px-[18px] py-3.5 bg-gradient-to-b from-fuchsia-600 to-purple-700 rounded-md shadow justify-center items-center gap-[3px] inline-flex cursor-pointer">
                                    <div className="text-center text-white text-base font-bold leading-tight">Get started</div>
                                    <div className="w-3 h-3 px-[1.80px] py-[1.88px] justify-center items-center flex">
                                        <div className="w-[8.40px] h-[8.24px] relative">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="self-stretch h-[253px] px-[26px] py-5 flex-col justify-start items-start flex">
                                <div className="w-[306px] text-black text-lg font-semibold leading-snug">What’s included?</div>
                                <div className="w-6 h-6 relative opacity-0">
                                    <div className="w-6 h-6 left-0 top-0 absolute bg-gray-100 border border-slate-500" />
                                </div>
                                <div className="h-44 flex-col justify-start items-start gap-6 flex">
                                    {
                                        Free.map(data => {
                                            return (
                                                <div className="self-stretch justify-start items-center gap-[5px] inline-flex">
                                                    <div className="w-4 h-4 p-[0.79px] justify-center items-center flex">
                                                        <div className="w-[14.42px] h-[14.42px] relative">
                                                            <img src="images/chk.png" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="grow shrink basis-0 text-black text-opacity-70 text-base font-normal leading-snug">{data.list}</div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>

                        <div className="w-[420px] h-[550px] p-2 left-[480px] top-0 absolute bg-white rounded-lg shadow border border-slate-200 flex-col justify-start items-start gap-2.5 inline-flex">
                            <div className="self-stretch h-[247px] px-6 py-8 rounded-lg shadow flex-col justify-between items-start flex">
                                <div className="self-stretch text-black text-lg font-semibold leading-normal">Premium</div>
                                <div className="w-4 h-4 opacity-0 justify-center items-center inline-flex">
                                    <div className="w-4 h-4 bg-gray-100 border border-slate-500" />
                                </div>
                                <div className="self-stretch justify-start items-center gap-1.5 inline-flex">
                                    <div className="text-black text-4xl font-semibold leading-10">$49</div>
                                    <div className="opacity-70 text-black text-base font-semibold leading-snug">/monthly</div>
                                </div>
                                <div className="w-6 h-6 relative opacity-0">
                                    <div className="w-6 h-6 left-0 top-0 absolute bg-gray-100 border border-slate-500" />

                                </div>
                                <div className="self-stretch opacity-70 text-black text-base font-normal leading-normal my-3">Dictum aliquet arcu egestas massa sed tellus sed arcu velit tincidunt orci.</div>
                                <div className="w-6 h-6 relative opacity-0">
                                    <div className="w-6 h-6 left-0 top-0 absolute bg-gray-100 border border-slate-500" />

                                </div>
                                <div className="self-stretch h-[50px] px-[18px] py-3.5 bg-gray-100 rounded-md border border-slate-200 justify-center items-center gap-[3px] inline-flex cursor-pointer">
                                    <div className="text-center text-black text-sm font-bold leading-tight">Purchase</div>
                                    <div className="w-3 h-3 px-[1.80px] py-[1.88px] justify-center items-center flex">
                                        <div className="w-[8.40px] h-[8.24px] relative">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="self-stretch h-[253px] px-[26px] py-5 flex-col justify-start items-start flex">
                                <div className="w-[306px] text-black text-lg font-semibold  leading-snug">What’s included?</div>
                                <div className="w-6 h-6 relative opacity-0">
                                    <div className="w-6 h-6 left-0 top-0 absolute bg-gray-100 border border-slate-500" />

                                </div>
                                <div className="h-44 flex-col justify-start items-start gap-6 flex">
                                    {
                                        Prem.map(data => {
                                            return (
                                                <div className="self-stretch justify-start items-center gap-[5px] inline-flex">
                                                    <div className="w-4 h-4 p-[0.79px] justify-center items-center flex">
                                                        <div className="w-[14.42px] h-[14.42px] relative">
                                                            <img src="images/chk.png" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="grow shrink basis-0 text-black text-opacity-70 text-base font-normal leading-snug">{data.list}</div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default App;