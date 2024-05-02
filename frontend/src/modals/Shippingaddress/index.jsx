import React from "react";
import { GoogleMap, Button, Input, Text, Img } from "../../components";
import { default as ModalProvider } from "react-modal";

export default function Shippingaddress({ isOpen, ...props }) {
  return (
    <ModalProvider {...props} appElement={document.getElementById("root")} isOpen={isOpen} className="min-w-[842px]">
      <div className="flex flex-col items-center justify-start w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-col items-center justify-start w-full p-[47px] md:p-5 bg-white-A700 rounded-[16px]">
            <div className="flex flex-col items-center justify-start w-[97%] md:w-full mb-3">
              <div className="flex flex-col items-end justify-start w-full gap-[30px]">
                <div className="flex flex-row justify-between items-start w-[69%] md:w-full">
                  <Text size="2xl" as="p" className="!text-black-900 text-center">
                    Shipping address
                  </Text>
                  <Img src="images/img_group_7736.svg" alt="image" className="h-[20px] w-[20px] mt-2" />
                </div>
                <div className="flex flex-col items-start justify-start w-full">
                  <Text size="md" as="p" className="!text-gray-900">
                    Shipping address
                  </Text>
                  <div className="flex flex-row md:flex-col justify-start mt-2 gap-4 md:gap-5">
                    <Input
                      shape="round"
                      name="address"
                      placeholder="8502 Preston Rd. Inglewood, Maine 98380"
                      className="w-[75%] md:w-full !text-gray-900"
                    />
                    <Button color="indigo_300" size="xl" className="sm:px-5 min-w-[166px] rounded-lg">
                      Search
                    </Button>
                  </div>
                  <GoogleMap showMarker={false} className="h-[561px] w-full mt-[17px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ModalProvider>
  );
}
