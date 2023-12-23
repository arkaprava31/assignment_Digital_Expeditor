import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ForgetPassword1 = () => {

    const navigate = useNavigate();

    const buttonClicked = () => {
      navigate("/fp2");
    }
    
    return (
        <section className="w-screen flex items-center justify-center">
            <div className="my-8 flex items-center justify-between gap-[7.5rem] flex-col md:flex-col lg:flex-row">
                <div className="flex items-center justify-center flex-col">
                    <div className="w-full pb-10">
                        <img className='w-40 h-11' src="/logo@3x.png" alt="" />
                    </div>
                    <div className='flex items-center justify-center flex-col py-48 px-[3.1875rem]'>
                        {/* img div */}
                        <div className='w-full text-center'>
                            <img className='w-[10.8125rem] h-[10.8125rem]' src="/security-access-1@3x.png" alt="" />
                        </div>

                        {/* head  */}
                        <div className="w-full text-center mb-[2.1875rem]">
                            <h1 className='text-[#090314] text-[1.25rem] font-bold leading-[normal] font-mona-sans'>
                                Forget Password
                            </h1>
                            <p className='text-[#64748B] text-[14px] font-normal leading-5 font-mona-sans w-[21.6875rem]'>
                                Don't worry! It happens. Please enter the email associated with your account.
                            </p>
                        </div>

                        {/* form */}
                        <form className='flex items-center justify-center text-center w-full flex-col gap-[2.1875rem]'>
                            <div className="w-full text-left">
                                <label htmlFor="email" className='text-black text-[14px] font-bold leading-[normal] font-plus-jakarta-sans'>Email</label>
                                <div className='mt-[0.56rem] border border-[#E2E8F0] rounded-lg border-solid bg-white px-[1.1875rem] py-[1.125rem]'>
                                    <input className='border-none outline-none'
                                        type="email" placeholder="Type here" name="" id="email" />
                                </div>
                            </div>
                            <button className='w-full rounded-[2.9375rem] bg-violet py-[1.40625rem] cursor-pointer'
                            onClick={buttonClicked}>
                                <div className='text-white text-[1rem] font-bold leading-[normal] font-mona-sans'>
                                    Continue
                                </div>
                            </button>
                        </form>
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

const ForgetPassword2 = () => {
    const navigate = useNavigate();

    const buttonClicked = () => {
      navigate("/fp3");
    }

    const [eye, setEye] = useState(false);

    const [eye1, setEye1] = useState(false);

    const eyeClicked = () => {
        setEye(state => !state);
    };

    const eyeClicked1 = () => {
        setEye1(state => !state);
    };

    return (
        <section className="w-screen flex items-center justify-center">
            <div className="my-8 flex items-center justify-between gap-[7.5rem] flex-col md:flex-col lg:flex-row">
                <div className="flex items-center justify-center flex-col">
                    <div className="w-full pb-10">
                        <img className='w-40 h-11' src="/logo@3x.png" alt="" />
                    </div>
                    <div className='flex items-center justify-center flex-col py-56 px-[3.1875rem]'>

                        {/* head  */}
                        <div className="w-full text-center mb-[2.1875rem]">
                            <h1 className='text-[#090314] text-[1.25rem] font-bold leading-[normal] font-mona-sans'>
                                Add New Password
                            </h1>
                            <p className='text-[#64748B] text-[14px] font-normal leading-5 font-mona-sans w-[21.6875rem]'>
                                Type New Password, that contains min 8 letters
                            </p>
                        </div>

                        {/* form */}
                        <form className='flex items-center justify-center text-center w-full flex-col gap-[1.25rem]'>
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
                            <div className="w-full text-left">
                                <label htmlFor="cnfpassword" className='text-black text-[14px] font-bold leading-[normal] font-plus-jakarta-sans'>Confirm Password</label>
                                {
                                    !eye1 ?
                                        <div className='mt-[0.56rem] border border-[#E2E8F0] rounded-lg border-solid bg-white flex items-center justify-between px-[1.1875rem] py-[1.125rem]'>
                                            <input className='border-none outline-none'
                                                type="password" placeholder="Enter your password" name="" id="password" />
                                            <img className='w-6 h-6 cursor-pointer' src="/eye-regular.svg" alt="" onClick={eyeClicked1} />
                                        </div>
                                        :
                                        <div className='mt-[0.56rem] border border-[#E2E8F0] rounded-lg border-solid bg-white flex items-center justify-between px-[1.1875rem] py-[1.125rem]'>
                                            <input className='border-none outline-none'
                                                type="text" placeholder="Enter your password" name="" id="password" />
                                            <img className='w-6 h-6 cursor-pointer' src="/eye-slash-regular.svg" alt="" onClick={eyeClicked1} />
                                        </div>
                                }
                            </div>
                            <button className='w-full rounded-[2.9375rem] bg-violet py-[1.40625rem] cursor-pointer mt-[0.9375rem]' 
                            onClick={buttonClicked}>
                                <div className='text-white text-[1rem] font-bold leading-[normal] font-mona-sans'>
                                    Continue
                                </div>
                            </button>
                        </form>
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

const ForgetPassword3 = () => {
    const navigate = useNavigate();

    const buttonClicked = () => {
      navigate("/");
    }

    return (
        <section className="w-screen flex items-center justify-center">
            <div className="my-8 flex items-center justify-between gap-[7.5rem] flex-col md:flex-col lg:flex-row">
                <div className="flex items-center justify-center flex-col">
                    <div className="w-full pb-10">
                        <img className='w-40 h-11' src="/logo@3x.png" alt="" />
                    </div>
                    <div className='flex items-center justify-center flex-col py-56 px-[5.1875rem] gap-8'>
                        {/* img div */}
                        <div className='w-full text-center'>
                            <img className='w-[11.0625rem] h-[11.0625rem]' src="/success-lock-1@3x.png" alt="" />
                        </div>

                        {/* head  */}
                        <div className="w-full text-center">
                            <h1 className='text-[#090314] text-[1.25rem] font-bold leading-[normal] font-mona-sans'>
                                Password Changed
                            </h1>
                            <p className='text-[#64748B] text-[14px] font-normal leading-5 font-mona-sans'>
                                Your password has been changed succesfully
                            </p>
                        </div>

                        {/* form */}
                        <div className='flex items-center justify-center text-center w-full flex-col'>
                            <button className='w-full rounded-[2.9375rem] bg-violet py-[1.40625rem] cursor-pointer'
                            onClick={buttonClicked}>
                                <div className='text-white text-[1rem] font-bold leading-[normal] font-mona-sans'>
                                    Continue
                                </div>
                            </button>
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

export {ForgetPassword1, ForgetPassword2, ForgetPassword3};