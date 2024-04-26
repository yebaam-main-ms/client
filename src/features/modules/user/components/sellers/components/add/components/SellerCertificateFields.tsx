import { ChangeEvent, FC, ReactElement } from 'react';
import Button from 'src/features/components/button/Button';
import Dropdown from 'src/features/components/dropdown/Dropdown';
import TextInput from 'src/features/components/inputs/TextInput';
import { yearsList } from 'src/features/store';
import { ICertificateProps, ICertificate } from '../../../interfaces/seller.interface';


const SellerCertificateFields: FC<ICertificateProps> = ({ certificatesFields, setCertificatesFields }): ReactElement => {
  const adCertificateFields = (): void => {
    const newfield: ICertificate = {
      name: '',
      from: '',
      year: 'Year'
    };
    if (certificatesFields && setCertificatesFields) {
      setCertificatesFields([...certificatesFields, newfield]);
    }
  };

  const removeCertificateFields = (index: number): void => {
    if (certificatesFields && setCertificatesFields && certificatesFields.length > 1) {
      const data: ICertificate[] = [...certificatesFields];
      data.splice(index, 1);
      setCertificatesFields([...data]);
    }
  };

  const handleCertificateFieldsChange = (event: ChangeEvent, index: number): void => {
    if (certificatesFields && setCertificatesFields) {
      const target: HTMLInputElement = event.target as HTMLInputElement;
      const data: ICertificate[] = [...certificatesFields];
      data[index][target.name] = target.value;
      setCertificatesFields([...data]);
    }
  };

  return (
    <>
      <div className="border-grey flex min-h-[250px] w-full flex-col border-b px-6 pb-3 pt-6">
        <div className="flex justify-between">
          <h2 className="pb-4 text-xl font-bold">Certificados</h2>
          <Button
            className="md:text-md h-7 rounded bg-sky-500 px-6 text-center text-sm font-bold text-white hover:bg-sky-400 focus:outline-none md:px-8"
            onClick={adCertificateFields}
            label="Agregar otro"
          />
        </div>
        {certificatesFields?.map((input: ICertificate, index: number) => (
          <div key={index}>
            <div className="flex flex-col">
              <TextInput
                className="border-grey mb-4 w-full rounded border p-2.5 text-sm font-normal text-gray-600 focus:outline-none"
                placeholder="Cerficado o Insignia"
                type="text"
                name="name"
                value={input.name}
                onChange={(event: ChangeEvent) => handleCertificateFieldsChange(event, index)}
              />
              <TextInput
                className="border-grey mb-4 w-full rounded border p-2.5 text-sm font-normal text-gray-600 focus:outline-none"
                placeholder="Nombre de la institucion que expide el certificado"
                type="text"
                name="from"
                value={input.from}
                onChange={(event: ChangeEvent) => handleCertificateFieldsChange(event, index)}
              />
            </div>
            <div className="relative flex flex-col">
              <Dropdown
                text={`${input.year}`}
                maxHeight="300"
                mainClassNames="absolute bg-white z-10"
                values={yearsList(100)}
                onClick={(item: string) => {
                  const data: ICertificate[] = [...certificatesFields];
                  data[index]['year'] = `${item}`;
                  if (setCertificatesFields) {
                    setCertificatesFields([...data]);
                  }
                }}
              />
              {certificatesFields.length > 1 && index > 0 && (
                <div className="mb-4 mt-16">
                  <Button
                    className="md:text-md h-7 rounded bg-red-500 px-6 text-center text-sm font-bold text-white hover:bg-red-400 focus:outline-none md:px-8"
                    onClick={() => removeCertificateFields(index)}
                    label="Delete"
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SellerCertificateFields;
