import React from "react";
import { Helmet } from "react-helmet";
import { Button, TextArea, Input, GoogleMap, Text, Heading, Img } from "../../components";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

export default function ContactPage() {
  return (
    <>
      <Helmet>
        <title>foodio - Online food And Restaurant Booking App</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full pt-[51px] gap-[120px] md:pt-5 bg-gray-50">
        <div className="flex flex-col items-center justify-start w-full gap-[102px] md:px-5 max-w-[1112px]">
        <header className="flex flex-row md:flex-col justify-between items-center w-[83%] md:gap-10">
              <Link to='/'>
                <Img src="images/img_logo.svg" alt="logo_one" className="h-[51px]" />
              </Link>
              <div className="flex flex-row sm:flex-col justify-between items-start w-[52%] md:w-full sm:gap-10">
                <div className="flex flex-col items-center justify-start w-[9%] sm:w-full gap-[3px]">
                  <Link to='/'>
                    <Text size="s" as="p" className="!text-red-400 !font-opensans">
                      Home
                    </Text>
                  </Link>
                  <div className="h-px w-full bg-red-400" />
                </div>
                <Link to="/menu">
                  <Text size="s" as="p" className="mt-px sm:mt-0 !text-gray-900_cc !font-opensans">
                    Menu
                  </Text>
                </Link>
                <Link to="/menu">
                  <Text size="s" as="p" className="!text-gray-900_cc !font-opensans cursor-pointer">
                    About us
                  </Text>
                </Link>
                <Link to='/orderonline'>
                  <Text size="s" as="p" className="!text-gray-900_cc !font-opensans">
                    Order online
                  </Text>
                </Link>
                <Link to='/reservation'>
                  <Text size="s" as="p" className="mt-px sm:mt-0 !text-gray-900_cc !font-opensans">
                    Reservation
                  </Text>
                </Link>
                <div className="flex flex-row justify-center">
                  <a href="#">
                    <Link to='/contact'>
                      <Text size="s" as="p" className="!text-gray-900_cc !font-opensans">
                        Contact us
                      </Text>
                    </Link>
                  </a>
                </div>
              </div>
              <div className="flex flex-row justify-start gap-[25px]">
                <Button color="white_A700" size="lg" shape="circle" className="w-[50px]">
                  <Img src="images/img_group_103.svg" />
                </Button>
                <Button size="md" shape="round" className="sm:px-5 font-semibold min-w-[112px]">
                  Log in
                </Button>
              </div>
            </header>
          <div className="flex flex-col items-center justify-start w-full gap-[50px]">
            <div className="flex flex-col items-center justify-start w-[88%] md:w-full gap-4">
              <Heading size="3xl" as="h1" className="!font-opensans text-center">
                Contact us
              </Heading>
              <Text size="lg" as="p" className="text-center !font-normal">
                We love hearing from our customers. Feel free to share your experience or ask any questions you may
                have.
              </Text>
            </div>
            <div className="flex flex-row md:flex-col justify-start w-full gap-10 md:gap-5">
              <GoogleMap showMarker={false} className="h-[550px] w-[48%]" />
              <div className="flex flex-col items-center justify-start w-[49%] md:w-full gap-9">
                <div className="flex flex-col items-center justify-start w-full gap-6">
                  <Input
                    shape="round"
                    type="text"
                    name="firstName"
                    placeholder="First name"
                    className="w-full sm:w-full"
                  />
                  <Input
                    shape="round"
                    type="text"
                    name="lastName"
                    placeholder="Last name"
                    className="w-full sm:w-full"
                  />
                  <Input
                    shape="round"
                    type="email"
                    name="email"
                    placeholder="Email address"
                    className="w-full sm:w-full"
                  />
                  <Input shape="round" name="subject" placeholder="Subject" className="w-full sm:w-full" />
                  <TextArea
                    shape="round"
                    name="message"
                    placeholder="Message"
                    className="w-full sm:p-5 text-gray-500"
                  />
                </div>
                <Button size="6xl" className="w-full sm:px-5 rounded-[12px]">
                  Submit
                </Button>
              </div>
            </div>
          </div>
        </div>
        <Footer className="flex justify-center items-center w-full" />
      </div>
    </>
  );
}
