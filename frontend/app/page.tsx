import Link from 'next/link'

async function Page(){
    // Minimising the paragrahps on the card component
    return (
     <>
          <section className="w-full px-4 py-24 mx-auto max-w-7xl md:w-4/5">
               <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
                <h1>Olá</h1>
               </div>
         </section>     
     </>
     )
}
 
export default Page;