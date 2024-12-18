export function getColors(){
    const p=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const colors=["Red","Green","Blue","Yellow"]
            resolve(colors)
        },5000)
    })

    return p;
}