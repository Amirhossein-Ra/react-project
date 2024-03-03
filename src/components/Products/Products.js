const Products = ({products}) => {
    return ( 
        <div  className=" bg-black  w-full flex flex-row flex-wrap justify-center items-start gap-x-12 gap-y-5 ">
            {products?.map((elem)=>{
                return(
                    <div key={elem.id} className="w-[40%] flex flex-col items-center gap-y-[50px]">
                        <img className="w-[40%] object-cover " src={elem.image} />
                        <div className="w-full flex flex-col gap-y-3 ">
                            <h1 className="text-white leading-[30px]">{elem.title}</h1>
                            <p className="text-white leading-[30px]">{elem.description}</p>
                            <h3 className="text-white leading-[30px]">{elem.category}</h3>
                            <h4 className="text-white"> price  :  {elem.price}</h4>
                        </div>
                    </div>
                )
            })}
            
           
        </div>
     );
}
 
export default Products;