import AddressesModal from '@/components/AddressesModal';
import Input from '@/components/Input';
import { userAddress, userNationalId, userPhoneNumber } from '@/store/store';
import {
  phoneNumberValidator,
  verifyIranianNationalId,
} from '@persian-tools/persian-tools';
import { useAtom } from 'jotai';
import { useState } from 'react';
import { useSubmitInformation } from './hooks/useSubmitInformation';
import { useUserAddress } from './hooks/useUserAddresses';

export default function SubmitInformation() {
  const [isOpen, setIsOpen] = useState(false);
  const [address] = useAtom(userAddress);
  const [nationalId, setNationalId] = useAtom(userNationalId);
  const [phoneNumber, setPhoneNumber] = useAtom(userPhoneNumber);

  const [formErrors, setFormErrors] = useState({
    nationalIdErrorMessage: '',
    phoneNumberErrorMessage: '',
  });

  const { data, isLoading, error } = useUserAddress();

  const { mutate } = useSubmitInformation();

  const handleSubmitInformation = () => {
    setFormErrors({
      nationalIdErrorMessage:
        nationalId === ''
          ? 'این قسمت نمی‌تواند خالی باشد'
          : !verifyIranianNationalId(nationalId)
          ? 'کدملی وارد شده معتبر نیست'
          : '',
      phoneNumberErrorMessage:
        phoneNumber === ''
          ? 'این قسمت نمی‌تواند خالی باشد'
          : !phoneNumberValidator(phoneNumber)
          ? 'شماره تلفن وارد شده معتبر نیست'
          : '',
    });

    if (
      !phoneNumberValidator(phoneNumber) ||
      !verifyIranianNationalId(nationalId) ||
      !address
    )
      return;

    mutate({
      addressId: address?.id!,
      nationalId: nationalId,
      phoneNumber: phoneNumber,
    });
  };

  return (
    <>
      <div className="w-full py-8 px-5 flex flex-col space-y-5 items-end h-[520px]">
        <span className="border-b border-gray-300 pb-4 w-full">
          لطفا اطلاعات شخصی مالک خودرو را وارد کنید:
        </span>

        <Input
          errorMessage={formErrors.nationalIdErrorMessage}
          placeholder="کد ملی"
          value={nationalId}
          onChange={(e) => setNationalId(e.target.value)}
        />
        <Input
          errorMessage={formErrors.phoneNumberErrorMessage}
          placeholder="شماره تلفن همراه"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <span className="border-b border-gray-300 pb-3 font-semibold w-full">
          آدرس جهت درج روی بیمه‌نامه
        </span>
        <p className="text-sm w-full">
          {address
            ? address.name
            : 'لطفا آدرسی را که می‌خواهید روی بیمه‌نامه درج شود،وارد کنید.'}
        </p>

        <button
          onClick={() => setIsOpen(true)}
          className={`text-black py-3 px-6 font-semibold bg-custom rounded-sm w-full ${
            !data ? 'animate-pulse pointer-events-none' : ''
          }`}
        >
          {address ? 'تغییر آدرس' : 'انتخاب از آدرس های من'}
        </button>
        <button
          onClick={() => handleSubmitInformation()}
          className="bg-black py-3 px-6 font-semibold text-gray-50 w-2/5 rounded-sm"
        >
          تایید و ادامه
        </button>
      </div>
      <AddressesModal
        addressList={data}
        open={isOpen}
        setOpen={() => {
          setIsOpen(false);
        }}
      />
    </>
  );
}
