/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import ChavronRight from '../../components/icon/ChavronRight';
import HeartIcon from '../../components/icon/HeartIcon';
import OrderIcon from '../../components/icon/OrderIcon';
import ProfileIcon from '../../components/icon/ProfileIcon';
import Layout from '../../components/Layout';
import SettingComponents from '../../components/SettingComponents';
import { Input } from '@material-tailwind/react';

const ProfilePage = () => {
  const [showModal, setShowModal] = useState(false);
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index: number) => {
    setToggleState(index);
  };

  return (
    <>
      <Layout title="My Profile">
        {/* Login And Profile */}
        <div className="pl-[30px] pr-[10px]">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-[50px] h-[50px] text-white bg-blue-800 rounded-full flex justify-center items-center">
                <ProfileIcon props={'w-[45px] w-[45px]'} />
              </div>
              <div className="flex flex-col ml-[20px]">
                <span className="font-bold text-[22px]">Login</span>
                <span className="text-gray-500 text-[14px]">
                  Start Shopping
                </span>
              </div>
            </div>
            <ChavronRight props={'text-white w-5 h-5 text-black'} />
          </div>
          {/* Order Button and Wish List */}
          <div className="grid grid-cols-4 gap-[43px] mt-[30px] pb-[40px]">
            <div className="w-[53px] h-[43px] ">
              <OrderIcon props={'w-[35px] m-auto'} />
              <span>Orders</span>
            </div>
            <div className="w-[53px] h-[43px] m-auto">
              <HeartIcon props={'w-[35px] m-auto'} />
              <span>Wishlist</span>
            </div>
          </div>
        </div>
        <div className="px-4">
          {/* Setting Component */}
          <div className="grid gap-4">
            <SettingComponents text="Nortification Settings" />
            <SettingComponents text="Privacy Policy" />
            <SettingComponents text="Legal Information" />
            <SettingComponents text="Version" />
          </div>
          {/* Login Button */}
          <button
            className="w-full py-[15px] bg-blue-900 text-center  rounded-lg mt-[30px]"
            onClick={() => setShowModal(true)}
          >
            <span className="font-bold text-[14px] text-white">Login</span>
          </button>
          {/* Show Modal */}
          {showModal ? (
            <div className="w-full bg-white rounded-lg h-[350px] absolute m-auto left-0 right-0 z-[150] bottom-0 shadow-lg">
              <div className="grid grid-cols-2 shadow bg-white rounded-t-lg relative ">
                <button
                  className={
                    toggleState === 1 ? 'tabs active-tabs auth-btn' : 'tabs'
                  }
                  onClick={() => toggleTab(1)}
                >
                  Sign Up{' '}
                </button>
                <button
                  className={
                    toggleState === 2 ? 'tabs active-tabs auth-btn' : 'tabs'
                  }
                  onClick={() => toggleTab(2)}
                >
                  Login{' '}
                </button>
              </div>
              {/* Signup */}
              <form
                className={
                  toggleState === 1 ? 'content  active-content' : 'content'
                }
              >
                <div className="px-[20px]">
                  <div className="pt-[20px] bg-white mb-[10px]">
                    <h1 className="font-bold text-[18px]">
                      Register with Phone Number
                    </h1>
                    <span className="text-[12px] text-gray-400">
                      Please enter your phone number to continue
                    </span>
                    <Input
                      className="w-full bg-gray-200 py-[10px] pl-[10px] rounded-lg mb-[20px] "
                      type="number"
                      required
                      label="Phone Number"
                    />
                  </div>

                  <u className="text-sm text-blue-600">Forgot password?</u>
                  <button
                    className="w-full py-[15px] bg-blue-900 text-center font-bold text-[14px] text-white rounded-lg mt-[20px]"
                    onClick={() => toggleTab(3)}
                    type="submit"
                  >
                    Countinue
                  </button>
                </div>
              </form>
              {/* Phone Verify */}
              <form
                className={
                  toggleState === 3 ? 'content  active-content ' : 'content '
                }
              >
                <div className="px-[20px]">
                  <div className="pt-[20px] bg-white mb-[10px]">
                    <h1 className="font-bold text-[18px]">Phone Verifcation</h1>
                    <span className="text-[12px] text-gray-400">
                      Enter code sent to your phone
                    </span>
                    <div className="grid grid-cols-4 py-10">
                      <input
                        className="w-[52px]  py-[10px] pl-[10px]  mb-[20px]  border-gray-500 border-b-2 mx-auto"
                        type="number"
                        required
                      />
                      <input
                        className="w-[52px]  py-[10px] pl-[10px]  mb-[20px]  border-gray-500 border-b-2 mx-auto"
                        type="number"
                        required
                      />
                      <input
                        className="w-[52px]  py-[10px] pl-[10px]  mb-[20px]  border-gray-500 border-b-2 mx-auto"
                        type="number"
                        required
                      />
                      <input
                        className="w-[52px]  py-[10px] pl-[10px]  mb-[20px]  border-gray-500 border-b-2 mx-auto"
                        type="number"
                        required
                      />
                    </div>
                  </div>

                  <u className="text-sm text-blue-600">Forgot password?</u>
                  <button
                    className="w-full py-[15px] bg-blue-900 text-center font-bold text-[14px] text-white rounded-lg mt-[20px]"
                    onClick={() => toggleTab(3)}
                    type="submit"
                  >
                    Countinue
                  </button>
                </div>
              </form>
              {/* login */}
              <form
                className={
                  toggleState === 2 ? 'content  active-content' : 'content'
                }
              >
                <div className="px-[20px]">
                  <div className="pt-[20px] bg-white mb-[10px]">
                    <Input
                      className="w-full bg-gray-200 py-[10px] pl-[10px] rounded-lg mb-[20px]"
                      type="number"
                      required
                      label="Phone Number"
                    />
                  </div>
                  <div className=" bg-white mb-[10px]">
                    <Input
                      className="w-full bg-gray-200 py-[10px] pl-[10px] rounded-lg mb-[20px]"
                      type="password"
                      required
                      label="Password"
                    />
                  </div>
                  <u className="text-sm text-blue-600">Forgot password?</u>
                  <button
                    className="w-full py-[15px] bg-blue-900 text-center font-bold text-[14px] text-white rounded-lg mt-[20px]"
                    onClick={() => setShowModal(!true)}
                    type="submit"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          ) : null}

          {/* Profile Copyright */}
          <div className="mt-[30px] w-[183px] mx-auto">
            <img
              src="https://www.dipmarts.com/wp-content/themes/dipmarts/assets/images/DiPMart-Horizontal-Logo.png"
              alt="DipMart Logo"
            />
            <p className="text-center text-[12px] mt-[15px]">
              Copyright © 2022 DiPMart. All <br /> rights reserved.
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ProfilePage;
