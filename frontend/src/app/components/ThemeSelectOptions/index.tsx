import React from 'react';
import clsx from 'clsx';
import { gradientColors } from '../../../../database/navItemData';
import { HiCursorClick } from 'react-icons/hi';

interface ThemeSelectOptionsProps {
    selectedtheme: number;
    setSelectedTheme: (id: number) => void;
    showSettings: boolean;
    setShowSettings: (bool: boolean) => void;
}

const ThemeSelectOptions: React.FC<ThemeSelectOptionsProps> = ({ setSelectedTheme, selectedtheme, setShowSettings, showSettings }) => {
    return (
        <div className={clsx("fixed w-full h-[100vh]  z-[9999]  bg-brand-black/80 transition-all duration-300 ease-linear", showSettings ? " right-0 top-0 " : "top-[-200vh] ")} >
            <ul className='flex items-center justify-center h-full'>
                {gradientColors?.map(({ id, color }) => (
                    <button
                        key={id}
                        className={clsx('h-10 w-10 rounded-full m-2 relative flex items-center justify-center', color)}
                        onClick={() => setSelectedTheme(id)}
                    >
                        {selectedtheme === id && (
                            <HiCursorClick />
                        )}
                    </button>
                ))}

                <button
                    onClick={() => setShowSettings(!showSettings)}
                    className={clsx('text-white ', showSettings ? "fixed top-10 right-10" : "")}>
                    {"close"}
                </button>
            </ul>
        </div>
    );
};

export default ThemeSelectOptions;




