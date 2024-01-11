export default function QuizComponent() {
    return (
        <>
            <div className="home">
                <div className="whiteArea">
                    <div className="question">
                        Question
                    </div>

                    <div className="number">
                        1 of 15
                    </div>

                    <div className="questionText">
                        Which is the only mammal that can jump?
                    </div>

                    <div className="entire">
                        <div className="options">
                            <div className="part1">
                                <div className="option">Dog</div>
                                <div className="option">Elephant</div>
                            </div>
                            <div className="part2">
                                <div className="option">Goat</div>
                                <div className="option">Lion</div>
                            </div>
                        </div>
                    </div>

                    <div className="buttonArea">
                        <button className="buttonBlue buttons">Previous</button>
                        <button className="buttonGreen buttons">Next</button>
                        <button className="buttonRed buttons">Quit</button>
                    </div>
                </div>

            </div>
        </>
    )
}
