import { ref } from 'vue'

const useCounter = (initValue = 5) => {
     const counter = ref(initValue);

     return {
       counter,
       // methods
       increase: () => (counter.value += 1),
       decrease: () => (counter.value -= 1),
     };
}

export default useCounter;