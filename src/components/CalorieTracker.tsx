import CalorieDisplay from './CalorieDisplay';
export default function CalorieTracker() {
    return (
        <>
            <h2 className='text-4xl font-black text-white text-center'>Resumen de Calorias</h2>
            <div className='flex flex-col items-center md:flex-row md:justify-between gap-5 mt-10'>
                <CalorieDisplay />
                <CalorieDisplay />
                <CalorieDisplay />
            </div>
        </>
    )
}
