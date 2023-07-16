import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth, firestore, provider } from "@/firebase.config";
import { GoogleLogo } from "@phosphor-icons/react";
import { PuffLoader } from "react-spinners";
import {
  GoogleAuthProvider,
  User,
  getRedirectResult,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction } from "react";
import { signInWithRedirect } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

const colors = {
  dark: "#fbbf24",
  light: "#171717",
};

const NavSignIn = (props: {
  variant: string;
  setCurrentUser: Dispatch<SetStateAction<User | undefined>>;
}) => {
  const [signInWithGoogle, user, loading, fbError] = useSignInWithGoogle(auth);
  return (
    <button
      onClick={async () => {
        await signInWithPopup(
          auth,
          new GoogleAuthProvider()
        ).then(async (userCred) => {
          await setDoc(
            doc(firestore, "users", userCred.user.uid),
            { merge: true }
          );
          auth.updateCurrentUser(userCred.user);
          props.setCurrentUser(userCred.user);
        });
      }}
      className={`group h-full px-2 py-1 flex flex-row space-x-1 items-center group justify-between rounded-md bg-zinc-900 text-amber-400 hover:bg-amber-400 hover:text-zinc-900 transition-all duration-200 ease-in-out text-sm overflow-hidden font-light`}
    >
      {loading == true ? (
        <PuffLoader color="currentColor" size={16} />
      ) : (
        <div className="flex flex-row space-x-1 items-center">
          <GoogleLogo weight="bold" size={16} />
          <div>Sign In</div>{" "}
        </div>
      )}
    </button>
  );
};

export default NavSignIn;
