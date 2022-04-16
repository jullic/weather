
const request = async (url, method = 'GET', body = null, headers = {'Content-Type': 'application/json'}) => {

    try {
        const res = await fetch(url, {method, body, headers});

        if (!res.ok) {
            return {error: true};
        }
        return await res.json();
    }
    catch(e) {
        
    }
}

export default request;