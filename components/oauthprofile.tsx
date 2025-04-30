"use client";
const ContainerStyling = "flex flex-col justify-center  border-[#c6c6c6] max-w-xl w-full p-8 gap-2 rounded-2xl shadow-lg border-2 bg-[#fbfbfb] ]"
const InnerDiv = "flex flex-row justify-center items-center max-w-xl w-full p-8 gap-9 ]"

export default function OAuthProfile({name, email, picture}: { name: string; email: string; picture: string}) {
    return (
        <div className={ContainerStyling}>
            <p className="text-3xl ">Your Information:</p>
            <div className={InnerDiv}>
                <img src={picture} alt={"Profile picture of " + name} className="w-40 h-40 rounded-full" />
                <div className="flex flex-col gap-4">
                    <h1 className="text-3xl font-bold">{name}</h1>
                    <p className="text-2xl">{email}</p>
                </div>
            </div>
        </div>
    )
}