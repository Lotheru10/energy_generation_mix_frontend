import type {GenerationalResponse, ChargingWindowResponse} from "../types/types.tsx";

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8080";

async function get<T>(path:string): Promise<T> {
    const res = await fetch(`${BASE_URL}${path}`);

    if (!res.ok){
        throw new Error(`Api error: ${res.status}`);
    }
    return res.json();
}

export function getGenerationMix(): Promise<GenerationalResponse>{
    return get(`/api/mix3days`);
}

export function getChargingWindow(length: number): Promise<ChargingWindowResponse>{
    return get(`/api/charging/${length}`);
}