"use client";
import { useUserAuth } from "./_utils/auth-context";
import ShoppingListPage from "./secure/page";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleSignIn = async () => {
    await gitHubSignIn();
  };

  const handleLogOut = async () => {
    await firebaseSignOut();
  };

  return (
    <>
      <main className="flex flex-col gap-5 items-center">
        <button
          onClick={handleSignIn}
          className="bg-text text-base py-2 px-5 w-[50%]"
        >
          sign in with github
        </button>
        <button
          onClick={handleLogOut}
          className="text-text border-text border-2 py-2 px-5 w-[25%]"
        >
          log out
        </button>
        {user && (
          <>
            <p>
              Welcome, {user.displayName}! ({user.email})
            </p>
            <ShoppingListPage user={user} />
          </>
        )}
      </main>
    </>
  );
}
