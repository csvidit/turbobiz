import { ShootingStar } from "@phosphor-icons/react";
import PrimarySelect from "./PrimarySelect";
import Title from "../Title";
import { auth } from "@/firebase.config";
import { useAuthState } from "react-firebase-hooks/auth";
import Subtitle from "../Subtitle";
import { Dispatch, SetStateAction, useState } from "react";
import PrimaryButton from "../PrimaryButton";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import axios from "axios";
import BusinessName from "./BusinessName";
import SecondaryLink from "../SecondaryLink";
import { User } from "firebase/auth";

type ResponseData = {
  businessName: string;
  businessDescription: string;
  businessDomains: string[];
};

const Create = (props: {
  currentUser: User | undefined;
  setCurrentUser: Dispatch<SetStateAction<User | undefined>>;
}) => {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [categoryName, setCategoryName] = useState("Select...");
  const [responseData, setResponseData] = useState<ResponseData>();

  const createHandler = async () => {
    await axios
      .post("/api/create", {
        params: {
          category: categoryName,
        },
      })
      .then((response) => setResponseData(response.data))
      .catch((error) => console.log(error));
  };

  return (
    <MotionConfig
      transition={{
        type: "spring",
        duration: 0.35,
      }}
    >
      <div className="w-full h-full min-h-screen justify-start mt-40 space-y-20">
        <div className="flex flex-col space-y-4">
          <div className="flex flex-row space-x-2 relative items-center text-amber-400">
            <ShootingStar weight="duotone" size={32} />
            <Title>turbobiz</Title>
          </div>
          <Subtitle>Welcome, {props.currentUser?.displayName}</Subtitle>
        </div>{" "}
        <div className=" flex flex-col space-y-20 lg:flex-row lg:space-y-0 lg:space-x-16">
          <div className="flex flex-col space-y-20">
            {" "}
            <PrimarySelect
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              categoryName={categoryName}
              setCategoryName={setCategoryName}
            />
            <MotionConfig
              transition={{
                type: "spring",
                duration: 0.35,
              }}
            >
              {selectedCategory == 0 ? (
                <></>
              ) : (
                <AnimatePresence mode="popLayout">
                  <motion.div
                    layout
                    animate={{
                      opacity: 1,
                    }}
                    exit={{
                      opacity: 0,
                    }}
                  >
                    <PrimaryButton
                      onClick={() => createHandler()}
                      variant="fill"
                      external={false}
                    >
                      Create Business
                    </PrimaryButton>
                  </motion.div>
                </AnimatePresence>
              )}
            </MotionConfig>
          </div>

          {responseData == null ? (
            <></>
          ) : (
            <div className="flex flex-col space-y-4">
              <div className="text-amber-400 text-xl lg:text-2xl font-light">
                your business should be called
              </div>
              <BusinessName>{responseData!.businessName}</BusinessName>
              <div>{responseData!.businessDescription}</div>
              {/* <div>
                {responseData!.businessDomains.map((x, index) => (
                  <div key={index}>
                    <SecondaryLink external={true} href="/">
                      {x}
                    </SecondaryLink>
                  </div>
                ))}
              </div> */}
            </div>
          )}
        </div>
      </div>
    </MotionConfig>
  );
};

export default Create;
