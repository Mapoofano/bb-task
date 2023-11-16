import { userAddress } from '@/store/store';
import { IAddress } from '@/store/types';
import { Dialog, Transition } from '@headlessui/react';
import { useAtom } from 'jotai';
import { Fragment, useState } from 'react';
import RadioGroupComponent from './RadioGroupComponent';

type TAddressesModal = {
  open: boolean;
  setOpen: () => void;
  addressList: IAddress[];
};

export default function AddressesModal(props: TAddressesModal) {
  const [address, setAddress] = useAtom(userAddress);

  const [selectedAddress, setSelectedAddress] = useState<IAddress>();

  return (
    <Transition appear show={props.open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={props.setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-full"
              enterTo="opacity-100 translate-y-0"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-full"
            >
              <Dialog.Panel className="w-full fixed bottom-b max-w-sm transform overflow-hidden bottom-0 rounded-sm bg-white align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="h-14 text-lg font-semibold py-[14px] px-5 border-b border-gray-300 flex justify-between flex-row-reverse"
                >
                  <span>انتخاب آدرس</span>
                  <svg
                    onClick={props.setOpen}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    className="cursor-pointer"
                  >
                    <path
                      d="M18.9997 6.89976L17.5995 5.49951L11.9992 11.0998L6.399 5.49951L4.99875 6.89976L10.599 12.5L4.99875 18.1003L6.399 19.5005L11.9992 13.9003L17.5995 19.5005L18.9997 18.1003L13.3995 12.5L18.9997 6.89976Z"
                      fill="#C2C2C2"
                    />
                  </svg>
                </Dialog.Title>
                {/* <div className="mt-2 overflow-auto max-h-80">
                  {props.addressList && props.addressList.map((address) => (
                    <div
                      key={address.id}
                      className="flex p-2"
                    >
                      ij
                      <div className=' space-y-2 text-right w-full flex flex-col items-end'>
                        <h3>{address.name}</h3>
                        <p className="text-sm text-gray-500 w-11/12">
                          {address.details}
                        </p>
                      </div>
                    </div>
                  ))}
                </div> */}

                <RadioGroupComponent
                  addresses={props.addressList}
                  selectedAddress={selectedAddress}
                  setSelectedAddress={setSelectedAddress}
                />

                <div className="mt-4 p-5">
                  <button
                    className="w-full inline-flex justify-center rounded-sm p-3 border border-transparent bg-black text-sm font-medium text-white"
                    onClick={() => {
                      setAddress(selectedAddress ? selectedAddress : null);
                      props.setOpen();
                    }}
                  >
                    انتخاب
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
