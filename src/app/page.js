import Link from "next/link";
import React from "react";
import { GrView } from "react-icons/gr";

export default function page() {
  return (
    <div>
      <h1 className="text-3xl pb-9 border-b-8 border-red-300 font-bold mx-auto md:w-1/2 text-center text-purple-900 mt-6 sm:w-4/6 px-2">
        Employee management of XYZ company
      </h1>

      <img
        src={"https://www.pcma.org/wp-content/uploads/2021/08/Employees-2.png"}
        alt=""
        className="mx-auto md:w-1/2 border-b-8 border-red-300"
      />

      <div className=" flex border-b-2 pb-5 border-red-300 gap-9  md:gap-0 flex-col md:flex-row px-4 md:px-24 mt-12 sm:text-2xl text-4xl justify-between">
        <Link href={"/employee/employeeLists"}>
          <button
            title="List of all employees"
            className="border-2 hover:bg-slate-100 flex gap-3 border-purple-900 rounded-xl p-2 bg-green-200"
          >
            View employees <GrView className="mt-3 sm:mt-1 font-bold text-2xl" />
          </button>
        </Link>

        <Link href={"/employee/addEmployee"}>
          <button
            title="Add a employees"
            className="border-2 p-2 hover:bg-slate-100 border-purple-900 rounded-xl bg-orange-200"
          >
            Add employees +
          </button>
        </Link>
      </div>
    </div>
  );
}
