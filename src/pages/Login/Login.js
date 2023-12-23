import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const [eye, setEye] = useState(false);

    const eyeClicked = () => {
        setEye(state => !state);
    };

    const registerClicked = () => {
        navigate("/register");
    };

    return (
        <section className="w-screen flex items-center justify-center">
            <div className="my-8 flex items-center justify-between gap-[7.5rem] flex-col md:flex-col lg:flex-row">
                <div className="flex items-center justify-center flex-col">
                    <div className="w-full pb-10">
                        <img className='w-40 h-11' src="/logo@3x.png" alt="" />
                    </div>
                    <div className="flex items-center justify-center text-center flex-col px-[3.1875rem] gap-[1.69rem]">
                        {/* head  */}
                        <div className="head">
                            <h1 className='text-[#090314] text-center text-[25px] not-italic font-bold leading-[normal] font-mona-sans'>Welcome to <span className='text-[#8B5CF6]'>AskSophia</span></h1>
                            <p className='text-[#64748B] text-[14px] not-italic font-normal leading-[normal] font-mona-sans'>Your Digital BFF(Best-Friend Forever) Awaits</p>
                        </div>

                        {/* buttons */}
                        <div className="flex items-center justify-center text-center w-full flex-col gap-[0.94rem]">
                            <div className="but1">
                                <button className='border border-[#E2E8F0] px-[4.75rem] py-[1.0625rem] rounded-[1.875rem] border-solid bg-white cursor-pointer'>
                                    <div className='flex items-center justify-center flex-row gap-3.5'>
                                        <img className='w-[0.95694rem] h-[0.97775rem]' src="/googlelogo@3x.png" alt="" />
                                        <div className='text-[#000] text-[14px] font-normal leading-[normal] font-plus-jakarta-sans'>Sign in with <span className='font-bold'>Google</span></div>
                                    </div>
                                </button>
                            </div>
                            <div className="but2">
                                <button className='border border-[#E2E8F0] px-[4.75rem] py-[1.0625rem] rounded-[1.875rem] border-solid bg-white cursor-pointer'>
                                    <div className='flex items-center justify-center flex-row gap-3.5'>
                                        <img className='w-[1.375rem] h-[1.375rem]' src="/fblogo@3x.png" alt="" />
                                        <div className='text-[#000] text-[14px] font-normal leading-[normal] font-plus-jakarta-sans'>Sign in with <span className='font-bold'>Facebook</span></div>
                                    </div>
                                </button>
                            </div>
                            <div className='py-[1.12rem] flex items-center justify-center'>
                                <img className='w-[6.4375rem]' src="/line-96@3x.png" alt="" />
                                <span className='text-[12px] font-medium leading-[normal] text-[#64748b] font-plus-jakarta-sans'>or login with email</span>
                                <img className='w-[6.4375rem]' src="/line-95@3x.png" alt="" />
                            </div>
                        </div>

                        {/* form */}
                        <form className='flex items-center justify-center text-center w-full flex-col gap-[1.25rem]'>
                            <div className="w-full text-left">
                                <label htmlFor="email" className='text-black text-[14px] font-bold leading-[normal] font-plus-jakarta-sans'>Email</label>
                                <div className='mt-[0.56rem] border border-[#E2E8F0] rounded-lg border-solid bg-white px-[1.1875rem] py-[1.125rem]'>
                                    <input className='border-none outline-none'
                                        type="email" placeholder="Type here" name="" id="email" />
                                </div>
                            </div>
                            <div className="w-full text-left">
                                <label htmlFor="password" className='text-black text-[14px] font-bold leading-[normal] font-plus-jakarta-sans'>Password</label>
                                {
                                    !eye ?
                                        <div className='mt-[0.56rem] border border-[#E2E8F0] rounded-lg border-solid bg-white flex items-center justify-between px-[1.1875rem] py-[1.125rem]'>
                                            <input className='border-none outline-none'
                                                type="password" placeholder="Enter your password" name="" id="password" />
                                            <img className='w-6 h-6 cursor-pointer' src="/eye-regular.svg" alt="" onClick={eyeClicked} />
                                        </div>
                                        :
                                        <div className='mt-[0.56rem] border border-[#E2E8F0] rounded-lg border-solid bg-white flex items-center justify-between px-[1.1875rem] py-[1.125rem]'>
                                            <input className='border-none outline-none'
                                                type="text" placeholder="Enter your password" name="" id="password" />
                                            <img className='w-6 h-6 cursor-pointer' src="/eye-slash-regular.svg" alt="" onClick={eyeClicked} />
                                        </div>
                                }
                            </div>
                            <div className='w-full text-[12px] font-medium leading-[normal] underline font-plus-jakarta-sans text-right'>
                                <Link to={"/fp1"} className='no-underline text-[#090314]'>Forget Password?</Link>
                            </div>
                            <div className='w-full flex items-baseline justify-center gap-[0.62rem]'>
                                <input type="checkbox" name="" id="" />
                                <p className='w-[19.125rem] text-left text-[#090314] text-[12px] font-normal leading-[1.0625rem] font-plus-jakarta-sans'>Yes, I want personalized insights and workflow recommendations. (Optional)</p>
                            </div>

                            <button className='w-9/12 rounded-[2.9375rem] bg-violet p-2 cursor-pointer'>
                                <div className='flex items-center justify-between flex-row gap-3.5 px-1'>
                                    <div className='text-white text-[14px] font-bold leading-[normal] font-mona-sans'>Let's Get Started</div>
                                    <img className='w-10 h-10' src="/rightlogoimg@3x.png" alt="" />
                                </div>
                            </button>
                        </form>

                        {/* rest */}
                        <div className='flex items-center justify-center flex-col gap-[2.8125rem]'>
                            <div className='font-normal leading-[normal] text-black text-[14px] font-plus-jakarta-sans'>Don’t have an account? <span className='text-violet cursor-pointer font-bold' onClick={registerClicked}>Register</span></div>
                            <div>
                                <p className='w-[23.5625rem] text-[rgba(0,0,0,0.70)] text-[12px] not-italic font-normal leading-[1.1875rem] font-plus-jakarta-sans'>
                                    By signing up, you agree to AskSophia's <span className='text-[rgba(0,0,0,0.70)] font-semibold leading-[1.1875rem] underline'>Terms of Service</span> and <span className='text-[rgba(0,0,0,0.70)] font-semibold leading-[1.1875rem] underline'>Privacy Policy</span>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center sm:hidden md:hidden lg:block">
                    <div>
                        <img className='w-[46.3125rem] h-[61.9375rem]' src="/groupimage@3x.png" alt="" />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Login;
