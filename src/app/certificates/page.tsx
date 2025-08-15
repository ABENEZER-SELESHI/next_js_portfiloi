import CertificateCard from "../components/CertificateCard";
import ViewCertificateCard from "../components/ViewCertificateCard";

const CertificatePage = () => {
  return (
    <div className="flex flex-col gap-5 md:gap-20 items-center">
      <h1 className="text-3xl font-bold border-white border-[3px] rounded p-3 w-fit">
        CERTIFICATE
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6 p-4">
        <CertificateCard
          image={
            "/certificates/AddisCoder2018/Screenshot 2025-08-15 061636.png"
          }
          info={
            "This is a certificate I got after attending a programming bootcamp in 2018, at Adama Science and Technology University"
          }
          pdfLink={
            "/certificates/AddisCoder2018/CamScanner 10-26-2024 06.50.pdf"
          }
          pdfName={"AbenezerSeleshiAddisCoderCertificate2018.pdf"}
        />
        <CertificateCard
          image={
            "/certificates/AddisCoder2019/Screenshot 2025-08-15 061132.png"
          }
          info={
            "This is a certificate I got after attending a programming bootcamp in 2018, at Addis Ababa University, 5 kilo."
          }
          pdfLink={
            "/certificates/AddisCoder2019/CamScanner 10-26-2024 06.52.pdf"
          }
          pdfName={"AbenezerSeleshiAddisCoderCertificate2019.pdf"}
        />
        <ViewCertificateCard
          image={"/certificates/UdacityProgramming/udacity_certificate.png"}
          info={
            "This is a certificate I got after taking online courses at Udacity."
          }
          pdfLink={
            "https://www.udacity.com/certificate/e/2d8da17e-711d-11ef-a1cf-4fee9ccf21e9"
          }
        />
      </div>
    </div>
  );
};

export default CertificatePage;
