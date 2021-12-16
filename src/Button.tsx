import React from 'react';
import Spinner from './Spinner';

export interface ButtonProps {
  title: string;
  link: string;
  type?: 'submit' | 'link';
  intent: 'primary' | 'success' | 'warning' | 'danger';
  size: 'small' | 'medium' | 'large';
  weight?: 'light' | 'normal' | 'medium' | 'semibold';
  fullWidth?: boolean;
  disabled?: boolean;
  loading?: boolean;
}

export const Button = ({
  title,
  link,
  type,
  intent,
  size,
  weight,
  fullWidth,
  disabled,
  loading,
}: ButtonProps) => {
  const intentPrimary = 'bg-sky-600 hover:bg-sky-500 focus:ring-sky-500';
  const intentSuccess =
    'bg-emerald-600 hover:bg-emerald-500 focus:ring-emerald-500';
  const intentWarning =
    'bg-yellow-600 hover:bg-yellow-500 focus:ring-yellow-500';
  const intentDanger = 'bg-rose-600 hover:bg-rose-500 focus:ring-rose-500';
  const disabledStyles = 'cursor-not-allowed opacity-60';
  const sizeSmall = 'px-[0.4rem] py-[0.21rem] text-[0.8rem]';
  const sizeMedium = 'px-[0.5rem] py-[0.25rem] text-[0.95rem]';
  const sizeLarge = 'px-3.5 py-1.5 text-[1rem]';
  const loadingClasses =
    'bg-gray-100 text-black hover:shadow-sky-100 focus:ring-sky-500';

  return (
    <>
      <button
        className={`
          ${fullWidth === true && 'block w-full text-center'}`}
        // depending on type set onClick
        onClick={() => {
          if (type === 'link') {
            window.location.href = link;
          }
        }}
        type={type === 'submit' ? 'submit' : 'button'}
      >
        <button
          type="button"
          className={`hover:shadow-lg text-white rounded focus:outline-none focus:ring-2 focus:ring-offset-2 inline-flex justify-center
          ${loading === true && loadingClasses}
          ${intent?.toLowerCase() === 'primary' && intentPrimary}
          ${intent?.toLowerCase() === 'success' && intentSuccess}
          ${intent?.toLowerCase() === 'warning' && intentWarning}
          ${intent?.toLowerCase() === 'danger' && intentDanger}
          ${disabled === true && disabledStyles}
          ${size?.toLowerCase() === 'small' && sizeSmall}
          ${size?.toLowerCase() === 'medium' && sizeMedium}
          ${size?.toLowerCase() === 'large' && sizeLarge}
          ${weight?.toLowerCase() === 'light' && 'font-light'}
          ${weight?.toLowerCase() === 'normal' && 'font-normal'}
          ${weight?.toLowerCase() === 'medium' && 'font-medium'}
          ${weight?.toLowerCase() === 'semibold' && 'font-semibold'}
          ${loading === true && loadingClasses} `}
        >
          {loading === false ? title : <Spinner />}
        </button>
      </button>
    </>
  );
};
