
export type EnergySource = {
    fuel: string;
    perc: number;
};

export type DailyMix = {
    date: string;
    averageUse: Record<string, number>;
    cleanPerc: number;
}

export type GenerationalResponse =
    DailyMix[];


export type ChargingWindowResponse = {
    start: string;
    end: string;
    cleanPerc: number;
}