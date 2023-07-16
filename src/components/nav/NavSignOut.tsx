import { auth } from "@/firebase.config";
import { User, signOut } from "firebase/auth";
import router from "next/router";
import { Dispatch, SetStateAction } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { PuffLoader } from "react-spinners";

const NavSignOut = (props: {
  name: string | null;
  setCurrentUser: Dispatch<SetStateAction<User | undefined>>;
}) => {
  const [user, loading, error] = useAuthState(auth);
  return (
    <button
      className={`group h-full group px-2 py-1 flex flex-row space-x-1 items-center group justify-between rounded-md bg-zinc-900 text-amber-400 hover:bg-amber-400 hover:text-zinc-900 transition-all duration-200 ease-in-out text-sm overflow-hidden font-light`}
      onClick={() => {
        signOut(auth)
          .then(() => {
            auth.updateCurrentUser(null);
            props.setCurrentUser(undefined);
          })
          .catch((error) => console.log(error));
        router.push("/");
      }}
    >
      {loading == true ? (
        <PuffLoader color="currentColor" size={16} />
      ) : (
        <div className="flex flex-row space-x-1 items-center">
          <div className="border-r px-1 border-amber-400 group-hover:border-zinc-900 transition-all duration-200 ease-in-out">
            {props.name}
          </div>
          <div>Sign Out</div>{" "}
        </div>
      )}
    </button>
  );
};

export default NavSignOut;
