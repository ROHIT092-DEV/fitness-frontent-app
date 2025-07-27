import Dashboard from "@/components/admin/Dashboard";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* You can wrap with sidebar or navbar here if needed */}
      <Dashboard />
      {children}
    </div>
  );
}