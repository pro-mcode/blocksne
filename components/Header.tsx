import Link from "next/link";
import NavItems from "./NavItems";
import UserDropdown from "./UserDropdown";
import { searchStocks } from "@/lib/actions/finnhub.actions";

const Header = async ({ user }: { user: User }) => {
  let initialStocks: StockWithWatchlistStatus[] = [];
  try {
    initialStocks = await searchStocks();
  } catch (error) {
    console.error("Failed to fetch initial stocks:", error);
    // Fallback to empty array - UI will show "No stocks available"
  }
  return (
  return (
    <header className="sticky top-0 header">
      <div className="header-wrapper">
        <Link href={"/"} className="text-white">
          BlockSNE
        </Link>
        <nav className="hidden sm:block">
          <NavItems initialStocks={initialStocks} />
        </nav>
        <UserDropdown user={user} initialStocks={initialStocks} />
      </div>
    </header>
  );
};

export default Header;
