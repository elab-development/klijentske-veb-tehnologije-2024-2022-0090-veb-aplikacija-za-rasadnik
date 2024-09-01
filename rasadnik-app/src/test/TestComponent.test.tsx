import React from "react";

export interface TestComponentProps {
    onClick: () => void;
}

const TestComponent: React.FC<TestComponentProps> = ({ onClick }) => {
    const handleClick = () => {
        onClick();
    };

    return(

        <div>
            <button onClick={handleClick} name='Test'>
                Test
            </button>
        </div>
    );
};

export default TestComponent