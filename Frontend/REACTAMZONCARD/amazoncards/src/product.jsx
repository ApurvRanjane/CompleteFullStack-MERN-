import "./product.css";
import Price from "./price";
function Product({title,idx}){
    let oldPrices=["12,456","11.900","1,599","599"];
    let newPrices=["8,999","9,199","899","278"];
    let description=[
        ["8,000 DPI","5Programmable Buttons"],
        ["intuative surface","desgined for iPad pro"],
        ["desgined for iPad pro","intuative surface"],
        ["wireless","Optical Orientation"],
    ];
    return(
       <div className="Product">
        <h4>{title}</h4>
        <p>{description[idx][0]}</p>
         <p>{description[idx][1]}</p>
        <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
       </div>
    )
}

export default Product;