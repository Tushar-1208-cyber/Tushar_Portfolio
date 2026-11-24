import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const revalidate = 60;

interface LeetCodeMetric {
  totalSolved: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  ranking: string;
  rating: number | null;
  status: string;
}

interface GitHubMetric {
  publicRepos: number;
  totalContributions: number;
  streak: number;
  followers: number;
  status: string;
}

export async function GET() {
  const leetcode: LeetCodeMetric = {
    totalSolved: 229,
    easySolved: 144,
    mediumSolved: 82,
    hardSolved: 3,
    ranking: "751,561",
    rating: null,
    status: "live"
  };

  const github: GitHubMetric = {
    publicRepos: 30,
    totalContributions: 1719,
    streak: 25,
    followers: 2,
    status: "live"
  };

  // 1. Fetch live LeetCode stats
  try {
    const lcRes = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Referer": "https://leetcode.com",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"
      },
      body: JSON.stringify({
        query: `
          query getUserProfile($username: String!) {
            matchedUser(username: $username) {
              submitStatsGlobal {
                acSubmissionNum {
                  difficulty
                  count
                }
              }
              profile {
                ranking
              }
            }
            userContestRanking(username: $username) {
              rating
              topPercentage
            }
          }
        `,
        variables: { username: "tushargupta1208" }
      }),
      signal: AbortSignal.timeout(6000)
    });

    if (lcRes.ok) {
      const json = await lcRes.json();
      const user = json?.data?.matchedUser;
      if (user?.submitStatsGlobal?.acSubmissionNum) {
        const stats = user.submitStatsGlobal.acSubmissionNum;
        const all = stats.find((s: { difficulty: string; count: number }) => s.difficulty === "All")?.count;
        const easy = stats.find((s: { difficulty: string; count: number }) => s.difficulty === "Easy")?.count;
        const med = stats.find((s: { difficulty: string; count: number }) => s.difficulty === "Medium")?.count;
        const hard = stats.find((s: { difficulty: string; count: number }) => s.difficulty === "Hard")?.count;
        if (typeof all === "number") leetcode.totalSolved = all;
        if (typeof easy === "number") leetcode.easySolved = easy;
        if (typeof med === "number") leetcode.mediumSolved = med;
        if (typeof hard === "number") leetcode.hardSolved = hard;
      }
      if (user?.profile?.ranking) {
        leetcode.ranking = Number(user.profile.ranking).toLocaleString();
      }
      if (json?.data?.userContestRanking?.rating) {
        leetcode.rating = Math.round(json.data.userContestRanking.rating);
      }
    } else {
      // Fallback to secondary API
      const fallbackRes = await fetch("https://alfa-leetcode-api.onrender.com/userProfile/tushargupta1208", {
        signal: AbortSignal.timeout(6000)
      });
      if (fallbackRes.ok) {
        const data = await fallbackRes.json();
        if (typeof data.totalSolved === "number") leetcode.totalSolved = data.totalSolved;
        if (typeof data.easySolved === "number") leetcode.easySolved = data.easySolved;
        if (typeof data.mediumSolved === "number") leetcode.mediumSolved = data.mediumSolved;
        if (typeof data.hardSolved === "number") leetcode.hardSolved = data.hardSolved;
        if (data.ranking) leetcode.ranking = Number(data.ranking).toLocaleString();
      }
    }
  } catch (e) {
    console.error("LeetCode fetch error, using resilient cache:", e);
  }

  // 2. Fetch live GitHub stats
  try {
    const [userRes, contribRes] = await Promise.allSettled([
      fetch("https://api.github.com/users/Tushar-1208-cyber", {
        headers: { "User-Agent": "Portfolio-Tushar" },
        signal: AbortSignal.timeout(6000)
      }),
      fetch("https://github-contributions-api.jogruber.de/v4/Tushar-1208-cyber?y=last", {
        signal: AbortSignal.timeout(6000)
      })
    ]);

    if (userRes.status === "fulfilled" && userRes.value.ok) {
      const uData = await userRes.value.json();
      if (typeof uData.public_repos === "number") github.publicRepos = uData.public_repos;
      if (typeof uData.followers === "number") github.followers = uData.followers;
    }

    if (contribRes.status === "fulfilled" && contribRes.value.ok) {
      const cData = await contribRes.value.json();
      if (cData?.total?.lastYear) {
        github.totalContributions = cData.total.lastYear;
      }
      const days = cData?.contributions || [];
      let maxStreak = 0;
      let streak = 0;
      for (const day of days) {
        if (day.count > 0) {
          streak++;
          if (streak > maxStreak) maxStreak = streak;
        } else {
          streak = 0;
        }
      }
      if (maxStreak > 0) github.streak = maxStreak;
    }
  } catch (e) {
    console.error("GitHub fetch error, using resilient cache:", e);
  }

  return NextResponse.json(
    {
      leetcode,
      github,
      syncedAt: new Date().toISOString()
    },
    {
      headers: {
        "Cache-Control": "public, s-maxage=60, stale-while-revalidate=120"
      }
    }
  );
}
