type TInputError = {
  errorMessage: string;
};

export interface Props
  extends React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    TInputError {}

const Input = ({ errorMessage, ...props }: Props) => {
  return (
    <div className="flex w-full flex-col">
      <input
        type="number"
        className={`w-full p-4 border ${
          errorMessage ? 'border-red-500' : 'border-gray-300'
        } rounded-sm`}
        {...props}
      />
      <span className="text-red-500 text-xs my-1">{errorMessage}</span>
    </div>
  );
};

export default Input;
