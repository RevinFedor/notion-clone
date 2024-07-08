'use client';
import { Spinner } from '@/components/spinner';
import { api } from '@/convex/_generated/api';
import { Id } from '@/convex/_generated/dataModel';
import { useConvexAuth, useQuery } from 'convex/react';
import Image from 'next/image';

export const Heroes = () => {
    
    // const parentDocumentId: Id<'documents'> = {
    //     __tableName: 'documents',
    //     id: 'yourDocumentId',
    // };

    // const documents = useQuery(api.documents.getSidebar, {
    //     parentDocument: parentDocumentId,
    // });
    // console.log(data);

    return (
        <div className="flex flex-col items-center justify-center max-w-5xl">
            <div className="flex items-center">
                <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:h-[400px] md:w-[400px]">
                    <Image
                        src="/documents.png"
                        fill
                        className="object-contain dark:hidden"
                        alt="Documents"
                    />
                    <Image
                        src="/documents-dark.png"
                        fill
                        className="object-contain hidden dark:block"
                        alt="Documents"
                    />
                </div>
                <div className="relative h-[400px] w-[400px] hidden md:block">
                    <Image
                        src="/reading.png"
                        fill
                        className="object-contain dark:hidden"
                        alt="Reading"
                    />
                    <Image
                        src="/reading-dark.png"
                        fill
                        className="object-contain hidden dark:block"
                        alt="Reading"
                    />
                </div>
            </div>
        </div>
    );
};
