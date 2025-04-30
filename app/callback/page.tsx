import OAuthProfile from "@/components/oauthprofile";
import GoogleOAuth from "@/lib/googleoauth";
import { redirect } from "next/navigation";
import GoogleUserInfo from "@/lib/googleuserinfo";

const MainStyling = "flex flex-col items-center gap-5 pt-60 min-h-screen p-8 bg-gradient-to-b from-[#c6c6c6]  to-[#fbfbfb] text-[#191919]"

//https://nextjs.org/docs/app/api-reference/file-conventions/page#searchparams-optional
export default async function callbackPage
({
    searchParams,
 }:
 {
    searchParams: Promise<{ code: string }>;
 }) {

    const {code} = await searchParams;

    if (!code) {
        redirect("/");
    }

    try{
        const tokendata = await GoogleOAuth(code);
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