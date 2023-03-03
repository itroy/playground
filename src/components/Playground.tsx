import React from "react"

class Playground extends React.Component {
    render(): React.ReactNode {
        return(
        <div className='playground p-11 pt-9 bg-white w-4/12 rounded-lg mt-5 mr-5 space-y-4 drop-shadow-sm'>
            <h1 className='text-4xl font-bold text-zinc-600'>Playground Boilerplate_</h1>
            <p className='text-zinc-500 text-sm'>A well designed base project for <a className=' text-slate-400 hover:text-slate-900' href='#'>Javascript</a>, CSS and React, using Vite.</p>
            <button className='submit px-4 py-1 bg-slate-600 text-white rounded-full hover:bg-slate-800'>Submit</button>
        </div>
        )
    }
}
export default Playground