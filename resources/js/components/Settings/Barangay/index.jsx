import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useReducer, useState } from "react";
import { BarangayCreate } from "./create";
import { ACTION_TYPES } from "../../../actionType";
import { barangayFetchReducer, INITIAL_STATE } from "./Reducer/fetchReducer";
import { barangayEditReducer, INITIAL_STATE_EDIT } from "./Reducer/editReducer";
import apiClient from "../../../apiClient";
import moment from "moment";
import { BarangayEdit } from "./edit";
import { Spinner } from "@material-tailwind/react";
import { EDIT_BARANGAY_ACTION_TYPES } from "./editBarangayActionType";
import { DELETE_BARANGAY_ACTION_TYPES } from "./deleteBarangayActionType";
import {
    barangayDeleteReducer,
    INITIAL_STATE_DELETE,
} from "./Reducer/deleteReducer";
import BarangayDelete from "./delete";
export default function BarangayIndex() {
    const [state, dispatch] = useReducer(barangayFetchReducer, INITIAL_STATE);
    const [stateEdit, dispatchEdit] = useReducer(
        barangayEditReducer,
        INITIAL_STATE_EDIT
    );
    const [stateDelete, dispatchDelete] = useReducer(
        barangayDeleteReducer,
        INITIAL_STATE_DELETE
    );
    const handleFetch = async () => {
        dispatch({ type: ACTION_TYPES.FETCH_START });

        try {
            const response = await apiClient.get(
                "barangay?search=" + state.search
            );

            dispatch({
                type: ACTION_TYPES.FETCH_SUCCESS,
                payload: response.data,
            });
        } catch (error) {
            dispatch({
                type: ACTION_TYPES.FETCH_ERROR,
                payload: error.response.data.errors,
            });
        }
    };

    useEffect(() => {
        handleFetch();
    }, []);

    const handleClickAdd = () => {
        dispatch({ type: ACTION_TYPES.CREATE_DIALOG });
    };

    const handleClickEdit = (data) => {
        dispatchEdit({ type: "LOAD_DATA_TO_EDIT", payload: data });
    };

    const handleSearchKeyDown = (e) => {
        if (e.key === "Enter") {
            handleFetch();
        }
    };

    const handleSearchInputChange = (e) => {
        dispatch({
            type: ACTION_TYPES.SET_SEARCH,
            payload: { name: e.target.name, value: e.target.value },
        });
    };

    const handleClickDelete = (data) => {
        dispatchDelete({
            type: DELETE_BARANGAY_ACTION_TYPES.DATA_TO_DELETE,
            payload: data,
        });
        dispatchDelete({
            type: DELETE_BARANGAY_ACTION_TYPES.DELETE_DIALOG_OPEN,
        });
    };
    return (
        <div>
            <div className="bg-white border border-gray-100 shadow-md shadow-black/5 p-6 rounded-md">
                <div className="flex justify-between mb-4 items-start">
                    <div className="font-semibold tracking-widest uppercase text-gray-700">
                        Barangay List
                    </div>
                </div>

                {/* BUTTON AND SEARCH */}
                <div className="flex flex-col md:flex-row mb-4 justify-between gap-2">
                    <button
                        onClick={handleClickAdd}
                        type="button"
                        data-tab="order"
                        data-tab-page="active"
                        className="bg-teal-400 text-sm font-medium text-white py-2 px-4 rounded-md w-24 tracking-wide"
                    >
                        ADD
                    </button>

                    <div className="relative float-right w-full md:w-72 content-end">
                        <input
                            name="search"
                            onChange={handleSearchInputChange}
                            onKeyDown={handleSearchKeyDown}
                            type="text"
                            className="py-2 pr-4 pl-10 bg-gray-50 w-full text-gray-500 outline-none border border-gray-600 rounded-md text-sm focus:border-teal-500"
                            placeholder="Search..."
                        />

                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <MagnifyingGlassIcon className="w-5 h-5 text-gray-500" />
                        </div>
                    </div>
                </div>
                {/* BUTTON AND SEARCH */}

                {/* TABLE */}
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
                            {state.loading ? (
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
                            ) : (
                                state.barangay.data.map((data, index) => (
                                    <tr key={index}>
                                        <td className="py-2 px-4 border-b border-b-gray-50">
                                            <div className="flex items-center">
                                                <span className="text-[13px] font-medium text-gray-700 uppercase">
                                                    {data.barangay}
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
                                            <span
                                                onClick={() =>
                                                    handleClickEdit(data)
                                                }
                                                className="hover:cursor-pointer text-teal-500 inline-block p-1 tracking-wide rounded bg-emerald-500/10 text-emerald-500 font-medium text-[13px] leading-none"
                                            >
                                                Edit
                                            </span>
                                            <span
                                                onClick={() =>
                                                    handleClickDelete(data)
                                                }
                                                className="hover:cursor-pointer text-red-500 inline-block p-1 rounded bg-emerald-500/10 text-emerald-500 font-medium text-[13px] leading-none"
                                            >
                                                Delete
                                            </span>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
                {/* TABLE */}
            </div>

            {/* CREATE */}
            <BarangayCreate
                onSaved={handleFetch}
                isOpen={state.createDialog}
                isClose={() =>
                    dispatch({ type: ACTION_TYPES.CREATE_DIALOG_CLOSE })
                }
            />

            {/* EDIT */}
            <BarangayEdit
                onSaved={handleFetch}
                isOpen={stateEdit.editDialog}
                isClose={() =>
                    dispatchEdit({
                        type: EDIT_BARANGAY_ACTION_TYPES.EDIT_DIALOG_CLOSE,
                    })
                }
                dataToEdit={stateEdit.form}
            />

            {/* DELETE */}
            <BarangayDelete
                onDeleted={handleFetch}
                dataToDelete={stateDelete.form}
                isOpen={stateDelete.deleteDialog}
                isClose={() =>
                    dispatchDelete({
                        type: DELETE_BARANGAY_ACTION_TYPES.DELETE_DIALOG_CLOSE,
                    })
                }
            />
        </div>
    );
}
