import React from 'react';

export interface ButtonProps {
  title: string;
  link: string;
  intent?: 'primary' | 'success' | 'warning' | 'danger';
  size?: 'small' | 'medium' | 'large';
  weight?: 'light' | 'normal' | 'medium' | 'semibold';
  fullWidth?: boolean;
  icon?: any;
  iconPosition?: 'left' | 'right';
}

export const Button = ({
  title,
  link,
  intent,
  size,
  weight,
  fullWidth,
}: ButtonProps) => {
  const intentPrimary =
    'bg-sky-600 text-white hover:shadow-sky-100 focus:ring-sky-500';
  const intentSuccess =
    'bg-emerald-600 text-white hover:shadow-emerald-100 focus:ring-emerald-500';
  const intentWarning =
    'bg-yellow-600 text-white hover:shadow-yellow-100 focus:ring-yellow-500';
  const intentDanger =
    'bg-rose-600 text-white hover:shadow-rose-100 focus:ring-rose-500';
  const sizeSmall = 'px-[0.4rem] py-[0.21rem] text-[0.8rem]';
  const sizeMedium = 'px-[0.5rem] py-[0.25rem] text-[0.95rem]';
  const sizeLarge = 'px-3.5 py-1.5 text-[1rem]';

  return (
    <>
      <a
        className={`
          ${fullWidth === true && 'block w-full text-center'}`}
        href={link}
      >
        <button
          type="button"
          className={`hover:shadow-lg  rounded focus:outline-none focus:ring-2 focus:ring-offset-2 inline-flex justify-center
          ${intent?.toLowerCase() === 'primary' && intentPrimary}
          ${intent?.toLowerCase() === 'success' && intentSuccess}
          ${intent?.toLowerCase() === 'warning' && intentWarning}
          ${intent?.toLowerCase() === 'danger' && intentDanger}
          ${size?.toLowerCase() === 'small' && sizeSmall}
          ${size?.toLowerCase() === 'medium' && sizeMedium}
          ${size?.toLowerCase() === 'large' && sizeLarge}
          ${fullWidth === true && 'w-full'}
          ${weight?.toLowerCase() === 'light' && 'font-light'}
          ${weight?.toLowerCase() === 'normal' && 'font-normal'}
          ${weight?.toLowerCase() === 'medium' && 'font-medium'}
          ${weight?.toLowerCase() === 'semibold' && 'font-semibold'}
          // if iconPosition is left, then icon is on the left
          // show icon component from heroicons
          
          `}
        >
          {title}
        </button>
      </a>
    </>
  );
};
