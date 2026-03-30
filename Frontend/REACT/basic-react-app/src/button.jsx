function dosomething(){
    console.log("Button was clicked!!");
}

export default function Button(){
    return(
        <div>
            <button onClick={dosomething}>Submit!</button>
        </div>
    )
};