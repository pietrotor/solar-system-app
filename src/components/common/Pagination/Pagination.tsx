"use client";

import { generatePaginationNumbers } from "@/utils";
import Link from "next/link";
import clsx from "clsx";
import { redirect, usePathname, useSearchParams } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib";

interface Props {
  totalPages: number;
}

export const Pagination = ({ totalPages }: Props) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const pageString = searchParams.get("page") ?? 1;
  const currentPage = isNaN(+pageString) ? 1 : +pageString;

  if (currentPage < 1 || isNaN(+pageString)) {
    redirect(pathname);
  }

  const allPages = generatePaginationNumbers(currentPage, totalPages);

  const createPageUrl = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);

    if (pageNumber === "...") {
      return `${pathname}?${params.toString()}`;
    }

    if (+pageNumber <= 0) {
      return `${pathname}`;
    }

    if (+pageNumber > totalPages) {
      return `${pathname}?${params.toString()}`;
    }

    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  return (
    <div className="flex text-center justify-center my-10">
      <nav aria-label="Page navigation example">
        <ul className="flex list-style-none items-center gap-2">
          <li className="page-item">
            <Link
              className={cn(
                "page-link relative block py-1.5 px-2 border-0 bg-transparent outline-none transition-all duration-300 rounded text-white hover:text-primary hover:bg-gray-200 focus:shadow-none",
                currentPage === 1 && "pointer-events-none opacity-50"
              )}
              href={createPageUrl(currentPage - 1)}
              aria-disabled={currentPage === 1}
            >
              <ChevronLeft size={30} />
            </Link>
          </li>

          {allPages.map((page) => (
            <li key={page} className="page-item">
              <Link
                className={clsx(
                  "page-link relative block py-1.5 w-9 h-9 border-0 outline-none transition-all duration-300 rounded text-white hover:text-primary hover:bg-gray-200 focus:shadow-none",
                  {
                    "bg-primary shadow-sm text-white hover:text-white hover:bg-blue-700":
                      page === currentPage,
                  }
                )}
                href={createPageUrl(page)}
              >
                {page}
              </Link>
            </li>
          ))}

          <li className="page-item">
            <Link
              className={cn(
                "page-link relative block py-1.5 px-2 border-0 bg-transparent outline-none transition-all duration-300 rounded text-white hover:text-primary hover:bg-gray-200 focus:shadow-none",
                currentPage === totalPages && "pointer-events-none opacity-50"
              )}
              href={createPageUrl(currentPage + 1)}
              aria-disabled={currentPage === totalPages}
            >
              <ChevronRight size={30} />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
