import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';


const PdfViewer: React.FC<{ file: string }> = ({ file }) => {
    const [numPages, setNumPages] = useState<number | null>(null);

    function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
        setNumPages(numPages);
    }

    return (
        <div className="mt-8 border-4 border-gray-300 rounded-lg overflow-y-auto max-h-[80vh] shadow-2xl bg-gray-200">
            <Document file={file} onLoadSuccess={onDocumentLoadSuccess} loading="Loading PDF...">
                {Array.from(new Array(numPages), (_, index) => (
                    <div key={`page_wrapper_${index + 1}`} className="flex justify-center bg-gray-500">
                        <Page
                            pageNumber={index + 1}
                            renderAnnotationLayer={false}
                            renderTextLayer={false}
                            loading={`Loading page ${index + 1}...`}
                            className="shadow-lg mb-4"
                        />
                    </div>
                ))}
            </Document>
        </div>
    );
};

export default PdfViewer;