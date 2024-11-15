import React, { useState } from 'react';
import './CompareInputs.css';

function CompareInputs() {
    const [inputText1, setInputText1] = useState('Line 1\nLine 2\nLine 3');
    const [inputText2, setInputText2] = useState('Line 3\nLine 1\nLine 4');
    const [comparisonResult, setComparisonResult] = useState([]);
    const [isFirstText, setIsFirstText] = useState(true); // State to toggle between inputText1 and inputText2

    const handleCompare = () => {
        // Toggle input based on the isFirstText state
        const lines1 = (isFirstText ? inputText1 : inputText2).split('\n').map(line => line.trim());
        const lines2 = (isFirstText ? inputText2 : inputText1).split('\n').map(line => line.trim());

        const result = [];

        lines1.forEach((line1) => {
            const matchingLine = lines2.find(line2 => line1 === line2);
            result.push({
                text1: line1,
                text2: matchingLine || '',
                isSame: matchingLine !== undefined,
            });
        });

        lines2.forEach((line2) => {
            if (!result.some(r => r.text2 === line2)) {
                result.push({
                    text1: '',
                    text2: line2,
                    isSame: false,
                });
            }
        });

        setComparisonResult(result);
    };

    const handleClear = () => {
        setInputText1('');
        setInputText2('');
        setComparisonResult([]);
    };

    const toggleText = () => {
        setIsFirstText(!isFirstText); // Toggle between first and second text
    };

    const handleSwitchTexts = () => {
        setInputText1(inputText2);
        setInputText2(inputText1);
    };

    return (
        <div className="compare-container">
            <h1 className="title">Text Comparison Tool</h1>
            <div className="input-area">
                <textarea
                    placeholder="Enter first text here..."
                    value={inputText1}
                    onChange={(e) => setInputText1(e.target.value)}
                    className="input-box"
                />
                <textarea
                    placeholder="Enter second text here..."
                    value={inputText2}
                    onChange={(e) => setInputText2(e.target.value)}
                    className="input-box"
                />
                <div className="button-group">
                    <button onClick={handleCompare} className="compare-btn">Compare!</button>
                    <button onClick={handleClear} className="clear-btn">Clear All</button>
                    <button onClick={handleSwitchTexts} className="switch-btn">Switch Texts</button>

                </div>
            </div>
            <div className="output-area">
                <div className="result-column">
                    <h2>First Input</h2>
                    {comparisonResult.map((line, index) => (
                        <div
                            key={index}
                            className={`result-line ${line.isSame ? 'same' : 'different'}`}
                        >
                            {line.text1 || ' '}
                        </div>
                    ))}
                </div>
                <div className="result-column">
                    <h2>Second Input</h2>
                    {comparisonResult.map((line, index) => (
                        <div
                            key={index}
                            className={`result-line ${line.isSame ? 'same' : 'different'}`}
                        >
                            {line.text2 || ' '}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CompareInputs;
