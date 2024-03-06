import { RadioGroup } from '@headlessui/react';
import React, { useCallback, useEffect, useState } from 'react';

const fileSizes = [
    50,
    100,
    500,
    1000
]

const connectionSpeed = [
    5,
    10,
    50,
    100
]

export const UpdateTimeCalculator: React.FC = () => {
    const [speed, setSpeed] = useState<number>(connectionSpeed[0]);
    const [fileSize, setFileSize] = useState<number>(fileSizes[0]);
    const [updateTime, setUpdateTime] = useState<string>('');

    const calculateUpdateTime = useCallback(() => {
        if (speed <= 0 || fileSize <= 0) {
            return;
        }

        const fileSizeInBits = fileSize * 8 * 1024 * 1024;
        const speedInBitsPerSecond = speed * 1024 * 1024;
        const updateTimeInSeconds = fileSizeInBits / speedInBitsPerSecond;
    
        // const hours = Math.floor(updateTimeInSeconds / 3600);
        const minutes = Math.floor((updateTimeInSeconds % 3600) / 60) + 4;
        // const seconds = Math.floor(updateTimeInSeconds % 60);

        setUpdateTime(`${minutes} мин.`);

    }, [speed, fileSize]);

    useEffect(() => {
        calculateUpdateTime();
    }, [calculateUpdateTime]);

    return (
        <div className='my-10'>
            <div className='grid grid-cols-2 gap-10'>
                <div>
                    <span className="mb-3 block h-14">Ориентировочный размер плейлиста или новых файлов</span>
                    <RadioGroup value={fileSize} onChange={setFileSize}>
                        <div className="space-y-2">
                            {fileSizes.map((plan, idx) => (
                                <RadioGroup.Option
                                    key={idx}
                                    value={plan}
                                    className={({ active, checked }) =>
                                        `${
                                            active
                                                ? 'ring-none'
                                                : ''
                                        }
                  ${checked ? 'bg-blue-600 text-white border-blue-600' : 'bg-white'}
                    relative flex cursor-pointer rounded-lg px-5 py-4 focus:outline-none boder ring-none border-2`
                                    }
                                >
                                    {({ checked }) => (
                                        <>
                                            <div className="flex w-full items-center justify-between">
                                                <div className="flex items-center">
                                                    <div className="text-sm">
                                                        <RadioGroup.Label
                                                            as="p"
                                                            className={`font-medium h-6 flex items-center  ${
                                                                checked ? 'text-white' : 'text-gray-900'
                                                            }`}
                                                        >
                                                            {plan} Мб
                                                        </RadioGroup.Label>
                                                    </div>
                                                </div>
                                                {checked && (
                                                    <div className="shrink-0 text-white">
                                                        <CheckIcon className="h-6 w-6" />
                                                    </div>
                                                )}
                                            </div>
                                        </>
                                    )}
                                </RadioGroup.Option>
                            ))}
                        </div>
                    </RadioGroup>
                </div>
                <div>
                    <span className="mb-3 block h-14">Скорость интернета</span>
                    <RadioGroup value={speed} onChange={setSpeed}>
                        <div className="space-y-2">
                            {connectionSpeed.map((plan, idx) => (
                                <RadioGroup.Option
                                    key={idx}
                                    value={plan}
                                    className={({ active, checked }) =>
                                        `${
                                            active
                                                ? 'ring-none'
                                                : ''
                                        }
                  ${checked ? 'bg-blue-600 text-white border-blue-600' : 'bg-white'}
                    relative flex cursor-pointer rounded-lg px-5 py-4 focus:outline-none boder ring-none border-2`
                                    }
                                >
                                    {({ checked }) => (
                                        <>
                                            <div className="flex w-full items-center justify-between">
                                                <div className="flex items-center">
                                                    <div className="text-sm">
                                                        <RadioGroup.Label
                                                            as="p"
                                                            className={`font-medium h-6 flex items-center  ${
                                                                checked ? 'text-white' : 'text-gray-900'
                                                            }`}
                                                        >
                                                            {plan} Мбит/с
                                                        </RadioGroup.Label>
                                                    </div>
                                                </div>
                                                {checked && (
                                                    <div className="shrink-0 text-white">
                                                        <CheckIcon className="h-6 w-6" />
                                                    </div>
                                                )}
                                            </div>
                                        </>
                                    )}
                                </RadioGroup.Option>
                            ))}
                        </div>
                    </RadioGroup>
                </div>
            </div>
            <div className="my-14 text-center">
                <div className='mb-5 text-xl'>
                    Время обновления плейлиста на экранах
                </div>
                {updateTime && <div className='text-5xl font-bold'>~ {updateTime}</div>}
            </div>
        </div>
    );
};

const CheckIcon = ({ className }: { className: string }) => {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
        </svg>
    )
}