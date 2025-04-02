import PhasesSeason from "../components/phases/PhasesSeason";
import Image from "next/image";

export default function Phases() {
    return (
        <div className="max-w-6xl mx-auto px-5 w-full mb-10">
            <PhasesSeason landing="default" />
        </div>
    );
}