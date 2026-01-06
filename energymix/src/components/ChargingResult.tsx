import type {ChargingWindowResponse} from "../types/types.tsx";
import "../css/EnergyCharts.css"

type Props = {data:ChargingWindowResponse}

export default function ChargingResult({data}: Props){
    return(
        <div>
            <h3>Best time to charge your car:</h3>
            <p>Start: {data.start.slice(0, 10)} {data.start.slice(11, 16)}</p>
            <p>End: {data.end.slice(0, 10)} {data.end.slice(11, 16)}</p>
            <p>Clean percentage: <b>{data.cleanPerc.toFixed(2)}%</b></p>
        </div>
    )
}