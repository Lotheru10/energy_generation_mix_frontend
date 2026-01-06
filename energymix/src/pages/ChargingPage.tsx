import {useState} from "react";
import type {ChargingWindowResponse} from "../types/types.tsx";
import {getChargingWindow} from "../api/api.tsx";
import ChargingResult from "../components/ChargingResult.tsx";


export default function ChargingPage(){
    const [data, setData] = useState<ChargingWindowResponse | null>(null);
    const [error, setError] = useState("");
    const [length, setLength] = useState<number>(1);

    const handleSubmit = async (length: number) => {
        setData(null);
        setError("");

        try{
            const res = await getChargingWindow(length);
            setData(res);
        }
        catch {
            setError("Error loading charging window")
        }
    };
    return (
        <div>
            <h2>Check for the best window to charge your car in the following days!</h2>

            <p>For how long do you want to charge your car? (1-6 hours)</p>
            <input type = "number" min = {1} max = {6} value={length} onChange={(e) => setLength(Number(e.target.value))}/>
            <button
                onClick={() => void handleSubmit(length)}>
                Check
            </button>

            {error && <p>ERROR {error}</p>}
            {data && <ChargingResult data={data}/>}
        </div>
    );
}