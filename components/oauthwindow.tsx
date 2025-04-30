const ContainerStyling = "flex flex-col justify-center items-center border-[#c6c6c6] max-w-xl w-full p-8 gap-9 rounded-2xl shadow-lg border-2 bg-[#fbfbfb] ]"

export default function OAuthWindow() {
    const redirect = "http://localhost:3000/callback";

    const authrequest =
        "https://accounts.google.com/o/oauth2/v2/auth"          +
        `?client_id=${process.env.GOOGLE_CLIENT_ID}`            +
        `&scope=${encodeURIComponent("openid profile email")}`  +
        `&redirect_uri=${encodeURIComponent(redirect)}`         +
        `&access_type=${encodeURIComponent("offline")}`         +
        `&prompt=${encodeURIComponent("consent")}`              +
        `&response_type=${encodeURIComponent("code")}`          ;

    return (
        <div className={ContainerStyling}>
            <div className="flex flex-col justify-center items-center gap-2">
                <h2 className="font-bold text-3xl">
                    OAuth Demo
                </h2>
                <p className="text-gray-500">
                    Continue with
                </p>
            </div>
            <a className="w-full text-center rounded-xl bg-[#fa7921] text-white px-5 py-2.5 mt-1"
                href={authrequest}>
                Google
            </a>
        </div>
    )
}
