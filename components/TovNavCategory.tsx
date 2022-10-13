import React from 'react';

const TovNavCategory = (props: { title: string }) => {
  return (
    <div className=" shadow-md bg-white">
      <div className="font-bold text-[16px] md:text-[26px] text-center p-[15px] md:p-[40px]">
        {props.title}
      </div>
    </div>
  );
};

export default TovNavCategory;
