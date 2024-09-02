import { PencilSquareIcon, XCircleIcon } from '@heroicons/react/24/outline';

export default function ActivityList() {
    return (
        <>
            <h2 className='text-4xl font-bold text-slate-600 text-center'>Comida y Actividades</h2>
            <div className='px-5 py-10 bg-white mt-5 flex justify-between shadow'>
                <div className='space-y-2 relative'>
                    <p className='absolute -top-8 -left-8 px-10 py-2 text-white uppercase font-bold bg-lime-500'>Comida</p>
                    <p className="text-2xl font-bold pt-5">hamburguesa</p>
                    <p className="font-black text-4xl text-lime-500">
                        300
                        <span>Calorias</span>
                    </p>
                </div>
                <div className='flex gap-5 items-center'>
                    <button>
                        <PencilSquareIcon
                            className='h-8 w-8 text-gray-800' />
                    </button>
                    <button>
                        <XCircleIcon className='h-8 w-8 text-red-500' />
                    </button>
                </div>
            </div>
        </>
    )
}
