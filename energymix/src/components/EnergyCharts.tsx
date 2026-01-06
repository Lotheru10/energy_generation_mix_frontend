import { PieChart, Pie, Legend, ResponsiveContainer, Cell } from "recharts";
import type {GenerationalResponse} from "../types/types";

type Props = { days?: GenerationalResponse };

const COLORS: Record<string, string> = {
    hydro: "aqua",
    wind: "royalblue",
    solar: "gold",
    biomass: "forestgreen",
    nuclear: "darkorange",
    gas: "mediumpurple",
    coal: "slategray",
    imports: "#b7c1c3",
    other: "lavender",
};

function getColor(name: string) {
    return COLORS[name];
}

function toPieData(avg: Record<string, number>) {
    return Object.entries(avg).map(([fuel, perc]) => ({
        fuel,
        perc: Number(perc),
    }));
}

export default function EnergyCharts({ days = [] }: Props) {
    return (
        <div>
            {days.map((d) => {
                const pieData = toPieData(d.averageUse);
                return (
                    <div key={d.date} style={{padding: 1, float: "left", margin:10 }}>
                        <div>
                            <h3>{d.date.slice(0, 10)}</h3>
                        </div>
                        <div style={{ height: 300, width: 320}}>
                            <ResponsiveContainer>
                                <PieChart>
                                    <Pie data={pieData} dataKey="perc" nameKey="fuel">
                                        {pieData.map((s) => (
                                            <Cell key={s.fuel} fill={getColor(s.fuel)} />
                                        ))}
                                    </Pie>
                                    <Legend />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                        <p><b>Clean energy percentage: {d.cleanPerc.toFixed(2)}%</b></p>

                    </div>
                );
            })}
        </div>
    );
}
