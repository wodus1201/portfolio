"use client";

import { useEffect, useState } from "react";
import { AlertTriangleIcon } from "lucide-react";

interface VisitorStats {
  todayVisitors: number;
  totalVisitors: number;
  lastUpdated: string;
  isDummyData?: boolean;
}

export default function VisitorStats() {
  const [stats, setStats] = useState<VisitorStats | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch("/api/analytics");
        if (!response.ok) {
          throw new Error("Failed to fetch visitor stats");
        }
        const data = await response.json();

        if (data.error) {
          throw new Error(data.message || "방문자 통계를 불러올 수 없습니다");
        }

        setStats(data);
        setError(null);
      } catch (err) {
        setError("방문자 통계를 불러올 수 없습니다");
        console.error("Visitor stats error:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchStats();

    const interval = setInterval(fetchStats, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  if (isLoading) {
    return (
      <div className="w-[20vw] h-[2.5vw] flex items-center justify-center">
        <div className="flex items-center">
          <div className="flex items-center gap-[1vw]">
            <div className="flex flex-row items-center gap-[1vw]">
              <p className="text-[1vw] text-gray-500">총 방문자 수</p>
              <p className="w-[1.1vw] h-[1.1vw] rounded-[30%] bg-custom-400 animate-pulse"></p>
            </div>

            <div className="w-[0.1vw] h-[1.5vw] bg-gray-200"></div>

            <div className="flex flex-row items-center gap-[1vw]">
              <p className="text-[1vw] text-gray-500">오늘 방문자 수</p>
              <p className="w-[1.1vw] h-[1.1vw] rounded-[30%] bg-custom-400 animate-pulse"></p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !stats) {
    return (
      <div className="w-[20vw] h-[2.5vw] flex items-center justify-center gap-[0.5vw]">
        <AlertTriangleIcon className="w-[1.5vw] h-[1.5vw] text-yellow-400" />
        <p className="text-[1vw] text-gray-500">방문자 통계를 불러올 수 없습니다.</p>
      </div>
    );
  }

  return (
    <div className="w-[20vw] h-[2.5vw] flex items-center justify-center">
      <div className="flex items-center">
        <div className="flex items-center gap-[1vw]">
          <div className="flex flex-row items-center gap-[1vw]">
            <p className="text-[1vw] text-gray-500">총 방문자 수</p>
            <p className="w-[1.1vw] h-[1.1vw flex items-center justify-center text-[1.1vw] font-bold text-gray-900">
              {stats.totalVisitors.toLocaleString()}
            </p>
          </div>

          <div className="w-[0.1vw] h-[1.5vw] bg-gray-200"></div>

          <div className="flex flex-row items-center gap-[1vw]">
            <p className="text-[1vw] text-gray-500">오늘 방문자 수</p>
            <p className="w-[1.1vw] h-[1.1vw flex items-center justify-center text-[1.1vw] font-bold text-gray-900">
              {stats.todayVisitors.toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
