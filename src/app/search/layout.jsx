import SearchHeader from "@/components/SearchHeader";
import "../../app/globals.css";

export default function SearchLayout({ children }) {
  return (
    <div>
      <SearchHeader />
      {children}
      {/* footer */}
    </div>
  );
}
