import React, { useEffect, useState } from "react";

export default function ScrollProgressBar() {
  const [scrollPercent, setScrollPercent] = useState(0);

  // Update scroll percent on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollPercent(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative">
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div
          className="h-full bg-green-600 transition-all duration-150"
          style={{ width: `${scrollPercent}%` }}
        />
      </div>

      {/* Sample long content to scroll */}
      <div className="p-6 space-y-6 mt-4">
        {[...Array(50)].map((_, i) => (
          <div key={i} className="h-40 bg-gray-100 rounded-md shadow-sm p-4">
            <p className="text-lg font-semibold">Section {i + 1}</p>
            <p>This is some content...</p>
          </div>
        ))}
      </div>
    </div>
  );
}
