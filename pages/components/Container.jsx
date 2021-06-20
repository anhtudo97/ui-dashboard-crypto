import React from 'react';

import Card from './Card';
import Middle from './Middle';
import RightBar from './RightBar';

const Container = () => {
  return (
    <div className="bg-gradient-to-r from-gray-100 to-gray-50">
      <div className="px-8 py-1">
        <p className="text-lg text-gray-500">Zhao</p>
        <p className="text-2xl font-bold transform-translate-y-2">Tuanh!</p>
      </div>
      <div className="flex p-4 space-x-3">
        <Card title="TOTAL" balance={409.079} icon={0} />
        <Card title="AVAILABLE" balance={300.079} icon={1} />
        <Card title="CLAIMABLE REWARD" balance={100.079} icon={2} />
        <Card title="DELEGATED" balance={339.079} icon={3} />
      </div>
      <div className="flex mt-6 ml-3 mr-4 space-x-6">
        <Middle />
        <RightBar />
      </div>
    </div>
  );
};

export default Container;
