import navbar from "./components/navbar.js"

    document.getElementById("navbar").innerHTML= navbar();

    
    let getData = async () =>{


            try{
                let res= await fetch("https://fakestoreapi.com/products/category/jewelery ");
                let data= await res.json();
                console.log(data)
            }
            catch(err){
                console.log("err;".err)
            }
    }
    getData();
    let append =(data) =>{
        let container=document.getElementById("container");
        data.forEach((el)=>{

            let p=document.createElement("p");
            p.innerHTML=el.title;
            container.append(p)
        })
    }