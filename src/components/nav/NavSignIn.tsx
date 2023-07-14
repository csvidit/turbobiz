import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "@/firebase.config";
import { GoogleLogo } from "@phosphor-icons/react";
import { PuffLoader } from "react-spinners";
import { signOut } from "firebase/auth";

const colors = {
  dark: "#fbbf24",
  light: "#171717",
};

const NavSignIn = (props: { variant: string }) => {
  const [signInWithGoogle, user, loading, fbError] = useSignInWithGoogle(auth);

  if (user == undefined) {
    return (
      <button
        onClick={() => signInWithGoogle()}
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
  } else {
    return (
      <button
        className={`group h-full group px-2 py-1 flex flex-row space-x-1 items-center group justify-between rounded-md bg-zinc-900 text-amber-400 hover:bg-amber-400 hover:text-zinc-900 transition-all duration-200 ease-in-out text-sm overflow-hidden font-light`}
        onClick={() => signOut(auth)}
      >
        {loading == true ? (
          <PuffLoader color="currentColor" size={16} />
        ) : (
          <div className="flex flex-row space-x-1 items-center">
            <div className="border-r px-1 border-amber-400 group-hover:border-zinc-900 transition-all duration-200 ease-in-out">
              {user.user.displayName}
            </div>
            <div>Sign Out</div>{" "}
          </div>
        )}
      </button>
    );
  }
};

export default NavSignIn;
