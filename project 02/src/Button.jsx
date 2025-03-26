function Button(){


    const handleClick = (e) => e.target.textContent = "OUCH! That hurt! 😭";
return(<button onDoubleClick={(e) => handleClick(e)}>Click Me😁</button>);
    }
export default Button;