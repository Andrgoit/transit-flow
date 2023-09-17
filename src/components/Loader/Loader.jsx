import { ThreeDots } from 'react-loader-spinner';

export default function Loader() {
  return (
    <div className="flex justify-center items-center h-screen">
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#4111c7"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
}
