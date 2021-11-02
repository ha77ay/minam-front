import Image from 'next/image'

const App = () => {
  return (
    <div>
      <Image 
        src="/snowball.png" 
        alt="스노우볼"
        width={350}
        height={350}
      />
    </div>
  );
};

export default App;