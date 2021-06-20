import React, { useMemo } from 'react';
import clsx from 'clsx';
import AllOutIcon from '@material-ui/icons/AllOut';
import DoneIcon from '@material-ui/icons/Done';
import EcoIcon from '@material-ui/icons/Eco';
import LockIcon from '@material-ui/icons/Lock';

const Style = 'text-white text-xs';

const arrayIcon = [
  <AllOutIcon key="allout" fontSize="small" className={Style} />,
  <DoneIcon key="done" fontSize="small" className={Style} />,
  <EcoIcon key="eco" fontSize="small" className={Style} />,
  <LockIcon key="lock" fontSize="small" className={Style} />,
];

const Color = [
  'from-indigo-500 to-blue-500',
  'from-blue-400 to-blue-300',
  'from-green-500 to-green-400',
  'from-yellow-600 to-yellow-500',
];

const Card = (props) => {
  const balance = useMemo(() => props.balance * 9.5, [props.balance]);
  return (
    <div
      className={clsx(
        'transform hover:scale-110 cursor-pointer transition delay-100 w-3/12 p-2 py-4 shadow-xl border rounded-xl bg-gradient-to-r',
        Color[props.icon],
      )}
    >
      <div className="flex justify-between">
        <div></div>
        <div className="flex items-center justify-center w-10 h-10 m-1 bg-gray-300 rounded-xl bg-opacity-30">
          {arrayIcon[props.icon]}
        </div>
      </div>
      <p className="text-xs text-gray-200">{props.title}</p>
      <p className="text-xl font-semibold text-gray-50">{props.balance} EGLD</p>
      <p className="text-sm text-gray-300">${balance}</p>
    </div>
  );
};

export default Card;
