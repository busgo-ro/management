import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import "./globals.scss";
import { cookies } from "next/headers";
import NavigationDrawer from "@/components/NavigationDrawer/ServerNavigationDrawer";
import MainContainer from "@/components/MainContainer/MainContainer";
import { cache } from "react";

export const metadata = {
  title: "BusGO",
  description: "BusGO management web application",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
   const createServerSupabaseClient = cache(() => {
    const cookieStore = cookies()
    return createServerComponentClient<any>({ cookies: () => cookieStore })
    })
const supabase = createServerSupabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return (
    <html lang="en">
      <body>
        {!user ? (
          <main className="min-h-screen bg-layout-login-background flex flex-col items-center ">
            {children}
          </main>
        ) : (
          <div className="flex flex-row gap-3 bg-background-main-layout w-full relative justify-between h-full min-h-screen">
            <NavigationDrawer className="absolute bg-background-main-containers left-[0.875rem] w-[6.4rem] top-[0.40625rem] bottom-[0.7rem] border rounded-md" />
            <MainContainer
              children={children}
              className="absolute bg-background-main-containers  left-[8rem] right-[0.875rem] top-[1.1rem] bottom-[1.1rem] border rounded-md"
            />
          </div>
        )}
      </body>
    </html>
  );
}
