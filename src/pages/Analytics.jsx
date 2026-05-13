import React, { useContext } from "react";
import { CaseContext } from "../context/Casecontext";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  AreaChart,
  Area,
  CartesianGrid,
  Legend
} from "recharts";
import "./Analytics.css";

const Analytics = () => {
  const { cases } = useContext(CaseContext);

  const completed = cases.filter(c => c.completed).length;
  const pending = cases.filter(c => !c.completed).length;

  const pieData = [
    { name: "Completed", value: completed },
    { name: "Pending", value: pending }
  ];

  const COLORS = ["#22c55e", "#ef4444"];

  // Fake monthly data (you can later connect real data)
  const monthlyData = [
    { month: "Jan", cases: 4 },
    { month: "Feb", cases: 6 },
    { month: "Mar", cases: 8 },
    { month: "Apr", cases: 5 },
    { month: "May", cases: 9 },
    { month: "Jun", cases: 7 },
  ];

  return (
    <div className="analytics-page">
      <h2>📊 Case Analytics Dashboard</h2>

      <div className="charts-grid">

        {/* Pie Chart */}
        <div className="chart-card">
          <h3>Status Distribution</h3>
          <ResponsiveContainer width="100%" height={280}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                outerRadius={90}
                label
              >
                {pieData.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart */}
        <div className="chart-card">
          <h3>Cases Overview</h3>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={pieData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#2563eb" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Line Chart */}
        <div className="chart-card">
          <h3>Monthly Growth</h3>
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="cases"
                stroke="#22c55e"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Area Chart */}
        <div className="chart-card">
          <h3>Case Trend</h3>
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="cases"
                stroke="#ef4444"
                fill="#fecaca"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

      </div>
    </div>
  );
};

export default Analytics;
