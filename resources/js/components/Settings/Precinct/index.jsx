import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
import { PrecenctCreate } from "./create";
import apiClient from "../../../apiClient";
import { Spinner } from "@material-tailwind/react";
import moment from "moment";
import PaginatedItems from "../../Pagination/Pagination";
import { useQuery, useQueryClient } from "@tanstack/react-query";
export default function PrecentIndex() {
    const [createDialog, setCreateDialog] = useState(false);
    const queryClient = useQueryClient();

    // pagination
    const [pages, setPages] = useState({
        total_items: 0,
        per_page: 0,
        current_total: 0,
    });
    const [selectedPage, setSelectedPage] = useState(1);
    // pagination

    const [search, setSearch] = useState("");
    const [searchTerm, setSearchTerm] = useState("");

    const { data: dataList, isLoading } = useQuery({
        queryKey: ["dataList", { selectedPage, search }],
        queryFn: async () => {
            const response = await apiClient.get(
                "precinct?search=" + search + "&page=" + selectedPage
            );
            setPages({
                total_items: response.data.total,
                per_page: response.data.per_page,
                current_total: response.data.to,
            });
            return response.data;
        },
    });

    const handleSearchKeyDown = (e) => {
        if (e.key === "Enter") {
            setSearch(searchTerm);
            setSelectedPage(1);
        }
    };

    const getPrecinct = () => {
        queryClient.invalidateQueries(["dataList", { selectedPage, search }]);
        setCreateDialog(false);
    };
    return (
        <div>
            <div className="bg-white border border-gray-100 shadow-md shadow-black/5 p-6 rounded-md">
                <div className="flex justify-between mb-4 items-start">
                    <div className="font-semibold tracking-widest uppercase text-gray-700">
                        <div className="font-medium">Precinct List</div>
                    </div>
                </div>

                {/* BUTTON AND SEARCH */}
                <div className="flex flex-col md:flex-row mb-4 justify-between gap-2">
                    <button
                        onClick={() => setCreateDialog(true)}
                        type="button"
                        data-tab="order"
                        data-tab-page="active"
                        className="w-full md:w-24 bg-teal-400 text-sm font-medium text-white py-2 px-4 rounded-md w-24 tracking-wide"
                    >
                        Add
                    </button>

                    <div className="relative float-right w-full md:w-72 content-end">
                        <input
                            onKeyDown={handleSearchKeyDown}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            value={searchTerm}
                            type="text"
                            className="py-2 pr-4 pl-10 bg-gray-50 w-full text-gray-500 outline-none border border-gray-100 rounded-md text-sm focus:border-teal-500"
                            placeholder="Search..."
                        />
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <MagnifyingGlassIcon className="w-5 h-5 text-gray-500" />
                        </div>
                    </div>
                </div>
                {/* BUTTON AND SEARCH */}

                <div className="overflow-x-auto">
                    <table
                        className="w-full min-w-[540px]"
                        data-tab-for="order"
                    >
                        <thead>
                            <tr>
                                <th className="text-[12px] uppercase tracking-wide font-medium text-gray-600 py-2 px-4 bg-gray-50 text-left rounded-tl-md rounded-bl-md">
                                    BARANGAY
                                </th>
                                <th className="text-[12px] uppercase tracking-wide font-medium text-gray-600 py-2 px-4 bg-gray-50 text-left">
                                    CREATED BY
                                </th>
                                <th className="text-[12px] uppercase tracking-wide font-medium text-gray-600 py-2 px-4 bg-gray-50 text-left">
                                    DATE CREATED
                                </th>
                                <th className="text-[12px] uppercase tracking-wide font-medium text-gray-600 py-2 px-4 bg-gray-50 text-left rounded-tr-md rounded-br-md">
                                    ACTION
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {isLoading ? (
                                <tr className="items-center justify-center text-center">
                                    <td colSpan={5}>
                                        <div className="border-b flex items-center justify-center text-center p-2">
                                            <Spinner color="teal" />
                                            <span className="pl-3">
                                                Loading data please wait...{" "}
                                            </span>
                                        </div>
                                    </td>
                                </tr>
                            ) : dataList.data.length === 0 ? (
                                <tr>
                                    <td
                                        colSpan={4}
                                        className="py-2 px-4 text-center text-gray-500 tracking-wide"
                                    >
                                        No data found...
                                    </td>
                                </tr>
                            ) : (
                                dataList.data.map((data, index) => (
                                    <tr key={index}>
                                        <td className="py-2 px-4 border-b border-b-gray-50">
                                            <div className="flex items-center">
                                                <span className="text-[13px] font-medium text-gray-700 uppercase">
                                                    {data.precinct}
                                                </span>
                                            </div>
                                        </td>
                                        <td className="py-2 px-4 border-b border-b-gray-50">
                                            <span className="text-[13px] font-medium text-gray-700 tracking-wide uppercase">
                                                {data.user.name}
                                            </span>
                                        </td>
                                        <td className="py-2 px-4 border-b border-b-gray-50">
                                            <span className="text-[13px] font-medium text-gray-700 tracking-wide uppercase">
                                                {moment(
                                                    data.date_created
                                                ).format("LL")}
                                            </span>
                                        </td>
                                        <td className="flex py-2 px-4 border-b border-b-gray-50">
                                            <span className="hover:cursor-pointer text-teal-500 inline-block p-1 tracking-wide rounded bg-emerald-500/10 text-emerald-500 font-medium text-[13px] leading-none">
                                                Edit
                                            </span>
                                            <span className="hover:cursor-pointer text-red-500 inline-block p-1 rounded bg-emerald-500/10 text-emerald-500 font-medium text-[13px] leading-none">
                                                Delete
                                            </span>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                    <div className="flex items-center justify-between border-t border-blue-gray-50 p-4">
                        <PaginatedItems
                            currentTotal={pages.current_total}
                            itemsPerPage={pages.per_page || 1}
                            totalItems={pages.total_items || 0}
                            selectedPage={setSelectedPage}
                        />
                    </div>
                </div>
            </div>

            {/* CREATE  */}
            <PrecenctCreate
                onSaved={getPrecinct}
                isOpen={createDialog}
                isClose={() => setCreateDialog(false)}
            />
        </div>
    );
}
