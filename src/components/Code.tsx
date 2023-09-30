const Code = (props: {children: React.ReactNode}) => {
    return <code className="px-1 text-sm py-0.5 rounded inline bg-gray-950 border border-zinc-800 text-amber-400 text-opacity-80">{props.children}</code>
}

export default Code;