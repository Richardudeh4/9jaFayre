"use client";
import React, { useCallback} from 'react'
import Button from '../Button';

interface ModalProps {

    onSubmit: () => void;
    title?: string;
    body?: React.ReactElement;
    footer?: React.ReactElement;
    actionLabel: string;
    disabled?: boolean;
    secondaryAction?: () => void;
    secondaryActionLabel?: string;
}

const Modal : React.FC<ModalProps> = ({
    
    onSubmit,
    title,
    body,
    footer,
    actionLabel,
    disabled,
    secondaryAction,
    secondaryActionLabel
}) => {
 

    const handleSubmit = useCallback(()=> {
        if(disabled){
            return;
        }
        onSubmit();
    }, [disabled, onSubmit]);

    const handleSecondaryAction = useCallback(() => {
        if(disabled || !secondaryAction){
            return;
        }
        secondaryAction();
    }, [disabled, secondaryAction]);
   
  return (
    <>
    <div
    className=' justify-center items-center flex overflow-x-hidden overflow-y-auto  inset-0 z-50 p-4  outline-none focus:outline-none'
    >
<div className='relative w-full my-6 mx-auto h-full lg:h-auto md:h-auto'>
{/* Content */}
<div className={`translate duration-300 h-full`}>

    <div className='translate h-full lg:h-auto md:h-auto border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
        {/* Header */}
        <div className='flex items-center p-6 rounded-t justify-center relative border-b-[1px]'>
                <div className=' text-lg font-semibold'>
                    {title}
                </div>
                 </div>
        {/* BODY */}
        <div className='relative p-6 flex-auto'>
            {body}
        </div>
        {/* FOOTER */}
        <div className='flex flex-col gap-2 p-6'>
        <div className='flex flex-row items-center gap-4 w-full'>
        {secondaryAction && secondaryActionLabel && (
        <Button outline disabled={disabled} label={secondaryActionLabel} onClick={handleSecondaryAction}/>
        )}
        <Button disabled={disabled} label={actionLabel} onClick={handleSubmit}/>
        </div>
        {footer}
        </div>
    </div>
</div>
</div>
    </div> 
    </>
  )
};

export default Modal