import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const response = await fetch("https://api.vercel.com/v1/analytics", {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_VERCEL_TOKEN}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      console.error(`Vercel API error: ${response.status} ${response.statusText}`);
      throw new Error(`Failed to fetch analytics data: ${response.status}`);
    }

    const data = await response.json();
    console.log("Vercel API response:", data);

    const today = new Date().toISOString().split("T")[0];

    const todayVisitors =
      data.pageviews
        ?.filter((pv: any) => pv.date === today)
        .reduce((sum: number, pv: any) => sum + (pv.pageviews || 0), 0) || 0;

    const totalVisitors = data.pageviews?.reduce((sum: number, pv: any) => sum + (pv.pageviews || 0), 0) || 0;

    return NextResponse.json({
      todayVisitors,
      totalVisitors,
      lastUpdated: new Date().toISOString(),
      isDummyData: false,
    });
  } catch (error) {
    console.error("Analytics API error:", error);

    return NextResponse.json(
      {
        error: "Analytics data not available",
        message: "개발 환경에서는 방문자 통계를 불러올 수 없습니다",
      },
      { status: 503 }
    );
  }
}
