const useFetchData = (url: string) => {
    const fetchData = async () => {
        try {
            const response = await fetch(url, {
                method: "GET",
                credentials: 'include',
                headers: {
                    "Content-Type": "application/json",
                }
            });
       
            return await response.json();
        } catch (error) {
            console.error("Error fetching data:", error);
        
        }
    };
   const data = fetchData();
    return data;
};

export default useFetchData;
