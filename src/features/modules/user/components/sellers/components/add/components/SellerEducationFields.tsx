import { ChangeEvent, FC, ReactElement } from 'react';
import Button from 'src/features/components/button/Button';
import Dropdown from 'src/features/components/dropdown/Dropdown';
import TextInput from 'src/features/components/inputs/TextInput';
import { countriesList, degreeList, yearsList } from 'src/features/store';
import { IEducationProps, IEducation } from '../../../interfaces/seller.interface';


const SellerEducationFields: FC<IEducationProps> = ({ educationFields, setEducationFields }): ReactElement => {
  const handleEducationFieldsChange = (event: ChangeEvent, index: number): void => {
    if (setEducationFields && educationFields) {
      const target: HTMLInputElement = event.target as HTMLInputElement;
      const data: IEducation[] = [...educationFields];
      data[index][target.name] = target.value;
      setEducationFields([...data]);
    }
  };

  const addEducationFields = (): void => {
    const newfield: IEducation = {
      country: 'Cuidad',
      university: '',
      title: 'Titulo',
      major: '',
      year: 'Año'
    };
    if (setEducationFields && educationFields) {
      setEducationFields([...educationFields, newfield]);
    }
  };

  const removeEducationFields = (index: number): void => {
    if (setEducationFields && educationFields && educationFields.length > 1) {
      const data: IEducation[] = [...educationFields];
      data.splice(index, 1);
      setEducationFields([...data]);
    }
  };

  return (
    <div className="border-grey flex w-full flex-col border-b px-6 pb-3 pt-6">
      <div className="flex justify-between">
        <h2 className="pb-4 text-xl font-bold">Educacion</h2>
        <Button
          className="md:text-md h-7 rounded bg-sky-500 px-6 text-center text-sm font-bold text-white hover:bg-sky-400 focus:outline-none md:px-8"
          label="Agregar otro"
          onClick={() => addEducationFields()}
        />
      </div>

      {educationFields?.map((input: IEducation, index: number) => (
        <div key={index}>
          <div className="relative">
            <TextInput
              className="border-grey mb-4 w-full rounded border p-2.5 text-sm font-normal text-gray-600 focus:outline-none"
              placeholder="Nombre de la universidad"
              type="text"
              name="university"
              value={input.university}
              onChange={(event: ChangeEvent) => handleEducationFieldsChange(event, index)}
            />
          </div>
          <div className="relative h-[55px]">
            <Dropdown
              text={input.country}
              maxHeight="300"
              showSearchInput={true}
              mainClassNames="absolute bg-white z-40"
              values={countriesList()}
              onClick={(item: string) => {
                const data: IEducation[] = [...educationFields];
                data[index]['country'] = `${item}`;
                if (setEducationFields) {
                  setEducationFields(data);
                }
              }}
            />
          </div>
          <div className="mt-4 grid h-1/5 grid-cols-4 gap-x-2 gap-y-3">
            <div className="relative">
              <Dropdown
                text={input.title}
                maxHeight="300"
                mainClassNames="absolute bg-white z-30"
                values={degreeList()}
                onClick={(item: string) => {
                  const data: IEducation[] = [...educationFields];
                  data[index]['title'] = `${item}`;
                  if (setEducationFields) {
                    setEducationFields(data);
                  }
                }}
              />
            </div>
            <div className="col-span-2">
              <TextInput
                className="border-grey w-full rounded border p-2.5 text-sm font-normal text-gray-600 focus:outline-none"
                placeholder="Major e.g: Computer Engineering"
                type="text"
                name="major"
                value={input.major}
                onChange={(event: ChangeEvent) => handleEducationFieldsChange(event, index)}
              />
            </div>
            <div className="relative">
              <Dropdown
                text={input.year}
                maxHeight="300"
                mainClassNames="absolute bg-white z-30"
                values={yearsList(100)}
                onClick={(item: string) => {
                  const data: IEducation[] = [...educationFields];
                  data[index]['year'] = `${item}`;
                  if (setEducationFields) {
                    setEducationFields(data);
                  }
                }}
              />
            </div>
            <div className="mb-2">
              {educationFields.length > 1 && index > 0 && (
                <Button
                  className="md:text-md h-7 rounded bg-red-500 px-6 text-center text-sm font-bold text-white hover:bg-red-400 focus:outline-none md:px-8"
                  onClick={() => removeEducationFields(index)}
                  label="Delete"
                />
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SellerEducationFields;
