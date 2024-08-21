import {
    MagnifyingGlassCircleIcon,
    MagnifyingGlassIcon,
    ServerStackIcon,
} from "@heroicons/react/24/outline";
import React from "react";

export default function BarangayIndex() {
    return (
        <div>
            <div className="">
                <div className="">
                    <div className="bg-white border border-gray-100 shadow-md shadow-black/5 p-6 rounded-md">
                        <div className="flex justify-between mb-4 items-start">
                            <div className="font-medium">Manage orders</div>
                        </div>

                        {/* BUTTON AND SEARCH */}
                        <div className="flex flex-col md:flex-row mb-4 justify-between gap-2">
                            <button
                                type="button"
                                data-tab="order"
                                data-tab-page="active"
                                className="bg-teal-700 text-sm font-medium text-white py-2 px-4 rounded-md w-24"
                            >
                                Add
                            </button>

                            <div className="relative float-right w-full md:w-72 content-end">
                                <input
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
                                data-page="active"
                            >
                                <thead>
                                    <tr>
                                        <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left rounded-tl-md rounded-bl-md">
                                            Service
                                        </th>
                                        <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left">
                                            Estimate
                                        </th>
                                        <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left">
                                            Budget
                                        </th>
                                        <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left rounded-tr-md rounded-br-md">
                                            Status
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="py-2 px-4 border-b border-b-gray-50">
                                            <div className="flex items-center">
                                                {/* <img src="https://placehold.co/32x32" alt="" className="w-8 h-8 rounded object-cover block"> */}
                                                <a
                                                    href="#"
                                                    className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                                                >
                                                    Create landing page
                                                </a>
                                            </div>
                                        </td>
                                        <td className="py-2 px-4 border-b border-b-gray-50">
                                            <span className="text-[13px] font-medium text-gray-400">
                                                3 days
                                            </span>
                                        </td>
                                        <td className="py-2 px-4 border-b border-b-gray-50">
                                            <span className="text-[13px] font-medium text-gray-400">
                                                $56
                                            </span>
                                        </td>
                                        <td className="py-2 px-4 border-b border-b-gray-50">
                                            <span className="inline-block p-1 rounded bg-emerald-500/10 text-emerald-500 font-medium text-[12px] leading-none">
                                                In progress
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 px-4 border-b border-b-gray-50">
                                            <div className="flex items-center">
                                                {/* <img src="https://placehold.co/32x32" alt="" className="w-8 h-8 rounded object-cover block"> */}
                                                <a
                                                    href="#"
                                                    className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                                                >
                                                    Create landing page
                                                </a>
                                            </div>
                                        </td>
                                        <td className="py-2 px-4 border-b border-b-gray-50">
                                            <span className="text-[13px] font-medium text-gray-400">
                                                3 days
                                            </span>
                                        </td>
                                        <td className="py-2 px-4 border-b border-b-gray-50">
                                            <span className="text-[13px] font-medium text-gray-400">
                                                $56
                                            </span>
                                        </td>
                                        <td className="py-2 px-4 border-b border-b-gray-50">
                                            <span className="inline-block p-1 rounded bg-emerald-500/10 text-emerald-500 font-medium text-[12px] leading-none">
                                                In progress
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 px-4 border-b border-b-gray-50">
                                            <div className="flex items-center">
                                                {/* <img src="https://placehold.co/32x32" alt="" className="w-8 h-8 rounded object-cover block"> */}
                                                <a
                                                    href="#"
                                                    className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                                                >
                                                    Create landing page
                                                </a>
                                            </div>
                                        </td>
                                        <td className="py-2 px-4 border-b border-b-gray-50">
                                            <span className="text-[13px] font-medium text-gray-400">
                                                3 days
                                            </span>
                                        </td>
                                        <td className="py-2 px-4 border-b border-b-gray-50">
                                            <span className="text-[13px] font-medium text-gray-400">
                                                $56
                                            </span>
                                        </td>
                                        <td className="py-2 px-4 border-b border-b-gray-50">
                                            <span className="inline-block p-1 rounded bg-emerald-500/10 text-emerald-500 font-medium text-[12px] leading-none">
                                                In progress
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 px-4 border-b border-b-gray-50">
                                            <div className="flex items-center">
                                                {/* <img src="https://placehold.co/32x32" alt="" className="w-8 h-8 rounded object-cover block"> */}
                                                <a
                                                    href="#"
                                                    className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                                                >
                                                    Create landing page
                                                </a>
                                            </div>
                                        </td>
                                        <td className="py-2 px-4 border-b border-b-gray-50">
                                            <span className="text-[13px] font-medium text-gray-400">
                                                3 days
                                            </span>
                                        </td>
                                        <td className="py-2 px-4 border-b border-b-gray-50">
                                            <span className="text-[13px] font-medium text-gray-400">
                                                $56
                                            </span>
                                        </td>
                                        <td className="py-2 px-4 border-b border-b-gray-50">
                                            <span className="inline-block p-1 rounded bg-emerald-500/10 text-emerald-500 font-medium text-[12px] leading-none">
                                                In progress
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 px-4 border-b border-b-gray-50">
                                            <div className="flex items-center">
                                                {/* <img src="https://placehold.co/32x32" alt="" className="w-8 h-8 rounded object-cover block"> */}
                                                <a
                                                    href="#"
                                                    className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                                                >
                                                    Create landing page
                                                </a>
                                            </div>
                                        </td>
                                        <td className="py-2 px-4 border-b border-b-gray-50">
                                            <span className="text-[13px] font-medium text-gray-400">
                                                3 days
                                            </span>
                                        </td>
                                        <td className="py-2 px-4 border-b border-b-gray-50">
                                            <span className="text-[13px] font-medium text-gray-400">
                                                $56
                                            </span>
                                        </td>
                                        <td className="py-2 px-4 border-b border-b-gray-50">
                                            <span className="inline-block p-1 rounded bg-emerald-500/10 text-emerald-500 font-medium text-[12px] leading-none">
                                                In progress
                                            </span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table
                                className="w-full min-w-[540px] hidden"
                                data-tab-for="order"
                                data-page="completed"
                            >
                                <thead>
                                    <tr>
                                        <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left rounded-tl-md rounded-bl-md">
                                            Service
                                        </th>
                                        <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left">
                                            Estimate
                                        </th>
                                        <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left">
                                            Budget
                                        </th>
                                        <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left rounded-tr-md rounded-br-md">
                                            Status
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="py-2 px-4 border-b border-b-gray-50">
                                            <div className="flex items-center">
                                                {/* <img src="https://placehold.co/32x32" alt="" className="w-8 h-8 rounded object-cover block"> */}
                                                <a
                                                    href="#"
                                                    className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                                                >
                                                    Create landing page
                                                </a>
                                            </div>
                                        </td>
                                        <td className="py-2 px-4 border-b border-b-gray-50">
                                            <span className="text-[13px] font-medium text-gray-400">
                                                3 days
                                            </span>
                                        </td>
                                        <td className="py-2 px-4 border-b border-b-gray-50">
                                            <span className="text-[13px] font-medium text-gray-400">
                                                $56
                                            </span>
                                        </td>
                                        <td className="py-2 px-4 border-b border-b-gray-50">
                                            <span className="inline-block p-1 rounded bg-emerald-500/10 text-emerald-500 font-medium text-[12px] leading-none">
                                                Completed
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 px-4 border-b border-b-gray-50">
                                            <div className="flex items-center">
                                                {/* <img src="https://placehold.co/32x32" alt="" className="w-8 h-8 rounded object-cover block"> */}
                                                <a
                                                    href="#"
                                                    className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                                                >
                                                    Create landing page
                                                </a>
                                            </div>
                                        </td>
                                        <td className="py-2 px-4 border-b border-b-gray-50">
                                            <span className="text-[13px] font-medium text-gray-400">
                                                3 days
                                            </span>
                                        </td>
                                        <td className="py-2 px-4 border-b border-b-gray-50">
                                            <span className="text-[13px] font-medium text-gray-400">
                                                $56
                                            </span>
                                        </td>
                                        <td className="py-2 px-4 border-b border-b-gray-50">
                                            <span className="inline-block p-1 rounded bg-emerald-500/10 text-emerald-500 font-medium text-[12px] leading-none">
                                                Completed
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 px-4 border-b border-b-gray-50">
                                            <div className="flex items-center">
                                                {/* <img src="https://placehold.co/32x32" alt="" className="w-8 h-8 rounded object-cover block"> */}
                                                <a
                                                    href="#"
                                                    className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                                                >
                                                    Create landing page
                                                </a>
                                            </div>
                                        </td>
                                        <td className="py-2 px-4 border-b border-b-gray-50">
                                            <span className="text-[13px] font-medium text-gray-400">
                                                3 days
                                            </span>
                                        </td>
                                        <td className="py-2 px-4 border-b border-b-gray-50">
                                            <span className="text-[13px] font-medium text-gray-400">
                                                $56
                                            </span>
                                        </td>
                                        <td className="py-2 px-4 border-b border-b-gray-50">
                                            <span className="inline-block p-1 rounded bg-emerald-500/10 text-emerald-500 font-medium text-[12px] leading-none">
                                                Completed
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 px-4 border-b border-b-gray-50">
                                            <div className="flex items-center">
                                                {/* <img src="https://placehold.co/32x32" alt="" className="w-8 h-8 rounded object-cover block"> */}
                                                <a
                                                    href="#"
                                                    className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                                                >
                                                    Create landing page
                                                </a>
                                            </div>
                                        </td>
                                        <td className="py-2 px-4 border-b border-b-gray-50">
                                            <span className="text-[13px] font-medium text-gray-400">
                                                3 days
                                            </span>
                                        </td>
                                        <td className="py-2 px-4 border-b border-b-gray-50">
                                            <span className="text-[13px] font-medium text-gray-400">
                                                $56
                                            </span>
                                        </td>
                                        <td className="py-2 px-4 border-b border-b-gray-50">
                                            <span className="inline-block p-1 rounded bg-emerald-500/10 text-emerald-500 font-medium text-[12px] leading-none">
                                                Completed
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 px-4 border-b border-b-gray-50">
                                            <div className="flex items-center">
                                                {/* <img src="https://placehold.co/32x32" alt="" className="w-8 h-8 rounded object-cover block"> */}
                                                <a
                                                    href="#"
                                                    className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                                                >
                                                    Create landing page
                                                </a>
                                            </div>
                                        </td>
                                        <td className="py-2 px-4 border-b border-b-gray-50">
                                            <span className="text-[13px] font-medium text-gray-400">
                                                3 days
                                            </span>
                                        </td>
                                        <td className="py-2 px-4 border-b border-b-gray-50">
                                            <span className="text-[13px] font-medium text-gray-400">
                                                $56
                                            </span>
                                        </td>
                                        <td className="py-2 px-4 border-b border-b-gray-50">
                                            <span className="inline-block p-1 rounded bg-emerald-500/10 text-emerald-500 font-medium text-[12px] leading-none">
                                                Completed
                                            </span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table
                                className="w-full min-w-[540px] hidden"
                                data-tab-for="order"
                                data-page="canceled"
                            >
                                <thead>
                                    <tr>
                                        <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left rounded-tl-md rounded-bl-md">
                                            Service
                                        </th>
                                        <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left">
                                            Estimate
                                        </th>
                                        <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left">
                                            Budget
                                        </th>
                                        <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left rounded-tr-md rounded-br-md">
                                            Status
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="py-2 px-4 border-b border-b-gray-50">
                                            <div className="flex items-center">
                                                {/* <img src="https://placehold.co/32x32" alt="" className="w-8 h-8 rounded object-cover block"> */}
                                                <a
                                                    href="#"
                                                    className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                                                >
                                                    Create landing page
                                                </a>
                                            </div>
                                        </td>
                                        <td className="py-2 px-4 border-b border-b-gray-50">
                                            <span className="text-[13px] font-medium text-gray-400">
                                                3 days
                                            </span>
                                        </td>
                                        <td className="py-2 px-4 border-b border-b-gray-50">
                                            <span className="text-[13px] font-medium text-gray-400">
                                                $56
                                            </span>
                                        </td>
                                        <td className="py-2 px-4 border-b border-b-gray-50">
                                            <span className="inline-block p-1 rounded bg-rose-500/10 text-rose-500 font-medium text-[12px] leading-none">
                                                Canceled
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 px-4 border-b border-b-gray-50">
                                            <div className="flex items-center">
                                                {/* <img src="https://placehold.co/32x32" alt="" className="w-8 h-8 rounded object-cover block"> */}
                                                <a
                                                    href="#"
                                                    className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                                                >
                                                    Create landing page
                                                </a>
                                            </div>
                                        </td>
                                        <td className="py-2 px-4 border-b border-b-gray-50">
                                            <span className="text-[13px] font-medium text-gray-400">
                                                3 days
                                            </span>
                                        </td>
                                        <td className="py-2 px-4 border-b border-b-gray-50">
                                            <span className="text-[13px] font-medium text-gray-400">
                                                $56
                                            </span>
                                        </td>
                                        <td className="py-2 px-4 border-b border-b-gray-50">
                                            <span className="inline-block p-1 rounded bg-rose-500/10 text-rose-500 font-medium text-[12px] leading-none">
                                                Canceled
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 px-4 border-b border-b-gray-50">
                                            <div className="flex items-center">
                                                {/* <img src="https://placehold.co/32x32" alt="" className="w-8 h-8 rounded object-cover block"> */}
                                                <a
                                                    href="#"
                                                    className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                                                >
                                                    Create landing page
                                                </a>
                                            </div>
                                        </td>
                                        <td className="py-2 px-4 border-b border-b-gray-50">
                                            <span className="text-[13px] font-medium text-gray-400">
                                                3 days
                                            </span>
                                        </td>
                                        <td className="py-2 px-4 border-b border-b-gray-50">
                                            <span className="text-[13px] font-medium text-gray-400">
                                                $56
                                            </span>
                                        </td>
                                        <td className="py-2 px-4 border-b border-b-gray-50">
                                            <span className="inline-block p-1 rounded bg-rose-500/10 text-rose-500 font-medium text-[12px] leading-none">
                                                Canceled
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 px-4 border-b border-b-gray-50">
                                            <div className="flex items-center">
                                                {/* <img src="https://placehold.co/32x32" alt="" className="w-8 h-8 rounded object-cover block"> */}
                                                <a
                                                    href="#"
                                                    className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                                                >
                                                    Create landing page
                                                </a>
                                            </div>
                                        </td>
                                        <td className="py-2 px-4 border-b border-b-gray-50">
                                            <span className="text-[13px] font-medium text-gray-400">
                                                3 days
                                            </span>
                                        </td>
                                        <td className="py-2 px-4 border-b border-b-gray-50">
                                            <span className="text-[13px] font-medium text-gray-400">
                                                $56
                                            </span>
                                        </td>
                                        <td className="py-2 px-4 border-b border-b-gray-50">
                                            <span className="inline-block p-1 rounded bg-rose-500/10 text-rose-500 font-medium text-[12px] leading-none">
                                                Canceled
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 px-4 border-b border-b-gray-50">
                                            <div className="flex items-center">
                                                {/* <img src="https://placehold.co/32x32" alt="" className="w-8 h-8 rounded object-cover block"> */}
                                                <a
                                                    href="#"
                                                    className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                                                >
                                                    Create landing page
                                                </a>
                                            </div>
                                        </td>
                                        <td className="py-2 px-4 border-b border-b-gray-50">
                                            <span className="text-[13px] font-medium text-gray-400">
                                                3 days
                                            </span>
                                        </td>
                                        <td className="py-2 px-4 border-b border-b-gray-50">
                                            <span className="text-[13px] font-medium text-gray-400">
                                                $56
                                            </span>
                                        </td>
                                        <td className="py-2 px-4 border-b border-b-gray-50">
                                            <span className="inline-block p-1 rounded bg-rose-500/10 text-rose-500 font-medium text-[12px] leading-none">
                                                Canceled
                                            </span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
