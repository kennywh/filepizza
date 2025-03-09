'use client'

import React, { JSX } from 'react'
import { useRotatingSpinner } from '../hooks/useRotatingSpinner'

function Cloud({ isRotating }: { isRotating?: boolean }): JSX.Element {
  return (
    <svg
      width="300"
      height="300"
      viewBox="0 0 577 576"
      fill="none"
      className={isRotating ? 'animate-spin-slow' : ''}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={isRotating ? 'Rotating cloud' : 'Cloud'}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M476.612 290.864C476.612 360.952 419.701 417.864 349.612 417.864H136.842C92.1567 417.864 56.0469 381.754 56.0469 337.069C56.0469 297.615 84.0957 264.604 121.077 257.242C121.03 255.519 121.006 253.786 121.006 252.044C121.006 175.313 183.275 113.044 260.006 113.044C319.335 113.044 370.105 150.289 390.207 201.988C400.272 197.329 411.539 194.683 423.459 194.683C459.557 194.683 489 224.126 489 260.224C489 267.578 487.899 274.662 485.867 281.312C482.579 284.414 479.493 287.606 476.612 290.864Z"
        fill="#E6F0FD"
        stroke="#7AA5D4"
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M390.207 201.988C370.105 150.289 319.335 113.044 260.006 113.044C183.275 113.044 121.006 175.313 121.006 252.044C121.006 253.786 121.03 255.519 121.077 257.242C84.0957 264.604 56.0469 297.615 56.0469 337.069C56.0469 381.754 92.1567 417.864 136.842 417.864H349.612C419.701 417.864 476.612 360.952 476.612 290.864C450.335 318.525 413.493 335.864 372.612 335.864H221.842C192.156 335.864 168.047 311.754 168.047 282.069C168.047 255.615 187.096 233.604 211.577 228.242C211.546 227.186 211.53 226.125 211.53 225.061C211.53 173.93 252.875 132.585 304.006 132.585C343.335 132.585 377.152 156.673 390.207 190.988C390.178 194.654 390.159 198.32 390.207 201.988Z"
        fill="#FFFFFF"
      />
    </svg>
  )
}

function Arrow({ direction }: { direction: 'up' | 'down' }): JSX.Element {
  return (
    <svg
      width="120"
      height="173"
      viewBox="0 0 232 335"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={
        direction === 'down'
          ? 'rotate-180 transition-transform duration-150'
          : 'transition-transform duration-150'
      }
      role="img"
      aria-label={`Arrow pointing ${direction}`}
      style={{
        viewTransitionName: 'arrow-direction',
      }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M229.212 157.623C232.34 162.312 232.632 168.343 229.973 173.313C227.314 178.284 222.135 181.387 216.498 181.387H171.177V318.848C171.177 322.901 169.567 326.788 166.701 329.654C163.834 332.521 159.947 334.131 155.894 334.131H75.8861C71.8331 334.131 67.9461 332.521 65.0801 329.654C62.2141 326.788 60.6041 322.901 60.6041 318.848V181.387H15.2831C9.64615 181.387 4.46615 178.284 1.80715 173.313C-0.851852 168.343 -0.558859 162.312 2.56914 157.623C28.4951 118.757 79.4511 42.369 103.176 6.80196C106.011 2.55196 110.782 -3.05176e-05 115.89 -3.05176e-05C120.999 -3.05176e-05 125.769 2.55196 128.604 6.80196C152.329 42.369 203.285 118.757 229.212 157.623Z"
        fill="#7AA5D4"
        stroke="#E6F0FD"
        strokeWidth="8"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function Spinner({
  direction,
}: {
  direction: 'up' | 'down'
}): JSX.Element {
  const isRotating = useRotatingSpinner()
  return (
    <div className="relative w-[300px] h-[300px]">
      <Cloud isRotating={isRotating} />
      <div className="absolute inset-0 flex items-center justify-center">
        <Arrow direction={direction} />
      </div>
    </div>
  )
}
