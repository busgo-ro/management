import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import LogoutButton from "../components/LogoutButton";
import Login from "./login/page";
import { cache } from "react";

export const dynamic = "force-dynamic";

export default async function Index() {
  const createServerSupabaseClient = cache(() => {
    const cookieStore = cookies()
    return createServerComponentClient<any>({ cookies: () => cookieStore })
    })
const supabase = createServerSupabaseClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="w-full flex flex-col items-center">
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
        <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm text-foreground">
          <div />
          <div>
            {user && (
              <div className="flex items-center gap-4">
                Hey, {user.email}!
                <LogoutButton />
              </div>
            )}
          </div>
        </div>
      </nav>
      {user ? "Logged in" : <Login />}
    </div>
  );
}
