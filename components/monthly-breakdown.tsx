"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Line, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts"

const monthlyData = {
  afl: [
    { month: "Feb", units: 4.71 },
    { month: "Mar", units: 5.0 },
    { month: "Apr", units: 13.97 },
    { month: "May", units: 2.67 },
    { month: "Jun", units: 38.05 },
    { month: "Jul", units: 43.16 },
    { month: "Aug", units: -7.35 },
    { month: "Sep", units: 3.08 },
  ],
  nba: [
    { month: "Feb", units: 6.49 },
    { month: "Mar", units: 26.83 },
    { month: "Apr", units: 17.8 },
    { month: "May", units: -2.36 },
    { month: "Jun", units: 1.25 },
  ],
  horses: [
    { month: "Jun", units: -2.74 },
    { month: "Jul", units: 1.23 },
    { month: "Aug", units: 2.22 },
    { month: "Sep", units: 14.86 },
    { month: "Oct", units: 14.32 },
  ],
  nrl: [
    { month: "Feb", units: -0.52 },
    { month: "Mar", units: 5.71 },
    { month: "Apr", units: 8.74 },
    { month: "May", units: 9.26 },
    { month: "Jun", units: -1.24 },
    { month: "Jul", units: -4.79 },
    { month: "Aug", units: -9.09 },
    { month: "Sep", units: 11.33 },
    { month: "Oct", units: 6.4 },
  ],
}

export function MonthlyBreakdown() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Monthly Performance Breakdown</h2>
          <p className="text-muted-foreground text-lg">Track our performance month by month across top sports</p>
        </div>

        <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Sport-by-Sport Analysis</CardTitle>
            <CardDescription>Select a sport to view monthly unit progression</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="afl" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
                <TabsTrigger value="afl">AFL</TabsTrigger>
                <TabsTrigger value="nba">NBA</TabsTrigger>
                <TabsTrigger value="horses">Horses</TabsTrigger>
                <TabsTrigger value="nrl">NRL</TabsTrigger>
              </TabsList>

              <TabsContent value="afl">
                <ResponsiveContainer width="100%" height={350}>
                  <LineChart data={monthlyData.afl} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
                    <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                    <YAxis stroke="hsl(var(--muted-foreground))" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "var(--radius)",
                        color: "hsl(var(--card-foreground))",
                      }}
                      formatter={(value: number) => [`${value > 0 ? "+" : ""}${value.toFixed(2)}U`, "Units"]}
                    />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="units"
                      stroke="hsl(var(--accent))"
                      strokeWidth={3}
                      dot={{ fill: "hsl(var(--accent))", r: 5 }}
                      name="AFL Units"
                    />
                  </LineChart>
                </ResponsiveContainer>
                <p className="text-center text-sm text-muted-foreground mt-4">
                  Total: <span className="text-accent font-semibold">+103.29U</span> • Peak month: July (+43.16U)
                </p>
              </TabsContent>

              <TabsContent value="nba">
                <ResponsiveContainer width="100%" height={350}>
                  <LineChart data={monthlyData.nba} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
                    <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                    <YAxis stroke="hsl(var(--muted-foreground))" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "var(--radius)",
                        color: "hsl(var(--card-foreground))",
                      }}
                      formatter={(value: number) => [`${value > 0 ? "+" : ""}${value.toFixed(2)}U`, "Units"]}
                    />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="units"
                      stroke="hsl(var(--primary))"
                      strokeWidth={3}
                      dot={{ fill: "hsl(var(--primary))", r: 5 }}
                      name="NBA Units"
                    />
                  </LineChart>
                </ResponsiveContainer>
                <p className="text-center text-sm text-muted-foreground mt-4">
                  Current Season: <span className="text-primary font-semibold">+50.01U</span> • Last Season:{" "}
                  <span className="text-accent font-semibold">+204.7U</span>
                </p>
              </TabsContent>

              <TabsContent value="horses">
                <ResponsiveContainer width="100%" height={350}>
                  <LineChart data={monthlyData.horses} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
                    <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                    <YAxis stroke="hsl(var(--muted-foreground))" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "var(--radius)",
                        color: "hsl(var(--card-foreground))",
                      }}
                      formatter={(value: number) => [`${value > 0 ? "+" : ""}${value.toFixed(2)}U`, "Units"]}
                    />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="units"
                      stroke="hsl(var(--accent))"
                      strokeWidth={3}
                      dot={{ fill: "hsl(var(--accent))", r: 5 }}
                      name="Horse Racing Units"
                    />
                  </LineChart>
                </ResponsiveContainer>
                <p className="text-center text-sm text-muted-foreground mt-4">
                  Total: <span className="text-accent font-semibold">+33.91U</span> • ROI:{" "}
                  <span className="text-accent font-semibold">77%</span> • 7 straight profitable weeks
                </p>
              </TabsContent>

              <TabsContent value="nrl">
                <ResponsiveContainer width="100%" height={350}>
                  <LineChart data={monthlyData.nrl} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
                    <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                    <YAxis stroke="hsl(var(--muted-foreground))" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "var(--radius)",
                        color: "hsl(var(--card-foreground))",
                      }}
                      formatter={(value: number) => [`${value > 0 ? "+" : ""}${value.toFixed(2)}U`, "Units"]}
                    />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="units"
                      stroke="hsl(var(--primary))"
                      strokeWidth={3}
                      dot={{ fill: "hsl(var(--primary))", r: 5 }}
                      name="NRL Units"
                    />
                  </LineChart>
                </ResponsiveContainer>
                <p className="text-center text-sm text-muted-foreground mt-4">
                  Total: <span className="text-primary font-semibold">+25.8U</span> • Strong finish in September
                </p>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
