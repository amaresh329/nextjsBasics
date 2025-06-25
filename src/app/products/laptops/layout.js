import LaptopDiscounts from "./LaptopDiscounts";

export const metadata={
    title:"Laptops Page",
    description:"Best Laptops available here in the whole city"
}

export default function layout({children}){
    return(
        <div>
        <LaptopDiscounts/>
            {children}
        </div>
    )
}