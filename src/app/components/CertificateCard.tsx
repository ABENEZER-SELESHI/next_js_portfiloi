import Image from "next/image";

interface CertificateProps {
  image: string;
  info: string;
  pdfLink: string;
  pdfName: string;
}

const CertificateCard = ({
  image,
  info,
  pdfLink,
  pdfName,
}: CertificateProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-center justify-center p-6 w-9/10 border-2 border-blue-500 rounded-2xl">
      <Image
        className="w-full h-full"
        src={image}
        alt=""
        width={300}
        height={400}
      />
      <div className="flex flex-col items-start justify-start pt-0 w-full gap-3 md:gap-5">
        <h1 className="text-4xl font-semibold">INFO</h1>
        <p className="text-2xl font-medium">{info}</p>
        <a
          href={pdfLink}
          download={pdfName}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Download pdf
        </a>
      </div>
    </div>
  );
};

export default CertificateCard;
