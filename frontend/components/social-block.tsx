'use client';
import { usePathname } from 'next/navigation'
import Image from "next/image";
import { useState } from "react";

export default function SocialBlock(){
    const [love, setLove] = useState(0);
    const [like, setLike] = useState(0);
    const [dislike, setDislike] = useState(0);
    const path = usePathname();

    const atualizarMetadatas = async () => {
        const novasMetadatas = {
            amei: love,
            gostei: like,
            'nao-gostei': dislike,
        };

        try {
          const response = await fetch(`/api`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              metadata: novasMetadatas,
              fileName: path.split('/')[2],
            }),
          });
    
            if (response.ok) {
                console.log('Metadatas atualizadas com sucesso.');
            } else {
                console.error('Erro ao atualizar as metadatas:', response.statusText);
            }
        } catch (error) {
          console.error('Erro ao atualizar as metadatas:', error);
        }
    };


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
            <button className="mb-3 hover:scale-110" onClick={() => changeMetadatas('love')}>{love}
                <Image
                    src={'/coracao.png'}
                    width={25}
                    height={25}
                    alt="Amei"
                />
            </button>
            <button className="mb-2 hover:scale-110" onClick={() => changeMetadatas('like')}>{like}
                <Image
                    src={'/gostar.png'}
                    width={25}
                    height={25}
                    alt="Gostei"
                />
            </button>
            <button className="mt-3 hover:scale-110" onClick={() => changeMetadatas('dislike')}>{dislike}
                <Image
                    src={'/nao-gosto.png'}
                    width={25}
                    height={25}
                    alt="Não gostei"
                />
            </button>
        </div>
    )
}