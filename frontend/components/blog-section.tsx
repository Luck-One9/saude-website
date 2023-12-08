import SocialBlock from "./social-block";

export default function BlogSection({
    article
}:{
    article:any
}){
    return (
        <div className="grid text-[#262626] w-full h-screen text-center justify-items-center pt-12 overflow-y-auto dark:bg-gray-800 dark:text-white">
            <div className="w-3/5 mr-52 space-y-4 mb-32">
                <h1 className="font-bold text-2xl font-serif mx-4">{article.title}</h1>
                <p className="pb-4 text-lg italic font-serif">{article.description}</p>
                <div className="ml-5/12 break-words font-serif text-left text-base/7 indent-8 dark:text-[#A7A6A6]" dangerouslySetInnerHTML={{__html: article.body?.toString()}} />
            </div>
                <SocialBlock
                    article={article}
                />
        </div>
    );
}