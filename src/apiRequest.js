const apiRequest = async(url='',optionsObject=null,errorMessage=null) => {
    try{
        //console.log(url)
        //console.log(url)
        const response = await fetch(url,optionsObject);
        //console.log(response)
        //console.log(response.status)
        //console.log(response)
        if(!response.ok) throw Error("Please Reload the App")

    }catch(err){
        errorMessage = err.Message;


    }finally{
        return errorMessage;
    }
}
export default apiRequest