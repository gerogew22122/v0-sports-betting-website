"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts"

const overallData = [
  { sport: "AFL", units: 103.29 },
  { sport: "NBA", units: 50.01 },
  { sport: "Horses", units: 33.91 },
  { sport: "NRL", units: 25.8 },
  { sport: "NFL", units: 11.08 },
  { sport: "NBL", units: 7.72 },
  { sport: "F1", units: 2.5 },
  { sport: "Tennis", units: -1.08 },
  { sport: "UFC", units: -0.3 },
  { sport: "MLB", units: -5.15 },
  { sport: "Soccer", units: -20 }, // Adjusted as per notes
]

export function OverallPerformance() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-3xl font-bold">Overall Performance by Sport</CardTitle>
            <CardDescription className="text-base">Total units won/lost across all tracked sports</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={overallData} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
                <XAxis dataKey="sport" stroke="hsl(var(--muted-foreground))" angle={-45} textAnchor="end" height={80} />
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
                <Bar dataKey="units" radius={[8, 8, 0, 0]}>
                  {overallData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={entry.units >= 0 ? "hsl(var(--accent))" : "hsl(var(--destructive))"}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>

            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 rounded-lg bg-accent/10 border border-accent/20">
                <div className="text-2xl font-bold text-accent">+103.29U</div>
                <div className="text-sm text-muted-foreground">AFL Leader</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-accent/10 border border-accent/20">
                <div className="text-2xl font-bold text-accent">+50.01U</div>
                <div className="text-sm text-muted-foreground">NBA Current</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-primary/10 border border-primary/20">
                <div className="text-2xl font-bold text-primary">77%</div>
                <div className="text-sm text-muted-foreground">Horse ROI</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-primary/10 border border-primary/20">
                <div className="text-2xl font-bold text-primary">+204.7U</div>
                <div className="text-sm text-muted-foreground">NBA Season</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
