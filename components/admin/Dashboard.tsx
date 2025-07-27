import { Contact, Package } from "lucide-react";
import Link from "next/link";
import React from "react";

function Dashboard() {
  return (
   <div className="p-4 bg-gray-100 dark:bg-gray-900">
  <div className="flex items-center gap-6 overflow-x-auto">
    <Link
      href="/admin/usermanagement"
      className="flex items-center gap-2 px-4 py-2 rounded-md bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-pink-100 dark:hover:bg-gray-700 transition whitespace-nowrap shadow"
    >
      <Contact className="text-pink-500 w-5 h-5" />
      <span className="text-sm font-medium">User</span>
    </Link>
    <Link
      href="/admin/productmanagement"
      className="flex items-center gap-2 px-4 py-2 rounded-md bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-pink-100 dark:hover:bg-gray-700 transition whitespace-nowrap shadow"
    >
      <Package className="text-pink-500 w-5 h-5" />
      <span className="text-sm font-medium">Product</span>
    </Link>
  </div>
</div>


  );
}

export default Dashboard;
