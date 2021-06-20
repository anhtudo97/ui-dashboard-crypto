import React from 'react';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ClearAllIcon from '@material-ui/icons/ClearAll';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import SyncAltIcon from '@material-ui/icons/SyncAlt';
import LayersIcon from '@material-ui/icons/Layers';
import LockIcon from '@material-ui/icons/Lock';
import EcoIcon from '@material-ui/icons/Eco';

const Sidebar = () => {
  return (
    <div className="w-6/12 h-screen shadow-2xl md:w-3/12">
      <div className="flex justify-around py-3 mt-1 border-b">
        <p className="text-xl font-semibold">Tuanh</p>
        <p>|</p>
        <p className="text-xl text-gray-400">Wallet</p>
      </div>
      <div className="p-4 space-y-14">
        <div className="space-y-4">
          <h1 className="text-gray-400">Menu</h1>
          <div>
            <div className="flex p-3 space-x-4 text-gray-700 cursor-pointer 0 hover:bg-gray-50 hover:text-blue-600">
              <DonutLargeIcon className="text-gray-300 " />
              <p>Dashbord</p>
            </div>
          </div>
          <div>
            <div className="flex p-3 space-x-4 text-gray-700 cursor-pointer 0 hover:bg-gray-50 hover:text-blue-600">
              <ClearAllIcon className="text-gray-300" />
              <p className="text-gray-600 ">Transaction</p>
            </div>
          </div>
          <div>
            <div className="flex p-3 space-x-4 text-gray-700 cursor-pointer 0 hover:bg-gray-50 hover:text-blue-600">
              <ArrowUpwardIcon className="text-gray-300" />
              <p className="text-gray-600 ">Send</p>
            </div>
          </div>
          <div>
            <div className="flex p-3 space-x-4 text-gray-700 cursor-pointer 0 hover:bg-gray-50 hover:text-blue-600">
              <ArrowDownwardIcon className="text-gray-300" />
              <p className="text-gray-600 ">Receive</p>
            </div>
          </div>
          <div>
            <div className="flex p-3 space-x-4 text-gray-700 cursor-pointer 0 hover:bg-gray-50 hover:text-blue-600">
              <SyncAltIcon className="text-gray-300" />
              <p className="text-gray-600">Buy</p>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <h1 className="text-gray-400">Delegation</h1>
          <div className="">
            <div className="flex p-3 space-x-4 text-gray-700 cursor-pointer 0 hover:bg-gray-50 hover:text-blue-600 ">
              <LockIcon className="text-gray-300" />
              <p className="text-gray-600 ">Delegate</p>
            </div>
          </div>
          <div className="">
            <div className="flex p-3 space-x-4 text-gray-700 cursor-pointer 0 hover:bg-gray-50 hover:text-blue-600 ">
              <EcoIcon className="text-gray-300" />
              <p className="text-gray-600 ">Claim Reward</p>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <h1 className="text-gray-400">Taking </h1>
          <div className="">
            <div className="flex p-3 space-x-4 text-gray-700 cursor-pointer 0 hover:bg-gray-50 hover:text-blue-600 ">
              <LayersIcon className="text-gray-300" />
              <p className="text-gray-600 ">Validate</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
