import { PiShootingStarDuotone, PiSparkleDuotone } from "react-icons/pi";
import PrimarySelect, { categories } from "./PrimarySelect";
import Title from "../Title";
import Subtitle from "../Subtitle";
import { useContext, useState } from "react";
import PrimaryButton from "../PrimaryButton";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import axios from "axios";
import BusinessName from "./BusinessName";
import CountrySelect, { countries } from "./CountrySelect";
import RemoteCheckbox from "./RemoteCheckbox";
import BusinessSizeSlider from "./BusinessSizeSlider";
import CreateLoading from "./CreateLoading";
import { AuthContext } from "@/AuthContext";
import SecondaryLink from "../SecondaryLink";
import { random } from "lodash";
import RandomButton from "./RandomButton";

type ResponseData = {
  businessName: string;
  businessDescription: string;
  businessDomains: string[];
};

const Create = (props: {}) => {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [categoryName, setCategoryName] = useState("Select...");
  const [selectedCountry, setSelectedCountry] = useState("Select...");
  const [isRemote, setRemote] = useState(false);
  const [businessSize, setBusinessSize] = useState(0); // 0 is small, 1 is medium, 2 is large
  const [isLoading, setLoading] = useState(false);
  const [responseData, setResponseData] = useState<ResponseData>();

  const user = useContext(AuthContext);
  const uid = user?.uid;

  const createHandler = async () => {
    setLoading(true);
    await axios
      .post("/api/createv2", {
        params: {
          category: categoryName,
          categoryId: selectedCategory,
          country: selectedCountry,
          isRemote: isRemote,
          businessSize: businessSize,
          uid: uid,
        },
      })
      .then(async (response) => {
        setResponseData(response.data);
        setLoading(false);
      })
      .catch((error) => console.log("CLIENT SIDE ERROR", error));
  };

  const randomHandler = async () => {
    setSelectedCategory(random(1, 13));
    setCategoryName(categories[selectedCategory].name);
    setSelectedCountry(countries[random(1, countries.length - 1)]);
    setRemote(random(0, 1) == 1 ? true : false);
    setBusinessSize(random(0, 2));
  };

  return (
    <MotionConfig
      transition={{
        type: "spring",
        duration: 0.35,
      }}
    >
      <div className="w-full h-full justify-start space-y-20">
        <div className="flex flex-col space-y-4">
          <div className="flex flex-row space-x-2 relative items-center text-amber-400">
            <PiShootingStarDuotone size={32} />
            <div className="flex flex-row space-x-2 items-baseline">
              <Title>turbobiz</Title>
              <div className="px-1 py-0.5 rounded text-xs bg-zinc-950 border border-zinc-800 text-amber-400 text-opacity-60">
                version 2 (beta)
              </div>
            </div>
          </div>
          <Subtitle>Welcome, {user?.displayName}</Subtitle>
          <SecondaryLink external={false} href="/history">
            History
          </SecondaryLink>
        </div>
        <div className=" flex flex-col space-y-20 lg:flex-row lg:space-y-0 lg:space-x-16">
          <div className="flex flex-col space-y-8 lg:w-1/3">
            <RandomButton onClick={() => randomHandler()}/>
            <PrimarySelect
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              categoryName={categoryName}
              setCategoryName={setCategoryName}
            />
            {selectedCategory == 0 ? (
              <></>
            ) : (
              <CountrySelect
                selectedCountry={selectedCountry}
                setSelectedCountry={setSelectedCountry}
              />
            )}
            {selectedCountry != "Select..." && selectedCategory != 0 ? (
              <RemoteCheckbox isRemote={isRemote} setRemote={setRemote} />
            ) : (
              <></>
            )}
            {selectedCountry != "Select..." && selectedCategory != 0 ? (
              <BusinessSizeSlider
                businessSize={businessSize}
                setBusinessSize={setBusinessSize}
              />
            ) : (
              <></>
            )}
            <MotionConfig
              transition={{
                type: "spring",
                duration: 0.35,
              }}
            >
              {selectedCategory == 0 || selectedCountry === "Select..." ? (
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
          {isLoading == true ? (
            <AnimatePresence mode="popLayout">
              <CreateLoading />
            </AnimatePresence>
          ) : responseData == undefined ? (
            <></>
          ) : (
            <AnimatePresence mode="popLayout">
              <motion.div className="flex flex-col space-y-4 lg:w-2/3">
                <motion.div className="flex flex-col space-y-4 w-full h-full rounded-md bg-zinc-950 border border-opacity-30 border-amber-400 p-4">
                  <motion.div className="text-amber-400 text-xl lg:text-2xl font-light">
                    your business should be called
                  </motion.div>
                  <BusinessName>{responseData!.businessName}</BusinessName>
                  <motion.div>{responseData!.businessDescription}</motion.div>
                  <div className="flex flex-col space-y-2">
                    <div className="text-amber-400">possible domain names:</div>
                    <div>
                      {responseData!.businessDomains.map((x, index) => (
                        <div key={index}>
                          <SecondaryLink
                            external={true}
                            href={`https://www.namecheap.com/domains/registration/results/?domain=${x.replace(
                              /['"]/g,
                              ""
                            )}`}
                          >
                            {x.replace(/['"]/g, "")}
                          </SecondaryLink>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </div>
    </MotionConfig>
  );
};

export default Create;
