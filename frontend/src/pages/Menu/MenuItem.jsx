
import React from 'react';

const MenuItem = ({ item }) => {
  return (
    <div className="flex flex-col items-center justify-start w-full gap-[34px] p-[30px] sm:p-5 bg-white-A700 rounded-[40px]">
      <img src={item.imageSrc} alt={item.altText} className="w-[270px] md:h-auto mt-1.5 object-cover" />
      <div className="flex flex-col items-center justify-start w-full mb-1.5">
        <div className="flex flex-col items-center justify-start w-full gap-[11px]">
          <h2 className="text-center text-lg">{item.name}</h2>
          <p className="!text-gray-800_02 text-center text-xs">{item.description}</p>
        </div>
        {/* Render RatingBar component here */}
        <div className="flex justify-between mt-[13px] rounded-[1px]">
         <RatingBar>{item.rating}</RatingBar>
        </div>
        <div className="flex flex-row justify-between items-center w-[95%] md:w-full mt-[30px]">
          <h3>${item.price}</h3>
          <button className="sm:px-5 font-semibold min-w-[158px] rounded-lg">Order now</button>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
