import React from 'react';
import DashboardIcon from '@material-ui/icons/Dashboard';
import CropLandscapeIcon from '@material-ui/icons/CropLandscape';
import AppsIcon from '@material-ui/icons/Apps';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const Header = () => {
  return (
    <div className="flex justify-between p-4 shadow-sm bg-gray-50 ">
      <div className="flex space-x-3 ">
        <p className="text-gray-400">Adress </p>
        <p>0xc14D1bdD7A28b12fa3e88FE2bE9e193Bdfdlk8bb940A6</p>
        <CropLandscapeIcon className="text-gray-300" />
        <DashboardIcon className="text-gray-300" />
      </div>
      <div className="flex mr-3 space-x-4 text-gray-400">
        <AppsIcon />
        <ExitToAppIcon />
        <p className="font-semibold text-gray-600">Close</p>
      </div>
    </div>
  );
};

export default Header;
