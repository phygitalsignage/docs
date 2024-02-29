export const Logo = ({height = 10}: { height?: number}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 500 500"
            className={`h-${height} shrink-0`}
            fill="none"
        >
            <path
                d="M395.394 445.302L102.539 498.998C64.1948 505.873 29 476.514 29 437.499V145.047C29 101.198 60.3048 63.4804 103.465 55.4909L396.321 1.97997C434.666 -5.08045 469.858 24.2761 469.858 63.2947V355.747C469.858 399.595 438.555 437.312 395.394 445.302Z"
                fill="url(#paint0_linear_9_39)"/>
            <path
                d="M470.199 355.705C470.199 380.275 460.362 402.797 444.219 419.363C440.135 422.898 435.496 425.877 430.857 428.485C405.992 441.701 373.887 441.142 348.466 420.294L65.4729 187.066C31.3281 158.773 30.9572 111.495 55.2667 81.7139C58.6067 77.6183 62.5037 73.8956 66.5861 70.5455C75.3079 64.2169 85.3287 59.3771 96.0915 56.5854L396.714 1.11705C399.495 0.55835 408.034 0 408.034 0C443.319 0 470.011 25.9935 470.011 63.1002L470.199 355.705Z"
                fill="url(#paint1_linear_9_39)"/>
            <defs>
                <linearGradient
                    id="paint0_linear_9_39"
                    x1="97.6295"
                    y1="514.002"
                    x2="402.627"
                    y2="-12.9905"
                    gradientUnits="userSpaceOnUse">
                    <stop stopColor="#0013FF"/>
                    <stop
                        offset="0.0805123"
                        stopColor="#0012EC"/>
                    <stop
                        offset="0.2443"
                        stopColor="#000FCD"/>
                    <stop
                        offset="0.4146"
                        stopColor="#000DB4"/>
                    <stop
                        offset="0.5918"
                        stopColor="#000CA2"/>
                    <stop
                        offset="0.7804"
                        stopColor="#000B97"/>
                    <stop
                        offset="1"
                        stopColor="#000B94"/>
                </linearGradient>
                <linearGradient
                    id="paint1_linear_9_39"
                    x1="148.292"
                    y1="-12.5724"
                    x2="513.776"
                    y2="348.91"
                    gradientUnits="userSpaceOnUse">
                    <stop stopColor="#0312DB"/>
                    <stop
                        offset="1"
                        stopColor="#404EFF"/>
                </linearGradient>
            </defs>
        </svg>
    )
}
