import { ref } from "vue";
import axios from "axios";

const useUser = () => {
  const users        = ref([]);
  const isLoading    = ref(true);
  const currentPage  = ref(1);
  const errorMessage = ref();

  const getUsers = async (page = 1) => {
    if (page <= 0) page = 1;

    isLoading.value = true;

    const { data } = await axios.get(`https://reqres.in/api/users`, {
      params: { page },
    });

    console.log(data);

    if (data.data.length > 0) {
      users.value       = data.data;
      currentPage.value = page;
    } else if (currentPage.value > 0) {
      errorMessage.value = "No hay mas Usuarios";
    }

    isLoading.value = false;
  };

  const nextPage = () => getUsers(currentPage.value + 1);
  const prevPage = () => getUsers(currentPage.value - 1);

  getUsers();

  return {
    currentPage,
    errorMessage,
    isLoading,
    users,

    nextPage,
    prevPage,
  };
};

export default useUser;