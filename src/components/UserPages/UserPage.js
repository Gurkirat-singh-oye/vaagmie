import { motion } from "framer-motion";

export default function UserPage() {
  return (
    <div className="bg-[#F5F5FA] min-h-screen flex flex-col items-center">
      {/* Header */}
      <header className="py-6 w-full bg-[#F5F5FA] text-center">
        <h1 className="text-2xl font-semibold text-gray-800">User Profile</h1>
      </header>

      {/* Profile Section */}
      <motion.div
        className="mt-8 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-36 h-36 rounded-full bg-gray-300 mx-auto"></div>
        <h2 className="mt-4 text-xl font-semibold text-gray-800">Jane Doe</h2>
        <p className="text-sm text-gray-500">@janedoe</p>
      </motion.div>

      {/* Details Section */}
      <motion.div
        className="mt-6 w-11/12 md:w-2/3 bg-white rounded-lg shadow p-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="border-b pb-4 mb-4">
          <p className="text-gray-600">Email:</p>
          <p className="font-medium text-gray-800">jane.doe@example.com</p>
        </div>
        <div>
          <p className="text-gray-600">Phone:</p>
          <p className="font-medium text-gray-800">+123 456 7890</p>
        </div>
      </motion.div>

      {/* Action Buttons */}
      <motion.div
        className="mt-6 flex space-x-4"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <button className="bg-[#E2523E] text-white px-6 py-2 rounded-md shadow hover:bg-red-600 transition">
          Edit Profile
        </button>
        <button className="border border-[#E2523E] text-[#E2523E] px-6 py-2 rounded-md shadow hover:bg-red-100 transition">
          Log Out
        </button>
      </motion.div>
    </div>
  );
}
