import { IAddress } from '@/store/types';
import { RadioGroup } from '@headlessui/react';
import { Dispatch, SetStateAction } from 'react';

type TRadioGroupComponent = {
  addresses: IAddress[];
  selectedAddress: IAddress | undefined;
  setSelectedAddress: Dispatch<SetStateAction<IAddress | undefined>>;
};

export default function RadioGroupComponent(props: TRadioGroupComponent) {
  return (
    <div className="mt-2 overflow-auto max-h-80 my-3">
      <div className="mx-auto w-full max-w-md">
        <RadioGroup
          value={props.selectedAddress}
          onChange={props.setSelectedAddress}
        >
          <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
          <div className="space-y-2">
            {props.addresses.map((address) => (
              <RadioGroup.Option
                key={address.id}
                value={address}
                className={({ active, checked }) =>
                  `relative flex cursor-pointer rounded-lg px-5 py-4 focus:outline-none`
                }
              >
                {({ active, checked }) => (
                  <>
                    <div className="flex w-full justify-between">
                      <div className="flex justify-end">
                        <div className="text-sm">
                          <RadioGroup.Label as="p" className={`font-medium`}>
                            {address.name}
                          </RadioGroup.Label>
                          <RadioGroup.Description
                            as="span"
                            className={`inline`}
                          >
                            <p className="text-sm text-gray-500 w-11/12">
                              {address.details}
                            </p>
                          </RadioGroup.Description>
                        </div>
                      </div>
                      {checked ? (
                        <div className="shrink">
                          <CheckIcon className="h-7 w-7" />
                        </div>
                      ) : (
                        <div className="shrink">
                          <CircleIcon className="h-7 w-7" />
                        </div>
                      )}
                    </div>
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>
    </div>
  );
}

function CheckIcon(props: any) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} stroke="#000" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#000"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CircleIcon(props: any) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} stroke="#000" />
    </svg>
  );
}
