import {useEffect, useState} from "react";
import type {GenerationalResponse} from "../types/types.tsx";
import {getGenerationMix} from "../api/api.tsx";
import EnergyCharts from "../components/EnergyCharts.tsx";

export default function GenerationPage(){
    const[data, setData] =useState<GenerationalResponse | null >(null)
    const [error, setError] = useState("");

    useEffect(() =>{
        getGenerationMix()
            .then(setData)
            .catch(() => setError("Error downloading mix"));
    }, []);

    console.log("energy response", data);
    return(
    <div>
            <h2>Energy generation mix for the following days</h2>

            {error && <p>ERROR {error}</p>}
            {data && <EnergyCharts days={data}/>}
        </div>
    )
}