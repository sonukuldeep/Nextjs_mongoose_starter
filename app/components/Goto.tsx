import Link from 'next/link';

export function Goto({ path, text }: { path: string, text: string }) {
    return (
        <Link className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 my-2 border border-blue-700 rounded' href={path}>{text}</Link>
    )
}