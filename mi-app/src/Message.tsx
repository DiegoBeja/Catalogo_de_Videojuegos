function Message(){
    const name = 'Diego';
    if(name.includes('Diego'))
        return <h1>Hello {name}</h1>;
    return <h1>Hello World</h1>
}

export default Message;