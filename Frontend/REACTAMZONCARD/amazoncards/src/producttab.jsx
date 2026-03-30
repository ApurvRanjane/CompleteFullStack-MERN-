import Product from "./product";

function Producttab(){
  let styles={
    display:"flex",
    flexwrap:"wrap",
    justifyContent:"center",
    alignItems:"center"
  }
    return(
      <div style={styles}>
       
        <Product title="Logitech MX Master" idx={0}/>
         <Product title="Apple Pencil(2nd Gen)" idx={1}/>
          <Product title="Zebronics ZEb Transformer" idx={2}/>
           <Product title="Petronics Toad 23" idx={3}/>
      </div>
    )
}

export default Producttab;