import React from 'react';

const TovNavCategory = (props: { title: string }) => {
  return (
    <div className="h-[56px] shadow-md bg-white">
      <div className="font-bold text-[16px] text-center p-[20px]">
        {props.title}
      </div>
    </div>
  );
};

export default TovNavCategory;
