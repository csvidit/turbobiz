import { AuthContext, AuthDispatchContext } from "@/AuthContext";
import { auth } from "@/firebase.config";
import { User, signOut } from "firebase/auth";
import router from "next/router";
import { Dispatch, SetStateAction, useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { PuffLoader } from "react-spinners";

const NavSignOut = (props: {
  // name: string | null;
  // setCurrentUser: Dispatch<SetStateAction<User | undefined>>;
}) => {
  const user = useContext(AuthContext);
  const dispatch = useContext(AuthDispatchContext);
  return (
    <button
      className={`group h-full group px-2 py-1 flex flex-row space-x-1 items-center group justify-between rounded-md bg-zinc-900 border border-zinc-700 text-amber-400 hover:bg-amber-400 hover:text-zinc-900 transition-all duration-200 ease-in-out text-sm overflow-hidden font-light`}
      onClick={() => {
        signOut(auth)
          .then(() => {
            auth.updateCurrentUser(null);
            // props.setCurrentUser(undefined);
            dispatch!({ type: "LOGOUT", payload: null});
          })
          .catch((error) => console.log(error));
        router.push("/");
      }}
    >
      <div className="flex flex-row lg:space-x-1 items-center">
        <div className="hidden lg:flex border-r px-1 border-amber-400 group-hover:border-zinc-900 transition-all duration-200 ease-in-out">
          {user?.displayName}
        </div>
        <div>sign out</div>
      </div>
    </button>
  );
};

export default NavSignOut;
