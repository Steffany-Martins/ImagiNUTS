"use client"; // This is a client component

import { OpenAI } from 'openai';
import { MouseEventHandler, Suspense, useEffect, useState } from "react";
import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Modal from './Modal';


interface GenerateImageButtonProps {
  apiKey?: string;
  inputValue: string;
}

interface DisplayMessage {
  loading: boolean;
  failed: boolean;
}

const defaultUrl = { url: 'https://oaidalleapiprodscus.blob.core.windows.net/private/org-lKUKYknZDBTqZFwLIAr7Gqzq/user-EtFRPLqOufwxxUeZj3ucJjul/img-ptu7fUtTQVlOvO8RNIpLcRQN.png?st=2023-09-10T16%3A43%3A09Z&se=2023-09-10T18%3A43%3A09Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-09-09T21%3A36%3A18Z&ske=2023-09-10T21%3A36%3A18Z&sks=b&skv=2021-08-06&sig=pDHSO1cxhS12BkFTL0M0zZhGbi%2BmgNIDxSPGZCBn9Rs%3D' }


const generateRandomId = () => {
  const timestamp = Date.now().toString(36); // Convert current timestamp to base36
  const randomString = Math.random().toString(36).substring(2); // Generate a random string
  return `${timestamp}-${randomString}`;
};

export default function GenerateImageButton({ apiKey, inputValue }: GenerateImageButtonProps) {
  const [imageUrls, setImageUrls] = useState<OpenAI.Images.Image[]>([defaultUrl]);
  const [typedText, setTypedText] = useState("");
  const [displayMessage, setDisplayMessage] = useState<DisplayMessage>({ loading: false, failed: false });
  let text = "Creating image...Please Wait...";

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  if (!apiKey) {
    throw new Error('apiKey is not defined in config file');
  }

  const openai = new OpenAI({ apiKey: apiKey, dangerouslyAllowBrowser: true });

  const generateImage = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setDisplayMessage({ loading: true, failed: false })
    try {
      const res = await openai.images.generate({
        prompt: inputValue || "dog jumping",
        n: 1,
        response_format: 'url',
        size: "512x512",
      });
      setDisplayMessage({ loading: false, failed: false })
      setImageUrls(res.data)
    } catch (err) {
      setImageUrls([]);
      setDisplayMessage({ loading: false, failed: true })
      console.error('Request OpenAPI generate images failed', err)
    }
  };

  const openModal = (imageUrl: any) => {
    setSelectedImage(imageUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage('');
    setIsModalOpen(false);
  };


  useEffect(() => {
    if (displayMessage.loading) {
      let i = 0;
      const typing = setInterval(() => {
        setTypedText(text.slice(0, i));
        i++;
        if (i > text.length + 1) {
          i = 0;
          setTypedText('');
        }
      }, 100);
      return () => clearInterval(typing);
    }
  }, [displayMessage.loading, text])

  return (
    <div className='flex flex-col justify-center items-center'>
      <button
        onClick={(e) => generateImage(e)}
        className="transition-colors duration-300 ease-in-out px-4 py-2 font-bold text-white tracking-widest bg-blue-500 border-b-4 border-blue-700 rounded hover:bg-gradient-to-r from-blue-500 via-purple to-pink hover:border-y-pink"
      >
        Generate Image
      </button>

      {displayMessage.loading ? (
        <div className='mt-4'>
          <h3>{typedText}</h3>
          <div className="lds-ripple">
            <div></div>
            <div></div>
          </div>

        </div>
      ) : !displayMessage.failed && imageUrls[0] && (
        <div className="result-image mt-9 cursor-pointer p-4">
          <Image src={imageUrls[0].url as string | StaticImport} className="h-auto max-w-sm rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30" alt={`your generated suggestion image: ${inputValue}`} width="500" height="500"
            priority={true}
            loading='eager'
            onClick={() => openModal(imageUrls[0].url)}

          />

        </div>
      )
      }
      {displayMessage.failed && (
        <div className='mt-5'><span className="text-lg text-shadow-sm text-black animate-pulse">Sorry, we do not have a <i>suggestion</i> right now! </span></div>
      )
      }

      {isModalOpen && (
        <Modal imageUrl={selectedImage} onClose={closeModal} />
      )}

    </div>
  );
}
