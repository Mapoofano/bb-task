import Link from 'next/link';

export default function Confirmation() {
  return (
    <>
      <div className="w-full py-8 px-5 flex flex-col space-y-5 items-end justify-between h-[520px]">
        <span className="pb-4 w-full text-green-600 font-bold text-xl">
          اطلاعات شما با موفقیت ثبت شد.
        </span>

        <Link
          href={'/'}
          className="bg-black py-3 px-6 font-semibold text-center text-gray-50 w-2/5 rounded-sm"
        >
          بازگشت
        </Link>
      </div>
    </>
  );
}
