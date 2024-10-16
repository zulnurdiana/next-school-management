"use client";

import { ITEM_PER_PAGE } from "@/lib/settings";
import { useRouter } from "next/navigation";

const Pagination = ({ page, count }: { page?: number; count?: number }) => {
  const router = useRouter();

  const hasPrev = ITEM_PER_PAGE * (page! - 1) > 0;
  const hasNext = ITEM_PER_PAGE * (page! - 1) + ITEM_PER_PAGE < count!;

  const changePage = (newPage: number) => {
    const params = new URLSearchParams(window.location.search);
    params.set("page", newPage.toString());
    router.push(`${window.location.pathname}?${params.toString()}`);
  };

  return (
    <div className="flex items-center justify-between text-gray-500 p-4">
      <button
        disabled={!hasPrev}
        className="px-4 py-2 disabled:cursor-not-allowed disabled:opacity-50 bg-slate-200 rounded-sm font-semibold text-xs"
        onClick={() => changePage(page! - 1)}
      >
        Prev
      </button>
      <div className="flex items-center  gap-2 text-sm">
        {Array.from(
          { length: Math.ceil(count! / ITEM_PER_PAGE) },
          (_, index) => {
            const indexPage = index + 1;
            return (
              <button
                key={indexPage}
                className={`px-2 rounded-sm ${
                  page === indexPage ? "bg-lamaSky" : ""
                }`}
                onClick={() => changePage(indexPage)}
              >
                {indexPage}
              </button>
            );
          }
        )}
      </div>
      <button
        className="px-4 py-2 disabled:cursor-not-allowed disabled:opacity-50 bg-slate-200 rounded-sm font-semibold text-xs"
        disabled={!hasNext}
        onClick={() => changePage(page! + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
