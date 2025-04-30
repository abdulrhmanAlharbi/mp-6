import OAuthProfile from "@/components/oauthprofile";
import GoogleOAuth from "@/lib/googleoauth";
import { redirect } from "next/navigation";
import GoogleUserInfo from "@/lib/googleuserinfo";

const MainStyling = "flex flex-col items-center gap-5 pt-60 min-h-screen p-8 bg-gradient-to-b from-[#c6c6c6]  to-[#fbfbfb] text-[#191919]"

export default async function callbackPage
({
    searchParams
 }:
 {
    searchParams: { code?: string };
 }) {
    if (!searchParams.code) {
        redirect("/");
    }

    try{
        const tokendata = await GoogleOAuth(searchParams.code);
        console.log(tokendata);

        if (!tokendata.access_token) {
            redirect("/");
        }

        //fetch user info server side to display to the user faster
        const userinfo = await GoogleUserInfo(tokendata.access_token);
        console.log(userinfo);

        return (
            <main className={MainStyling}>
                <OAuthProfile name={userinfo.name} email={userinfo.email} picture={userinfo.picture} />
            </main>
        );

    } catch (err) {
        console.log(err);
        redirect("/");
    }


}