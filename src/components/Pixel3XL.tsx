import React from "react";

// https://github.com/Hermanya/react-device-frames

const Pixel3XL: React.FC<{ screenshot: string; alt: string }> = ({
  screenshot,
  alt,
  ...props
}) => {
  // TODO: ADD ID
  const id = Math.random().toString().split(".")[1];
  return (
    <svg
      width={"100%"}
      height={"100%"}
      viewBox={"0 0 792 1628"}
      fill="none"
      {...props}
    >
      <g filter="url(#Pixel3XL__filter0_ii)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M434 1628c0-1.1-.895-2-2-2h-78c-1.105 0-2 .9-2 2H86c-47.496 0-86-38.5-86-86V86C0 38.504 38.504 0 86 0h614c47.496 0 86 38.504 86 86v1456c0 47.5-38.504 86-86 86H434z"
          fill="#222"
        />
      </g>
      <g
        filter="url(#Pixel3XL__filter1_ii)"
        fillRule="evenodd"
        clipRule="evenodd"
      >
        <path
          d="M86 8h614c43.078 0 78 34.922 78 78v1456c0 43.08-34.922 78-78 78H86c-43.078 0-78-34.92-78-78V86C8 42.922 42.922 8 86 8z"
          fill="#000"
        />
        <path
          d="M86 8h614c43.078 0 78 34.922 78 78v1456c0 43.08-34.922 78-78 78H86c-43.078 0-78-34.92-78-78V86C8 42.922 42.922 8 86 8z"
          fill="url(#Pixel3XL__paint0_linear)"
        />
      </g>
      <g filter="url(#Pixel3XL__filter2_ii)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M786 377h1a5 5 0 015 5v92a5 5 0 01-5 5h-1V377z"
          fill="#222"
        />
      </g>
      <g filter="url(#Pixel3XL__filter3_ii)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M786 585h1a5 5 0 015 5v193a5 5 0 01-5 5h-1V585z"
          fill="#222"
        />
      </g>
      <g filter="url(#Pixel3XL__filter4_i)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M358 81h68a9 9 0 019 9 9 9 0 01-9 9h-68a9 9 0 01-9-9 9 9 0 019-9z"
          fill="#1A1A1A"
        />
      </g>
      <g filter="url(#Pixel3XL__filter5_i)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M358 85h68a5 5 0 010 10h-68a5 5 0 010-10z"
          fill="#0E0E0E"
        />
      </g>
      <g filter="url(#Pixel3XL__filter6_i)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M310 94c10.493 0 19-8.507 19-19s-8.507-19-19-19-19 8.507-19 19 8.507 19 19 19z"
          fill="#1A1A1A"
        />
      </g>
      <g filter="url(#Pixel3XL__filter7_i)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M310 90c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15-8.284 0-15 6.716-15 15 0 8.284 6.716 15 15 15z"
          fill="#0E0E0E"
        />
      </g>
      <g filter="url(#Pixel3XL__filter8_i)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M477 89c7.732 0 14-6.268 14-14s-6.268-14-14-14-14 6.268-14 14 6.268 14 14 14z"
          fill="#1A1A1A"
        />
      </g>
      <g filter="url(#Pixel3XL__filter9_i)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M477 85c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10z"
          fill="#0E0E0E"
        />
      </g>
      <g filter="url(#Pixel3XL__filter10_i)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M284 1572h218a8 8 0 018 8 8 8 0 01-8 8H284a8 8 0 01-8-8 8 8 0 018-8z"
          fill="#1A1A1A"
        />
      </g>
      <g filter="url(#Pixel3XL__filter11_i)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M284 1576h218a4 4 0 110 8H284a4 4 0 110-8z"
          fill="#0E0E0E"
        />
      </g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M241 34c14.359 0 26 11.64 26 26v10c0 27.614 22.386 50 50 50h155c27.614 0 50-22.386 50-50V60c0-14.36 11.641-26 26-26h146c32.033 0 58 25.968 58 58v1392c0 16.57-13.431 30-30 30H62c-16.569 0-30-13.43-30-30V92c0-32.032 25.968-58 58-58h151z"
        fill="url(#Pixel3XL__pattern0)"
      />
      <defs>
        <filter
          id="Pixel3XL__filter7_i"
          x={295}
          y={60}
          width={30}
          height={31}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={1} />
          <feGaussianBlur stdDeviation={1.5} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.038553 0" />
          <feBlend in2="shape" result="effect1_innerShadow" />
        </filter>
        <filter
          id="Pixel3XL__filter0_ii"
          x={0}
          y={0}
          width={786}
          height={1629}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={1} />
          <feGaussianBlur stdDeviation={5} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
          <feBlend in2="shape" result="effect1_innerShadow" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={1} />
          <feGaussianBlur stdDeviation={1.5} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0" />
          <feBlend in2="effect1_innerShadow" result="effect2_innerShadow" />
        </filter>
        <filter
          id="Pixel3XL__filter2_ii"
          x={786}
          y={377}
          width={6}
          height={103}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={1} />
          <feGaussianBlur stdDeviation={5} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
          <feBlend in2="shape" result="effect1_innerShadow" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={1} />
          <feGaussianBlur stdDeviation={1.5} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0" />
          <feBlend in2="effect1_innerShadow" result="effect2_innerShadow" />
        </filter>
        <filter
          id="Pixel3XL__filter3_ii"
          x={786}
          y={585}
          width={6}
          height={204}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={1} />
          <feGaussianBlur stdDeviation={5} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
          <feBlend in2="shape" result="effect1_innerShadow" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={1} />
          <feGaussianBlur stdDeviation={1.5} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0" />
          <feBlend in2="effect1_innerShadow" result="effect2_innerShadow" />
        </filter>
        <filter
          id="Pixel3XL__filter4_i"
          x={349}
          y={81}
          width={86}
          height={19}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={1} />
          <feGaussianBlur stdDeviation={1.5} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
          <feBlend in2="shape" result="effect1_innerShadow" />
        </filter>
        <filter
          id="Pixel3XL__filter5_i"
          x={353}
          y={85}
          width={78}
          height={11}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={1} />
          <feGaussianBlur stdDeviation={1.5} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.038553 0" />
          <feBlend in2="shape" result="effect1_innerShadow" />
        </filter>
        <filter
          id="Pixel3XL__filter6_i"
          x={291}
          y={56}
          width={38}
          height={39}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={1} />
          <feGaussianBlur stdDeviation={1.5} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
          <feBlend in2="shape" result="effect1_innerShadow" />
        </filter>
        <filter
          id="Pixel3XL__filter1_ii"
          x={8}
          y={8}
          width={770}
          height={1613}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={1} />
          <feGaussianBlur stdDeviation={20} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.0654721 0" />
          <feBlend in2="shape" result="effect1_innerShadow" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={1} />
          <feGaussianBlur stdDeviation={1.5} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0" />
          <feBlend in2="effect1_innerShadow" result="effect2_innerShadow" />
        </filter>
        <filter
          id="Pixel3XL__filter8_i"
          x={463}
          y={61}
          width={28}
          height={29}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={1} />
          <feGaussianBlur stdDeviation={1.5} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
          <feBlend in2="shape" result="effect1_innerShadow" />
        </filter>
        <filter
          id="Pixel3XL__filter9_i"
          x={467}
          y={65}
          width={20}
          height={21}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={1} />
          <feGaussianBlur stdDeviation={1.5} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.038553 0" />
          <feBlend in2="shape" result="effect1_innerShadow" />
        </filter>
        <filter
          id="Pixel3XL__filter10_i"
          x={276}
          y={1572}
          width={234}
          height={17}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={1} />
          <feGaussianBlur stdDeviation={1.5} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
          <feBlend in2="shape" result="effect1_innerShadow" />
        </filter>
        <filter
          id="Pixel3XL__filter11_i"
          x={280}
          y={1576}
          width={226}
          height={9}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={1} />
          <feGaussianBlur stdDeviation={1.5} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.038553 0" />
          <feBlend in2="shape" result="effect1_innerShadow" />
        </filter>
        <linearGradient
          id="Pixel3XL__paint0_linear"
          x1={-377}
          y1={814}
          x2={876.902}
          y2={1412.95}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0.048} />
          <stop offset={1} stopOpacity={0.01} />
        </linearGradient>
        <pattern
          id="Pixel3XL__pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <use xlinkHref="#Pixel3XL__image0" transform="scale(.0007 .00034)" />
        </pattern>
        <image
          id="Pixel3XL__image0"
          width={1440}
          height={2960}
          xlinkHref={screenshot}
        />
      </defs>
    </svg>
  );
  return (
    <svg
      width={"100%"}
      height={"100%"}
      viewBox={"0 0 1305 2598"}
      fill="none"
      aria-label={alt}
      {...props}
    >
      <g filter={`url(#IPhoneX_${id}_filter0_ii)`}>
        <path d="M0 541a4 4 0 014-4h10v190H4a4 4 0 01-4-4V541z" fill="#222" />
      </g>
      <g filter={`url(#IPhoneX_${id}_filter1_ii)`}>
        <path d="M0 779a4 4 0 014-4h10v190H4a4 4 0 01-4-4V779z" fill="#222" />
      </g>
      <g filter={`url(#IPhoneX_${id}_filter2_ii)`}>
        <path d="M0 355a4 4 0 014-4h10v104H4a4 4 0 01-4-4v-96z" fill="#222" />
      </g>
      <g filter={`url(#IPhoneX_${id}_filter3_ii)`}>
        <path
          d="M1291 597h9c2.76 0 5 2.239 5 5v300c0 2.761-2.24 5-5 5h-9V597z"
          fill="#222"
        />
      </g>
      <g filter={`url(#IPhoneX_${id}_filter4_ii)`}>
        <path
          d="M10 200C10 89.543 99.545 0 210.01 0h884.98C1205.45 0 1295 89.547 1295 200v2198c0 110.46-89.55 200-200.01 200H210.01C99.547 2598 10 2508.45 10 2398V200z"
          fill="#222"
        />
      </g>
      <g filter={`url(#IPhoneX_${id}_filter5_ii)`}>
        <path
          d="M32 202.005C32 102.591 112.589 22 211.996 22H1093c99.41 0 180 80.588 180 180.005V2395.99c0 99.42-80.59 180.01-180 180.01H211.996C112.587 2576 32 2495.41 32 2395.99V202.005z"
          fill="#030303"
        />
        <path
          d="M32 202.005C32 102.591 112.589 22 211.996 22H1093c99.41 0 180 80.588 180 180.005V2395.99c0 99.42-80.59 180.01-180 180.01H211.996C112.587 2576 32 2495.41 32 2395.99V202.005z"
          fill={`url(#IPhoneX_${id}_paint0_linear`}
        />
      </g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1273 250h22v20h-22v-20zM10 250h22v20H10v-20zM1273 2330h22v20h-22v-20zM10 2330h22v20H10v-20z"
        fill="#303030"
      />
      <g filter={`url(#IPhoneX_${id}_filter6_i)`}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M520 120c6.627 0 12-5.373 12-12s-5.373-12-12-12-12 5.373-12 12 5.373 12 12 12z"
          fill="#1A1A1A"
        />
      </g>
      <g filter={`url(#IPhoneX_${id}_filter7_i)`}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M520 116a8 8 0 100-16 8 8 0 000 16z"
          fill="#0E0E0E"
        />
      </g>
      <g filter={`url(#IPhoneX_${id}_filter8_i)`}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M798 128c11.046 0 20-8.954 20-20s-8.954-20-20-20-20 8.954-20 20 8.954 20 20 20z"
          fill="#1A1A1A"
        />
      </g>
      <g filter={`url(#IPhoneX_${id}_filter9_i)`}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M798 124c8.837 0 16-7.163 16-16s-7.163-16-16-16-16 7.163-16 16 7.163 16 16 16z"
          fill="#0E0E0E"
        />
      </g>
      <g filter={`url(#IPhoneX_${id}_filter10_i)`}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M586 100h134a8 8 0 010 16H586a8 8 0 010-16z"
          fill="#1A1A1A"
        />
      </g>
      <g filter={`url(#IPhoneX_${id}_filter11_i)`}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M586 104h134a4 4 0 010 8H586a4 4 0 010-8z"
          fill="#0E0E0E"
        />
      </g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M321 81v.041c.33-.027.663-.041 1-.041 6.629 0 12 5.376 12 12.008V99c0 39.773 32.282 72 72.104 72h492.792C938.714 171 971 138.765 971 99V81h134c60.75 0 110 49.245 110 110v2216c0 60.75-49.24 110-110 110H199.998C139.248 2517 90 2467.75 90 2407V191c0-60.751 49.245-110 109.998-110H321zm663 .041V81h-13v13.004-.996C971 86.376 976.371 81 983 81c.337 0 .67.014 1 .041z"
        fill={`url(#IPhoneX_${id}_pattern0)`}
      />
      <defs>
        <filter
          id={`IPhoneX_${id}_filter7_i`}
          x={512}
          y={100}
          width={16}
          height={17}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={1} />
          <feGaussianBlur stdDeviation={1.5} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.038553 0" />
          <feBlend in2="shape" result="effect1_innerShadow" />
        </filter>
        <filter
          id={`IPhoneX_${id}_filter0_ii`}
          x={0}
          y={537}
          width={14}
          height={191}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={1} />
          <feGaussianBlur stdDeviation={5} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
          <feBlend in2="shape" result="effect1_innerShadow" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={1} />
          <feGaussianBlur stdDeviation={1.5} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0" />
          <feBlend in2="effect1_innerShadow" result="effect2_innerShadow" />
        </filter>
        <filter
          id={`IPhoneX_${id}_filter2_ii`}
          x={0}
          y={351}
          width={14}
          height={105}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={1} />
          <feGaussianBlur stdDeviation={5} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
          <feBlend in2="shape" result="effect1_innerShadow" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={1} />
          <feGaussianBlur stdDeviation={1.5} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0" />
          <feBlend in2="effect1_innerShadow" result="effect2_innerShadow" />
        </filter>
        <filter
          id={`IPhoneX_${id}_filter3_ii`}
          x={1291}
          y={597}
          width={14}
          height={311}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={1} />
          <feGaussianBlur stdDeviation={5} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
          <feBlend in2="shape" result="effect1_innerShadow" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={1} />
          <feGaussianBlur stdDeviation={1.5} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0" />
          <feBlend in2="effect1_innerShadow" result="effect2_innerShadow" />
        </filter>
        <filter
          id={`IPhoneX_${id}_filter4_ii`}
          x={10}
          y={0}
          width={1285}
          height={2599}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={1} />
          <feGaussianBlur stdDeviation={5} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
          <feBlend in2="shape" result="effect1_innerShadow" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={1} />
          <feGaussianBlur stdDeviation={1.5} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0" />
          <feBlend in2="effect1_innerShadow" result="effect2_innerShadow" />
        </filter>
        <filter
          id={`IPhoneX_${id}_filter5_ii`}
          x={32}
          y={22}
          width={1241}
          height={2555}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={1} />
          <feGaussianBlur stdDeviation={20} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.0654721 0" />
          <feBlend in2="shape" result="effect1_innerShadow" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={1} />
          <feGaussianBlur stdDeviation={1.5} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0" />
          <feBlend in2="effect1_innerShadow" result="effect2_innerShadow" />
        </filter>
        <filter
          id={`IPhoneX_${id}_filter6_i`}
          x={508}
          y={96}
          width={24}
          height={25}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={1} />
          <feGaussianBlur stdDeviation={1.5} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
          <feBlend in2="shape" result="effect1_innerShadow" />
        </filter>
        <filter
          id={`IPhoneX_${id}_filter1_ii`}
          x={0}
          y={775}
          width={14}
          height={191}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={1} />
          <feGaussianBlur stdDeviation={5} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
          <feBlend in2="shape" result="effect1_innerShadow" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={1} />
          <feGaussianBlur stdDeviation={1.5} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0" />
          <feBlend in2="effect1_innerShadow" result="effect2_innerShadow" />
        </filter>
        <filter
          id={`IPhoneX_${id}_filter8_i`}
          x={778}
          y={88}
          width={40}
          height={41}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={1} />
          <feGaussianBlur stdDeviation={1.5} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
          <feBlend in2="shape" result="effect1_innerShadow" />
        </filter>
        <filter
          id={`IPhoneX_${id}_filter9_i`}
          x={782}
          y={92}
          width={32}
          height={33}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={1} />
          <feGaussianBlur stdDeviation={1.5} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.038553 0" />
          <feBlend in2="shape" result="effect1_innerShadow" />
        </filter>
        <filter
          id={`IPhoneX_${id}_filter10_i`}
          x={578}
          y={100}
          width={150}
          height={17}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={1} />
          <feGaussianBlur stdDeviation={1.5} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
          <feBlend in2="shape" result="effect1_innerShadow" />
        </filter>
        <filter
          id={`IPhoneX_${id}_filter11_i`}
          x={582}
          y={104}
          width={142}
          height={9}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={1} />
          <feGaussianBlur stdDeviation={1.5} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.038553 0" />
          <feBlend in2="shape" result="effect1_innerShadow" />
        </filter>
        <linearGradient
          id={`IPhoneX_${id}_paint0_linear`}
          x1={-588.5}
          y1={1299}
          x2={1419.42}
          y2={2274.66}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0.048} />
          <stop offset={1} stopOpacity={0.01} />
        </linearGradient>
        <pattern
          id={`IPhoneX_${id}_pattern0`}
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <use
            xlinkHref={`#IPhoneX_${id}_image`}
            transform="scale(.00053 .00025)"
          />
        </pattern>
        <image
          id={`IPhoneX_${id}_image`}
          width={1892}
          height={4096}
          href={screenshot}
        />
      </defs>
    </svg>
  );
};

export default Pixel3XL;
