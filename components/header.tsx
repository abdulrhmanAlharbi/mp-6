import Link from "next/link";

const LinkStyling = "text-4xl font-semibold p-4 text-[#191919] hover:text-[#fa7921]";

export default function Header() {
    return (
        <header className="flex justify-between items-center h-20 bg-[#c6c6c6]">
            <Link href="/" className={LinkStyling}>
                CS391 OAuth
            </Link>
        </header>
    );
}