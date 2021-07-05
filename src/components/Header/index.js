import React from 'react';

const Header = () => {
    return (
        <div className="text-center text-primary">
            <div className="text-2xl mb-3">Equation Generator</div>
            <div className="flex justify-center">
            <div className="m-1 self-center h-1 w-14 bg-red-500"></div>
            <div className="text-xs mb-1">based on target number</div>
            <div className="m-1 self-center h-1 w-14 bg-red-500"></div>
            </div>
        </div>
    );
}
export default Header;