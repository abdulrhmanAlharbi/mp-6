import OAuthWindow from "@/components/oauthwindow";

const MainStyling = "flex flex-col items-center gap-5 pt-60 min-h-screen p-8 bg-gradient-to-b from-[#c6c6c6]  to-[#fbfbfb] text-[#191919]"
export default function Home() {
  return (
      <main className={MainStyling}>
          <OAuthWindow />
      </main>
  )
}