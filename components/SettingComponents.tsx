import React from 'react';
import ChavronRight from './icon/ChavronRight';

const SettingComponents = (props: { text: string }) => {
  return (
    <div className="w-full bg-white py-[19px] rounded-xl flex items-center justify-between px-[10px] ">
      <span>{props.text}</span>
      <ChavronRight props={' w-5 h-5 text-black'} />
    </div>
  );
};

export default SettingComponents;
