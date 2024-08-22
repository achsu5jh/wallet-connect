interface LoadingSpinProps {
  description: string;
}

const LoadingSpin: React.FC<LoadingSpinProps> = ({ description }) => {
  return (
    <div className="text-center">
      <div className="relative flex justify-center">
        <div className="loading-spinner"></div>
      </div>
      <p className="mt-[7px] text-[20px] text-[#F0F0F0] font-poppins text-center">
        {description}
      </p>
    </div>
  );
};

export default LoadingSpin;
