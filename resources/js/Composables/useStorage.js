import {ref, watch} from "vue";

export function useStorage(key, val = null){

    let storedVal = read();

    if(storedVal){
        val = ref(storedVal);
    }else{
        val = ref(val);
        write();
    }


    watch(val, write, { deep: true });

    function write(){
        if(val.value === null || val.value === ''){
            localStorage.removeItem(key);
        }else{
            localStorage.setItem(key, JSON.stringify(val.value));
        }
    }

    function read(){
        return JSON.parse(localStorage.getItem(key));
    }

    return val;
}
