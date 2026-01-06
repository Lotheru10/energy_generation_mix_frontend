import type {ChargingWindowResponse} from "../types/types.tsx";

type Props = {data:ChargingWindowResponse}

export default function ChargingResult({data}: Props){
    return(
        <div>
            <p>Start: {data.start.slice(0, 10)} {data.start.slice(11, 16)}</p>
            <p>End: {data.end.slice(0, 10)} {data.end.slice(11, 16)}</p>
            <p>Clean percentage: {data.cleanPerc.toFixed(2)}</p>
        </div>
    )
}