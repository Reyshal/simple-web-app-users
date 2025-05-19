"use client";

import UserChart from "@/components/UserChart";
import UserTable from "@/components/UserTable/UserTable";

export default function Users() {

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-2">List of Users</h1>
      <div className="my-4 flex flex-col gap-4 items-start">
        <UserChart />
        <UserTable />
      </div>
    </div>
  );
}