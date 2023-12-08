'use client';
import { useMutation } from "convex/react";
import { api } from "../convex/_generated/api";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function SocialBlock({
    article
}:{
    article:any
}){
    const [love, setLove] = useState(article?.metadatas?.amei);
    const [like, setLike] = useState(article?.metadatas?.gostei);
    const [dislike, setDislike] = useState(article?.metadatas?.nao_gostei);
    const mutation = useMutation(api.articles.updateMetadatas);

    
    const atualizarMetadatas = async () => {
        const novasMetadatas = {
            amei: love,
            gostei: like,
            'nao_gostei': dislike,
        };

        mutation({
            id: article._id,
            newMetadatas: novasMetadatas
        })
    };

    useEffect(() => {
        atualizarMetadatas()
    }, [like, love, dislike])

    const changeMetadatas = (type:string) => {
        switch(type){
            case 'love':
                setLove(love+1)
                break;
            case 'like':
                setLike(like+1)
                break;
            case 'dislike':
                setDislike(dislike+1)
                break;
        }

        atualizarMetadatas()
    };


    
    return (
        <div className="fixed top-40 right-52 rounded-md w-14 p-2 border bg-white border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white">
            <button className="select-none mb-3 hover:scale-110" onClick={() => changeMetadatas('love')}>{love}
                <Image
                    src={'/coracao.png'}
                    width={25}
                    height={25}
                    alt="Amei"
                    className='pointer-events-none'
                />
            </button>
            <button className="select-none mb-2 hover:scale-110" onClick={() => changeMetadatas('like')}>{like}
                <Image
                    src={'/gostar.png'}
                    width={25}
                    height={25}
                    alt="Gostei"
                    className='pointer-events-none'
                />
            </button>
            <button className="select-none mt-3 hover:scale-110" onClick={() => changeMetadatas('dislike')}>{dislike}
                <Image
                    src={'/nao-gosto.png'}
                    width={25}
                    height={25}
                    alt="Não gostei"
                    className='pointer-events-none'
                />
            </button>
        </div>
    )
}