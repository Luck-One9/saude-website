import Link from 'next/link'

export const getData = async () => {
  const res = await fetch("http://localhost:1337/api/articles?populate=*");
  const articles = await res.json().then((data) => data.data);

  return {
      props: {
          getArticles: articles
      }
  }
}

interface Article {
  id: number;
  vacancy: string;
  key: string;
  description: string;
  attributes: {
    Description: string;
    Title: string;
  }
}


const Page = async () => {
    // Minimising the paragrahps on the card component
    const MAX_LENGTH = 250;
    const data = await getData()

    return (
     <>
          <section className="w-full px-4 py-24 mx-auto max-w-7xl md:w-4/5">
               <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
                    {data.props.getArticles.map((article: Article) => (
                        <Link key={article.key} href={'/articles/' + article.id}>
                          <div>
                             <h2 className="mb-2 text-xl font-bold leading-snug text-gray-900">
                                 <a href="#" className="text-gray-900 hover:text-purple-700">{article.attributes.Title}</a>
                             </h2>
                                 <p className="mb-4 text-sm font-normal text-gray-600">
                                               {article.attributes.Description}
                                  </p>
                           </div>
                        </Link>
                    ))}   
               </div>
         </section>     
     </>
     )
}
 
export default Page;