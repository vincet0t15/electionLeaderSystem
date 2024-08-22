import { Typography } from "@material-tailwind/react";
import React, { useState } from "react";
import ReactPaginate from "react-paginate";

export default function PaginatedItems({
    itemsPerPage,
    totalItems,
    selectedPage,
    currentTotal,
}) {
    const [itemOffset, setItemOffset] = useState(0);

    const pageCount = Math.ceil(totalItems / itemsPerPage);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % totalItems;
        selectedPage(event.selected + 1);
        setItemOffset(newOffset);
    };

    return (
        <div className="flex flex-col md:flex-row justify-between mt-4 items-center w-full">
            <div>
                <Typography>
                    <span className="ml-2">
                        {currentTotal || 0} of {totalItems}
                    </span>
                </Typography>
            </div>
            <ReactPaginate
                breakLabel="..."
                nextLabel="Next"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                pageCount={pageCount}
                previousLabel="Previous"
                renderOnZeroPageCount={null}
                pageLinkClassName="px-3 py-1 text-gray-800 rounded border hover:bg-teal-600 text-lg hover:text-white b-2 gap-2"
                activeClassName="bg-teal-800 rounded"
                activeLinkClassName="text-white"
                previousClassName="mr-2"
                nextClassName="ml-2"
                containerClassName="flex"
                breakClassName="mr-2"
                nextLinkClassName="px-3 py-1 text-gray-800 rounded"
                disabledClassName="opacity-50 cursor-not-allowed"
                disableInitialCallback={true}
            />
        </div>
    );
}
