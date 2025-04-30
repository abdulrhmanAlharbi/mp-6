"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import OAuthProfile from "@/components/oauthprofile";
import GoogleOAuth from "@/lib/googleoauth";
import GoogleUserInfo from "@/lib/googleuserinfo";
import { GoogleUser } from "@/lib/types";

const MainStyling =
    "flex flex-col items-center gap-5 pt-60 min-h-screen p-8 bg-gradient-to-b from-[#c6c6c6] to-[#fbfbfb] text-[#191919]";

export default function CallbackPage() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const [userinfo, setUserinfo] = useState<GoogleUser | null>(null);

    useEffect(() => {
        const code = searchParams.get("code");

        if (!code) {
            console.log("No code found.");
            router.push("/error1");
            return;
        }

        (async () => {
            try {
                const tokendata = await GoogleOAuth(code);

                if (!tokendata.access_token) {
                    router.push("/error2");
                    return;
                }

                const info = await GoogleUserInfo(tokendata.access_token);
                setUserinfo(info);
            } catch (err) {
                console.error(err);
                router.push("/error3");
            }
        })();
    }, [searchParams, router]);

    if (!userinfo) return <div className="p-10">Loading...</div>;

    return (
        <main className={MainStyling}>
            <OAuthProfile name={userinfo.name} email={userinfo.email} picture={userinfo.picture}
            />
        </main>
    )
}