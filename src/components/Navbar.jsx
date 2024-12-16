export const Navbar = () => {
    return (
        <div className={'w-full mx-auto'}>
            <nav
                className={'md:flex flex-col md:flex-row mx-[50px]  my-4 md:justify-between md:mx-auto max-w-[1200px]'}>
                <div>
                    <h1 className={'font-bold text-3xl'}>{new Date().toUTCString().slice(0, 16)}</h1>
                    <h3 className={'font-bold text-xl text-gray-600'}>Chironzit Biswas</h3>
                </div>
                <div>
                    <input className={'bg-blue-100 rounded-full px-5 py-2 my-4 text-xl outline-none'} type="text"
                           placeholder={'Search'}
                           name={''}
                           autoComplete={"off"}/>
                </div>

            </nav>
        </div>

    )
}