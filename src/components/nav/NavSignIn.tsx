import { auth } from "@/firebase.config";
import { GoogleAuthProvider, User, signInWithPopup } from "firebase/auth";
import { Dispatch, SetStateAction } from "react";
import { PiGoogleLogoBold } from "react-icons/pi";

const colors = {
  dark: "#fbbf24",
  light: "#171717",
};

const NavSignIn = (props: {
  variant: string;
  setCurrentUser: Dispatch<SetStateAction<User | undefined>>;
}) => {
  return (
    <button
      onClick={async () => {
        await signInWithPopup(auth, new GoogleAuthProvider())
          .then(async (userCred) => {
            auth.updateCurrentUser(userCred.user);
            props.setCurrentUser(userCred.user);
          })
          .catch((error) => console.log(error));
      }}
      className={`group h-full px-2 py-1 flex flex-row space-x-1 items-center group justify-between rounded-md bg-zinc-900 text-amber-400 hover:bg-amber-400 hover:text-zinc-900 transition-all duration-200 ease-in-out text-sm overflow-hidden font-light`}
    >
      <div className="flex flex-row space-x-1 items-center">
        <PiGoogleLogoBold size={16} />
        <div>Sign In</div>{" "}
      </div>
    </button>
  );
};

export default NavSignIn;
