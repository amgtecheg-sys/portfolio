import React from "react";
import { motion } from "framer-motion";

const EmptyState = ({ label, color }) => (
  <motion.div
    className="flex flex-col items-center justify-center py-24 text-center col-span-3"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
  >
    <div
      className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
      style={{ background: `${color}10`, border: `1px solid ${color}20` }}
    >
      <span className="text-xl">🚧</span>
    </div>
    <p className="text-gray-600 text-sm font-medium">{label} projects coming soon</p>
  </motion.div>
);

export default EmptyState;
