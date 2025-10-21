"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts"
import { TrendingUp } from "lucide-react"

// Monthly cumulative data for all sports
const monthlyData = [
  { month: "Feb", AFL: 4.71, NBA: 6.49, NRL: -0.52, Soccer: -5, Tennis: 3.51, NFL: 1.4, Horses: 0, MLB: 0 },
  { month: "Mar", AFL: 9.71, NBA: 33.32, NRL: 5.19, Soccer: -5.93, Tennis: 5.1, NFL: 1.4, Horses: 1.28, MLB: 0 },
  {
    month: "Apr",
    AFL: 23.68,
    NBA: 51.12,
    NRL: 13.93,
    Soccer: -17.32,
    Tennis: 5.13,
    NFL: 1.4,
    Horses: 1.28,
    MLB: -3.92,
  },
  {
    month: "May",
    AFL: 26.35,
    NBA: 78.76,
    NRL: 23.19,
    Soccer: -20.51,
    Tennis: 3.71,
    NFL: 1.4,
    Horses: 1.28,
    MLB: -2.58,
  },
  {
    month: "Jun",
    AFL: 64.4,
    NBA: 120.01,
    NRL: 21.95,
    Soccer: -19.27,
    Tennis: 3.35,
    NFL: 1.4,
    Horses: 1.28,
    MLB: -5.03,
  },
  {
    month: "Jul",
    AFL: 107.56,
    NBA: 150.01,
    NRL: 17.16,
    Soccer: -19.27,
    Tennis: 9.73,
    NFL: 1.4,
    Horses: 2.51,
    MLB: -5.03,
  },
  {
    month: "Aug",
    AFL: 100.21,
    NBA: 175.5,
    NRL: 8.07,
    Soccer: -22.55,
    Tennis: 5.83,
    NFL: 1.4,
    Horses: 4.73,
    MLB: -5.15,
  },
  {
    month: "Sep",
    AFL: 103.29,
    NBA: 195.2,
    NRL: 19.4,
    Soccer: -32.44,
    Tennis: 4.12,
    NFL: 10.36,
    Horses: 19.59,
    MLB: -5.15,
  },
  {
    month: "Oct",
    AFL: 103.29,
    NBA: 204.7,
    NRL: 25.8,
    Soccer: -33.32,
    Tennis: -1.08,
    NFL: 11.08,
    Horses: 33.91,
    MLB: -5.15,
  },
]

// Overall performance data
const overallData = [
  { sport: "🏀 NBA", units: 204.7, roi: 52, color: "rgb(251, 191, 36)" },
  { sport: "🏈 AFL", units: 103.29, roi: 68, color: "rgb(34, 211, 238)" },
  { sport: "🐎 Horses", units: 33.91, roi: 77, color: "rgb(167, 139, 250)" },
  { sport: "🏉 NRL", units: 25.8, roi: 42, color: "rgb(52, 211, 153)" },
  { sport: "🏈 NFL", units: 11.08, roi: 38, color: "hsl(var(--chart-3))" },
  { sport: "🏀 NBL", units: 7.72, roi: 35, color: "hsl(var(--chart-4))" },
  { sport: "🏎️ F1", units: 2.5, roi: 28, color: "hsl(var(--chart-5))" },
]

// Individual sport data for interactive selection
const sportDetailData = {
  NBA: [
    { month: "Feb", units: 6.49 },
    { month: "Mar", units: 33.32 },
    { month: "Apr", units: 51.12 },
    { month: "May", units: 78.76 },
    { month: "Jun", units: 120.01 },
    { month: "Jul", units: 150.01 },
    { month: "Aug", units: 175.5 },
    { month: "Sep", units: 195.2 },
    { month: "Oct", units: 204.7 },
  ],
  AFL: [
    { month: "Feb", units: 4.71 },
    { month: "Mar", units: 9.71 },
    { month: "Apr", units: 23.68 },
    { month: "May", units: 26.35 },
    { month: "Jun", units: 64.4 },
    { month: "Jul", units: 107.56 },
    { month: "Aug", units: 100.21 },
    { month: "Sep", units: 103.29 },
    { month: "Oct", units: 103.29 },
  ],
  Horses: [
    { month: "Feb", units: 0 },
    { month: "Mar", units: 1.28 },
    { month: "Apr", units: 1.28 },
    { month: "May", units: 1.28 },
    { month: "Jun", units: 1.28 },
    { month: "Jul", units: 2.51 },
    { month: "Aug", units: 4.73 },
    { month: "Sep", units: 19.59 },
    { month: "Oct", units: 33.91 },
  ],
  NRL: [
    { month: "Feb", units: -0.52 },
    { month: "Mar", units: 5.19 },
    { month: "Apr", units: 13.93 },
    { month: "May", units: 23.19 },
    { month: "Jun", units: 21.95 },
    { month: "Jul", units: 17.16 },
    { month: "Aug", units: 8.07 },
    { month: "Sep", units: 19.4 },
    { month: "Oct", units: 25.8 },
  ],
  NFL: [
    { month: "Feb", units: 1.4 },
    { month: "Mar", units: 1.4 },
    { month: "Apr", units: 1.4 },
    { month: "May", units: 1.4 },
    { month: "Jun", units: 1.4 },
    { month: "Jul", units: 1.4 },
    { month: "Aug", units: 1.4 },
    { month: "Sep", units: 10.36 },
    { month: "Oct", units: 11.08 },
  ],
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-slate-900/98 backdrop-blur-md border-2 border-cyan-400/40 rounded-xl p-4 shadow-2xl">
        <p className="font-display font-semibold text-base mb-3 text-white">{label}</p>
        {payload.map((entry: any, index: number) => (
          <div key={index} className="flex items-center justify-between gap-6 text-sm mb-1.5">
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full shadow-lg" style={{ backgroundColor: entry.color }} />
              <span className="text-slate-300 font-medium">{entry.name}:</span>
            </span>
            <span className={`font-bold text-base ${entry.value >= 0 ? "text-cyan-400" : "text-red-400"}`}>
              {entry.value >= 0 ? "+" : ""}
              {entry.value.toFixed(2)}U
            </span>
          </div>
        ))}
      </div>
    )
  }
  return null
}

const OverallTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload
    return (
      <div className="bg-slate-900/98 backdrop-blur-md border-2 border-cyan-400/40 rounded-xl p-5 shadow-2xl">
        <p className="font-display font-semibold text-xl mb-3 text-white">{data.sport}</p>
        <div className="space-y-2">
          <p className="text-base">
            <span className="text-slate-300">Profit:</span>{" "}
            <span className="font-bold text-cyan-400 text-lg">+{data.units.toFixed(2)} Units</span>
          </p>
          <p className="text-base">
            <span className="text-slate-300">ROI:</span>{" "}
            <span className="font-bold text-amber-400 text-lg">{data.roi}%</span>
          </p>
        </div>
      </div>
    )
  }
  return null
}

const SportDetailTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-slate-900/98 backdrop-blur-md border-2 border-cyan-400/40 rounded-xl p-4 shadow-2xl">
        <p className="font-display font-semibold text-base mb-2 text-white">{label}</p>
        <p className="text-base">
          <span className="text-slate-300">Units:</span>{" "}
          <span className={`font-bold text-lg ${payload[0].value >= 0 ? "text-cyan-400" : "text-red-400"}`}>
            {payload[0].value >= 0 ? "+" : ""}
            {payload[0].value.toFixed(2)}U
          </span>
        </p>
      </div>
    )
  }
  return null
}

export function PerformanceCharts() {
  const [activeView, setActiveView] = useState<"monthly" | "overall" | "sport-detail">("overall")
  const [selectedSport, setSelectedSport] = useState<keyof typeof sportDetailData>("NBA")

  return (
    <section id="performance" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950" />

      <div className="container relative mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold mb-4 text-balance">
            Transparent Performance Data
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Real results, real profits. Track every unit across all sports with complete transparency.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <Tabs value={activeView} onValueChange={(v) => setActiveView(v as any)} className="w-full">
            <TabsList className="grid w-full max-w-3xl mx-auto grid-cols-3 mb-8 h-12 bg-slate-800/80 backdrop-blur-sm border border-cyan-500/20">
              <TabsTrigger
                value="overall"
                className="font-display font-semibold data-[state=active]:bg-cyan-500 data-[state=active]:text-slate-950"
              >
                Overall Performance
              </TabsTrigger>
              <TabsTrigger
                value="sport-detail"
                className="font-display font-semibold data-[state=active]:bg-cyan-500 data-[state=active]:text-slate-950"
              >
                Sport Details
              </TabsTrigger>
              <TabsTrigger
                value="monthly"
                className="font-display font-semibold data-[state=active]:bg-cyan-500 data-[state=active]:text-slate-950"
              >
                Monthly Breakdown
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overall" className="animate-fade-in">
              <Card className="border-2 border-cyan-500/30 bg-slate-900/80 backdrop-blur-md shadow-2xl shadow-cyan-500/10">
                <CardHeader>
                  <CardTitle className="font-display text-2xl md:text-3xl text-white">
                    Overall Sport Performance
                  </CardTitle>
                  <CardDescription className="text-base text-slate-300">
                    Total units profit and ROI by sport - hover for details
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={450}>
                    <BarChart data={overallData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(148, 163, 184, 0.2)" />
                      <XAxis
                        dataKey="sport"
                        className="text-sm"
                        tick={{ fill: "rgb(203, 213, 225)", fontSize: 13 }}
                        axisLine={{ stroke: "rgb(148, 163, 184)" }}
                      />
                      <YAxis
                        className="text-sm"
                        tick={{ fill: "rgb(203, 213, 225)", fontSize: 13 }}
                        axisLine={{ stroke: "rgb(148, 163, 184)" }}
                        label={{ value: "Units", angle: -90, position: "insideLeft", fill: "rgb(203, 213, 225)" }}
                      />
                      <Tooltip content={<OverallTooltip />} cursor={{ fill: "rgba(6, 182, 212, 0.1)" }} />
                      <Bar
                        dataKey="units"
                        fill="rgb(34, 211, 238)"
                        radius={[8, 8, 0, 0]}
                        animationDuration={1000}
                        animationBegin={200}
                      />
                    </BarChart>
                  </ResponsiveContainer>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                    <div className="p-6 bg-gradient-to-br from-amber-500/20 to-amber-600/10 rounded-xl border-2 border-amber-400/30 shadow-lg shadow-amber-500/10">
                      <div className="flex items-center gap-2 mb-2">
                        <TrendingUp className="w-5 h-5 text-amber-400" />
                        <p className="text-sm font-medium text-slate-300">Top Performer</p>
                      </div>
                      <p className="text-3xl font-display font-bold text-amber-400">NBA</p>
                      <p className="text-sm text-slate-400 mt-1">+204.7 Units</p>
                    </div>

                    <div className="p-6 bg-gradient-to-br from-purple-500/20 to-purple-600/10 rounded-xl border-2 border-purple-400/30 shadow-lg shadow-purple-500/10">
                      <div className="flex items-center gap-2 mb-2">
                        <TrendingUp className="w-5 h-5 text-purple-400" />
                        <p className="text-sm font-medium text-slate-300">Best ROI</p>
                      </div>
                      <p className="text-3xl font-display font-bold text-purple-400">Horses</p>
                      <p className="text-sm text-slate-400 mt-1">77% ROI</p>
                    </div>

                    <div className="p-6 bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 rounded-xl border-2 border-emerald-400/30 shadow-lg shadow-emerald-500/10">
                      <div className="flex items-center gap-2 mb-2">
                        <TrendingUp className="w-5 h-5 text-emerald-400" />
                        <p className="text-sm font-medium text-slate-300">Total Profit</p>
                      </div>
                      <p className="text-3xl font-display font-bold text-emerald-400">+385.5U</p>
                      <p className="text-sm text-slate-400 mt-1">Across all sports</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="sport-detail" className="animate-fade-in">
              <Card className="border-2 border-cyan-500/30 bg-slate-900/80 backdrop-blur-md shadow-2xl shadow-cyan-500/10">
                <CardHeader>
                  <CardTitle className="font-display text-2xl md:text-3xl text-white">
                    Individual Sport Performance
                  </CardTitle>
                  <CardDescription className="text-base text-slate-300">
                    Select a sport to view detailed monthly progression
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3 mb-8 justify-center">
                    {(Object.keys(sportDetailData) as Array<keyof typeof sportDetailData>).map((sport) => (
                      <button
                        key={sport}
                        onClick={() => setSelectedSport(sport)}
                        className={`px-6 py-3 rounded-xl font-display font-semibold transition-all duration-300 ${
                          selectedSport === sport
                            ? "bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/50 scale-105"
                            : "bg-slate-800/60 text-slate-300 hover:bg-slate-700/60 border border-cyan-500/20"
                        }`}
                      >
                        {sport === "NBA" && "🏀 NBA"}
                        {sport === "AFL" && "🏈 AFL"}
                        {sport === "Horses" && "🐎 Horses"}
                        {sport === "NRL" && "🏉 NRL"}
                        {sport === "NFL" && "🏈 NFL"}
                      </button>
                    ))}
                  </div>

                  <ResponsiveContainer width="100%" height={450}>
                    <AreaChart
                      data={sportDetailData[selectedSport]}
                      margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                    >
                      <defs>
                        <linearGradient id="sportGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="rgb(34, 211, 238)" stopOpacity={0.5} />
                          <stop offset="95%" stopColor="rgb(34, 211, 238)" stopOpacity={0.05} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(148, 163, 184, 0.2)" />
                      <XAxis
                        dataKey="month"
                        className="text-sm"
                        tick={{ fill: "rgb(203, 213, 225)", fontSize: 13 }}
                        axisLine={{ stroke: "rgb(148, 163, 184)" }}
                      />
                      <YAxis
                        className="text-sm"
                        tick={{ fill: "rgb(203, 213, 225)", fontSize: 13 }}
                        axisLine={{ stroke: "rgb(148, 163, 184)" }}
                        label={{
                          value: "Cumulative Units",
                          angle: -90,
                          position: "insideLeft",
                          fill: "rgb(203, 213, 225)",
                        }}
                      />
                      <Tooltip content={<SportDetailTooltip />} />
                      <Area
                        type="monotone"
                        dataKey="units"
                        stroke="rgb(34, 211, 238)"
                        strokeWidth={4}
                        fill="url(#sportGradient)"
                        animationDuration={800}
                      />
                    </AreaChart>
                  </ResponsiveContainer>

                  <div className="mt-8 p-6 bg-slate-800/60 rounded-xl border border-cyan-500/20">
                    <h4 className="font-display font-semibold text-lg mb-3 text-white">
                      {selectedSport} Performance Summary
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <p className="text-sm text-slate-400">Total Profit</p>
                        <p className="text-2xl font-display font-bold text-cyan-400">
                          +{sportDetailData[selectedSport][sportDetailData[selectedSport].length - 1].units.toFixed(2)}U
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-slate-400">Best Month</p>
                        <p className="text-2xl font-display font-bold text-amber-400">
                          {
                            sportDetailData[selectedSport].reduce((max, curr) => (curr.units > max.units ? curr : max))
                              .month
                          }
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-slate-400">ROI</p>
                        <p className="text-2xl font-display font-bold text-emerald-400">
                          {overallData.find((s) => s.sport.includes(selectedSport))?.roi}%
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="monthly" className="animate-fade-in">
              <Card className="border-2 border-cyan-500/30 bg-slate-900/80 backdrop-blur-md shadow-2xl shadow-cyan-500/10">
                <CardHeader>
                  <CardTitle className="font-display text-2xl md:text-3xl text-white">
                    Monthly Performance Tracking
                  </CardTitle>
                  <CardDescription className="text-base text-slate-300">
                    Cumulative units profit by sport over time - hover to see exact values
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={500}>
                    <AreaChart data={monthlyData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                      <defs>
                        <linearGradient id="colorAFL" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="rgb(34, 211, 238)" stopOpacity={0.4} />
                          <stop offset="95%" stopColor="rgb(34, 211, 238)" stopOpacity={0.05} />
                        </linearGradient>
                        <linearGradient id="colorNBA" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="rgb(251, 191, 36)" stopOpacity={0.4} />
                          <stop offset="95%" stopColor="rgb(251, 191, 36)" stopOpacity={0.05} />
                        </linearGradient>
                        <linearGradient id="colorHorses" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="rgb(167, 139, 250)" stopOpacity={0.4} />
                          <stop offset="95%" stopColor="rgb(167, 139, 250)" stopOpacity={0.05} />
                        </linearGradient>
                        <linearGradient id="colorNRL" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="rgb(52, 211, 153)" stopOpacity={0.4} />
                          <stop offset="95%" stopColor="rgb(52, 211, 153)" stopOpacity={0.05} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(148, 163, 184, 0.2)" />
                      <XAxis
                        dataKey="month"
                        className="text-sm"
                        tick={{ fill: "rgb(203, 213, 225)", fontSize: 13 }}
                        axisLine={{ stroke: "rgb(148, 163, 184)" }}
                      />
                      <YAxis
                        className="text-sm"
                        tick={{ fill: "rgb(203, 213, 225)", fontSize: 13 }}
                        axisLine={{ stroke: "rgb(148, 163, 184)" }}
                        label={{
                          value: "Cumulative Units",
                          angle: -90,
                          position: "insideLeft",
                          fill: "rgb(203, 213, 225)",
                        }}
                      />
                      <Tooltip content={<CustomTooltip />} />
                      <Legend
                        wrapperStyle={{ paddingTop: "20px" }}
                        iconType="circle"
                        formatter={(value) => <span className="text-sm font-medium text-slate-200">{value}</span>}
                      />
                      <Area
                        type="monotone"
                        dataKey="NBA"
                        stroke="rgb(251, 191, 36)"
                        strokeWidth={4}
                        fill="url(#colorNBA)"
                        animationDuration={1000}
                      />
                      <Area
                        type="monotone"
                        dataKey="AFL"
                        stroke="rgb(34, 211, 238)"
                        strokeWidth={3}
                        fill="url(#colorAFL)"
                        animationDuration={1000}
                        animationBegin={200}
                      />
                      <Area
                        type="monotone"
                        dataKey="Horses"
                        stroke="rgb(167, 139, 250)"
                        strokeWidth={3}
                        fill="url(#colorHorses)"
                        animationDuration={1000}
                        animationBegin={400}
                      />
                      <Area
                        type="monotone"
                        dataKey="NRL"
                        stroke="rgb(52, 211, 153)"
                        strokeWidth={3}
                        fill="url(#colorNRL)"
                        animationDuration={1000}
                        animationBegin={600}
                      />
                    </AreaChart>
                  </ResponsiveContainer>

                  <div className="mt-8 p-6 bg-slate-800/60 rounded-xl border border-cyan-500/20">
                    <h4 className="font-display font-semibold text-lg mb-4 text-white">Key Highlights</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-amber-400 mt-1.5 shadow-lg shadow-amber-400/50" />
                        <div>
                          <p className="font-semibold text-white">NBA season dominance</p>
                          <p className="text-slate-400">+204.7U total profit</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-cyan-400 mt-1.5 shadow-lg shadow-cyan-400/50" />
                        <div>
                          <p className="font-semibold text-white">AFL dominated July</p>
                          <p className="text-slate-400">+43.16U in a single month</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-purple-400 mt-1.5 shadow-lg shadow-purple-400/50" />
                        <div>
                          <p className="font-semibold text-white">Horses never negative</p>
                          <p className="text-slate-400">7 straight profitable weeks</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-emerald-400 mt-1.5 shadow-lg shadow-emerald-400/50" />
                        <div>
                          <p className="font-semibold text-white">Consistent growth</p>
                          <p className="text-slate-400">Positive trend across top sports</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}
