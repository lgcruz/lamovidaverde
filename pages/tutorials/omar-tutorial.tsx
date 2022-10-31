import { useRouter } from "next/router";

function LuisPractice() {
  const router = useRouter()
  return (
    <div>
        <button 
            onClick={(): void => {
                router.push('/tutorials/');
            }}
            >
            {'<'}
        </button>
        <h3>
            {'Tutoriales de Omar'}
        </h3>
        <p>hola</p>
        
    </div>
  );
}

export default LuisPractice