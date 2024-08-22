interface ScoreInterface {
    score: string;
    description: string;
}

export default function Score({score, description}: ScoreInterface) {
    return(
        <div className="flex flex-col justify-center items-center gap-2">
            <p className="text-4xl lg:text-6xl font-bold text-white">{score}</p>
            <p className="text-xs lg:text-sm text-[#B7B4BB]">{description}</p>
        </div>
    )
}