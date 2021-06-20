import React from 'react';

const RightBar = () => {
  return (
    <div className="w-4/12 bg-white border border-gray-100 rounded-xl">
      <div className="p-3 border-b border-gray-100">
        <p className="font-semibold ">Delegation </p>
      </div>
      <div className="flex flex-col items-center p-3">
        <p className="text-lg font-semibold text-gray-800"> 21 h 47 m 51s</p>
        <p className="text-sm text-gray-600">
          until next rewards batch is distributed
        </p>
      </div>

      <div className="flex items-center justify-center p-4">
        <div
          className="flex items-center justify-center w-48 h-48 rounded-full"
          style={{ borderWidth: '16px' }}
        >
          <div className="flex items-center justify-center border-gray-200 rounded-full h-44 w-44 ">
            <div className="flex flex-col items-center justify-center w-32 h-32 rounded-full shadow-2xl ">
              <p className="font-semibold text-gray-800"> 17.0216 EGLD</p>
              <p className="text-sm font-semibold text-blue-700"> Claim Now</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center p-3">
        <p className="text-sm text-center text-gray-600">
          {' '}
          These are reards availbaleto be claimed right now.
        </p>
      </div>
    </div>
  );
};

export default RightBar;
